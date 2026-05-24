import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, ShieldCheck, RefreshCw } from "lucide-react";
import { useSearchParams } from "react-router-dom";

type Submission = {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  plan_name: string;
  amount: number;
  utr_number: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  reviewed_at: string | null;
  approval_email_sent: boolean;
};

const STORAGE_KEY = "softgogy_admin_pw";

const Admin = () => {
  const [params] = useSearchParams();
  const [password, setPassword] = useState(localStorage.getItem(STORAGE_KEY) || "");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<Submission[]>([]);
  const [actionId, setActionId] = useState<string | null>(null);

  const call = async (action: "list" | "approve" | "reject", id?: string) => {
    const { data, error } = await supabase.functions.invoke("admin-payment-action", {
      body: { password, action, id },
    });
    if (error || !data?.success) {
      throw new Error(data?.error || error?.message || "Request failed");
    }
    return data;
  };

  const fetchList = async () => {
    setLoading(true);
    try {
      const d = await call("list");
      setRows(d.submissions || []);
      setAuthed(true);
      localStorage.setItem(STORAGE_KEY, password);
    } catch (e: any) {
      toast.error(e.message);
      setAuthed(false);
      localStorage.removeItem(STORAGE_KEY);
    } finally { setLoading(false); }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    await fetchList();
  };

  // Auto-login + auto-approve via email link
  useEffect(() => {
    document.title = "Admin – Softgogy";
    if (password && !authed) fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const token = params.get("token");
    const action = params.get("action");
    const id = params.get("id");
    if (authed && action === "approve" && id && token) {
      (async () => {
        try {
          setActionId(id);
          await call("approve", id);
          toast.success("Payment approved. Customer notified.");
          await fetchList();
        } catch (e: any) {
          toast.error(e.message);
        } finally { setActionId(null); }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  const act = async (id: string, action: "approve" | "reject") => {
    setActionId(id);
    try {
      await call(action, id);
      toast.success(action === "approve" ? "Approved & email sent" : "Rejected");
      await fetchList();
    } catch (e: any) {
      toast.error(e.message);
    } finally { setActionId(null); }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPassword(""); setAuthed(false); setRows([]);
  };

  if (!authed) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-3">
              <Input type="password" value={password} placeholder="Admin password"
                onChange={(e) => setPassword(e.target.value)} autoFocus />
              <Button type="submit" className="w-full" disabled={loading || !password}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign in"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const statusBadge = (s: Submission["status"]) =>
    s === "approved" ? <Badge className="bg-green-600">Approved</Badge>
    : s === "rejected" ? <Badge variant="destructive">Rejected</Badge>
    : <Badge variant="secondary">Pending</Badge>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Payment Submissions</h1>
          <p className="text-sm text-muted-foreground">{rows.length} record(s)</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={fetchList} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-1 ${loading ? "animate-spin" : ""}`} /> Refresh
          </Button>
          <Button size="sm" variant="ghost" onClick={logout}>Logout</Button>
        </div>
      </div>

      <div className="space-y-3">
        {rows.length === 0 && !loading && (
          <Card><CardContent className="p-6 text-center text-muted-foreground">No submissions yet.</CardContent></Card>
        )}
        {rows.map((r) => (
          <Card key={r.id}>
            <CardContent className="p-4 grid md:grid-cols-[1fr_auto] gap-3 items-start">
              <div className="space-y-1 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-base">{r.customer_name}</span>
                  {statusBadge(r.status)}
                  <span className="text-muted-foreground">• {new Date(r.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</span>
                </div>
                <div className="text-muted-foreground">
                  {r.customer_email} • {r.customer_phone}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                  <span><strong>Plan:</strong> {r.plan_name}</span>
                  <span><strong>Amount:</strong> ₹{Number(r.amount).toLocaleString("en-IN")}</span>
                  <span><strong>UTR:</strong> <span className="font-mono">{r.utr_number}</span></span>
                </div>
              </div>
              {r.status === "pending" ? (
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => act(r.id, "approve")} disabled={actionId === r.id}>
                    {actionId === r.id ? <Loader2 className="w-4 h-4 animate-spin" /> : "Approve"}
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => act(r.id, "reject")} disabled={actionId === r.id}>
                    Reject
                  </Button>
                </div>
              ) : (
                <div className="text-xs text-muted-foreground">
                  {r.reviewed_at && `Reviewed ${new Date(r.reviewed_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Admin;
