const Terms = () => (
  <div className="min-h-screen bg-background">
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 pt-16">Terms &amp; Conditions</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: 25 May 2026</p>

      <section className="prose prose-neutral dark:prose-invert max-w-none space-y-4 text-foreground">
        <h2 className="text-xl font-semibold mt-6">1. Acceptance</h2>
        <p>By subscribing to or using Softgogy software, you agree to be bound by these Terms. If you do not agree, please do not use the service.</p>

        <h2 className="text-xl font-semibold mt-6">2. Service Description</h2>
        <p>Softgogy provides algorithmic trading automation tools that connect to user-owned broker accounts (Zerodha, Groww, Angel One, Upstox, 5paisa) via the broker's API. The software executes orders strictly according to user-configured rules. Softgogy does not handle, custody, or have access to any user funds.</p>

        <h2 className="text-xl font-semibold mt-6">3. Subscription &amp; Billing</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>All subscription fees are payable in advance via UPI.</li>
          <li>Access is activated within 2–4 hours after the payment is manually verified by our team.</li>
          <li>A 5-day free trial is available without payment for new users.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">4. User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>You are solely responsible for trading decisions, strategy parameters, capital allocation, and risk management.</li>
          <li>You must comply with all applicable SEBI regulations, broker terms, and tax obligations.</li>
          <li>You must keep your broker API credentials and Softgogy login credentials secure.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">5. Risk Disclaimer</h2>
        <p>Trading in financial markets involves substantial risk of loss. Past performance does not guarantee future results. Softgogy is a tool, not investment advice. We make no representation or warranty of profitability. SEBI registration is currently in progress; until granted, no part of this service constitutes investment advisory.</p>

        <h2 className="text-xl font-semibold mt-6">6. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Softgogy shall not be liable for any trading losses, missed opportunities, broker downtime, network outages, or indirect damages arising from the use of the software. Total liability in any case shall not exceed the subscription fee paid in the preceding 30 days.</p>

        <h2 className="text-xl font-semibold mt-6">7. Acceptable Use</h2>
        <p>You may not reverse-engineer, redistribute, resell, or share access to the software. Account sharing is grounds for immediate termination without refund.</p>

        <h2 className="text-xl font-semibold mt-6">8. Termination</h2>
        <p>We may suspend or terminate access for breach of these Terms, fraudulent payment, or misuse. You may cancel your subscription at any time; refunds are governed by our Refund Policy.</p>

        <h2 className="text-xl font-semibold mt-6">9. Changes</h2>
        <p>We may update these Terms from time to time. Continued use after changes constitutes acceptance of the revised Terms.</p>

        <h2 className="text-xl font-semibold mt-6">10. Contact</h2>
        <p>Softgogy, 397 Motilal Colony (Gr. Floor), Kolkata, India<br />Email: biswajit@softgogy.com · Phone: +91 7003460866</p>
      </section>
    </main>
  </div>
);

export default Terms;
