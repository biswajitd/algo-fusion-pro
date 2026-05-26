import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-api-token",
};

serve((req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  return new Response(
    JSON.stringify({
      success: false,
      error: "This legacy receipt endpoint is disabled. Receipts are issued only after manual admin verification.",
    }),
    { status: 410, headers: { "Content-Type": "application/json", ...corsHeaders } },
  );
});