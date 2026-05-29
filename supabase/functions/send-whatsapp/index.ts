import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/twilio";

const BodySchema = z.object({
  to: z.string().min(8),         // E.164 without "whatsapp:" prefix, e.g. +917003460866
  message: z.string().min(1).max(1500),
});

function toWhatsAppE164(raw: string): string {
  const digits = (raw || "").replace(/[^\d+]/g, "");
  let e164 = digits.startsWith("+") ? digits : "";
  if (!e164) {
    const d = digits.replace(/\D/g, "");
    if (d.length === 10) e164 = "+91" + d;
    else if (d.length === 11 && d.startsWith("0")) e164 = "+91" + d.slice(1);
    else if (d.length === 12 && d.startsWith("91")) e164 = "+" + d;
    else e164 = "+" + d;
  }
  return `whatsapp:${e164}`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const TWILIO_API_KEY = Deno.env.get("TWILIO_API_KEY");
    const TWILIO_WHATSAPP_FROM = Deno.env.get("TWILIO_WHATSAPP_FROM");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    if (!TWILIO_API_KEY) throw new Error("TWILIO_API_KEY is not configured (connect Twilio)");
    if (!TWILIO_WHATSAPP_FROM) throw new Error("TWILIO_WHATSAPP_FROM is not configured");

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ success: false, error: parsed.error.flatten() }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const fromRaw = TWILIO_WHATSAPP_FROM.trim();
    const From = fromRaw.startsWith("whatsapp:") ? fromRaw : `whatsapp:${fromRaw}`;
    const To = toWhatsAppE164(parsed.data.to);

    const res = await fetch(`${GATEWAY_URL}/Messages.json`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": TWILIO_API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ From, To, Body: parsed.data.message }),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error("Twilio error", res.status, data);
      return new Response(JSON.stringify({ success: false, status: res.status, error: data }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ success: true, sid: data.sid, status: data.status }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e: any) {
    console.error("send-whatsapp error", e);
    return new Response(JSON.stringify({ success: false, error: e?.message || "Server error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
