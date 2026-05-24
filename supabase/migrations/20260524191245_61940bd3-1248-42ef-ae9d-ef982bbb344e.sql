CREATE TABLE public.payment_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  plan_name text NOT NULL,
  amount numeric NOT NULL,
  utr_number text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  approval_token text NOT NULL DEFAULT replace(gen_random_uuid()::text, '-', ''),
  ip_address text,
  user_agent text,
  notes text,
  reviewed_at timestamptz,
  reviewed_by text,
  customer_ack_sent boolean DEFAULT false,
  owner_notification_sent boolean DEFAULT false,
  approval_email_sent boolean DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.payment_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages submissions"
  ON public.payment_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX idx_payment_submissions_status ON public.payment_submissions(status, created_at DESC);
CREATE INDEX idx_payment_submissions_token ON public.payment_submissions(approval_token);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TRIGGER trg_payment_submissions_updated
BEFORE UPDATE ON public.payment_submissions
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();