"use client";

import PaymentFlow from "./PaymentFlow";

type UserDetailsFormProps = {
  open: boolean;
  onClose: () => void;
  amount: number;
  planName: string;
};

export default function UserDetailsForm(props: UserDetailsFormProps) {
  return <PaymentFlow {...props} />;
}
