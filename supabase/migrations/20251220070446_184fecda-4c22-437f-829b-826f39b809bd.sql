-- Create payment_audit_log table for fraud tracking
CREATE TABLE public.payment_audit_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_address TEXT,
  plan_name TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  utr_number TEXT NOT NULL,
  invoice_number TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  status TEXT NOT NULL DEFAULT 'submitted',
  admin_email_sent BOOLEAN DEFAULT false,
  customer_email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  notes TEXT
);

-- Enable RLS
ALTER TABLE public.payment_audit_log ENABLE ROW LEVEL SECURITY;

-- Create index on UTR for duplicate detection
CREATE INDEX idx_payment_audit_utr ON public.payment_audit_log(utr_number);

-- Create index on email for rate limiting queries
CREATE INDEX idx_payment_audit_email ON public.payment_audit_log(customer_email);

-- Create index on created_at for time-based queries
CREATE INDEX idx_payment_audit_created ON public.payment_audit_log(created_at DESC);

-- RLS policy: Only service role can insert (edge function uses service role)
CREATE POLICY "Service role can insert audit logs"
ON public.payment_audit_log
FOR INSERT
TO service_role
WITH CHECK (true);

-- RLS policy: Only service role can select (for admin queries via edge function)
CREATE POLICY "Service role can read audit logs"
ON public.payment_audit_log
FOR SELECT
TO service_role
USING (true);