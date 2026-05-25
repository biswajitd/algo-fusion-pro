const Refund = () => (
  <div className="min-h-screen bg-background">
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 pt-16">Refund &amp; Cancellation Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: 25 May 2026</p>

      <section className="space-y-4 text-foreground">
        <h2 className="text-xl font-semibold mt-6">5-Day Free Trial</h2>
        <p>Every new user receives a 5-day free trial with full features and no credit card required. We strongly encourage evaluating the software during the trial before subscribing.</p>

        <h2 className="text-xl font-semibold mt-6">Refund Eligibility</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Within 7 days of activation:</strong> A full refund is available if the software fails to function as described and our team is unable to resolve the issue.</li>
          <li><strong>After 7 days:</strong> Subscription fees are non-refundable. You may cancel renewal at any time; access continues until the end of the paid period.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Non-Refundable Situations</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Trading losses incurred while using the software.</li>
          <li>Issues caused by broker downtime, network failure, or incorrect strategy configuration.</li>
          <li>Account suspended for violation of Terms (fraud, sharing, abuse).</li>
          <li>Change of mind after the 7-day window.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">How to Request a Refund</h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Email <a href="mailto:biswajit@softgogy.com" className="text-primary underline">biswajit@softgogy.com</a> with subject <em>"Refund Request — &lt;Your Name&gt;"</em>.</li>
          <li>Include your registered email, plan, UTR number, and a clear description of the issue.</li>
          <li>Our team will respond within 2 business days. Approved refunds are processed via UPI within 5–7 business days to the same source account.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6">Cancellation</h2>
        <p>You can cancel your subscription anytime by writing to biswajit@softgogy.com. Cancellation stops future renewals; it does not entitle you to a refund of fees already paid for the current period.</p>

        <h2 className="text-xl font-semibold mt-6">Contact</h2>
        <p>Softgogy, 397 Motilal Colony (Gr. Floor), Kolkata, India<br />Email: biswajit@softgogy.com · Phone: +91 7003460866</p>
      </section>
    </main>
  </div>
);

export default Refund;
