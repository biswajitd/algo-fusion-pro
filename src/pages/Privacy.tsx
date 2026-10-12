const Privacy = () => (
  <div className="min-h-screen bg-background">
    <main className="container mx-auto px-4 py-12 max-w-3xl break-words">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg font-semibold mb-2">Softgogy · Biswajit Dutta</p>
      <p className="text-sm text-muted-foreground mb-8">Last updated: 12 October 2026</p>

      <section aria-labelledby="app-privacy" className="border-b border-border pb-8 mb-8 space-y-4 leading-relaxed">
        <h2 id="app-privacy" className="text-xl font-semibold">Android app: Mock Test – SBI PO, IBPS, RBI</h2>
        <p>This page provides Softgogy's website privacy policy and a privacy contact for users of Mock Test – SBI PO, IBPS, RBI, published by Biswajit Dutta / Softgogy.</p>
        <p className="border-l-2 border-primary pl-4 text-muted-foreground">The Android app's data collection, permissions, third-party services, sharing, and retention practices have not yet been verified for this page. The website disclosures below must not be treated as a complete app-specific privacy declaration until those details are confirmed.</p>
        <p>For questions about information associated with your use of the app, or to request access, correction, or deletion, email <a className="text-primary underline underline-offset-4" href="mailto:biswajit@softgogy.com">biswajit@softgogy.com</a>. Include the app name and enough information to identify the relevant records; do not send passwords, banking credentials, or identity documents.</p>
      </section>

      <section aria-labelledby="website-privacy" className="space-y-4 text-foreground leading-relaxed">
        <h2 id="website-privacy" className="text-2xl font-semibold">Softgogy website &amp; trading services</h2>
        <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Account information:</strong> name, email, phone number.</li>
          <li><strong>Payment information:</strong> UPI transaction reference (UTR) and amount. We do not store card or bank account numbers.</li>
          <li><strong>Technical information:</strong> IP address and user-agent (for fraud prevention only).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">2. Broker Credentials</h2>
        <p>Broker API keys you configure are used solely to place orders on your behalf in your own broker account. We do not have, request, or store your broker login password.</p>

        <h2 className="text-xl font-semibold mt-6">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Activating and managing your subscription.</li>
          <li>Sending transactional emails (payment receipt, account updates, support).</li>
          <li>Detecting and preventing fraudulent payment submissions.</li>
          <li>Providing customer support.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">4. Sharing</h2>
        <p>We do not sell or rent your data. We share information only with service providers who help us operate the platform (email delivery, hosting), under confidentiality obligations. We may disclose information when required by law.</p>

        <h2 className="text-xl font-semibold mt-6">5. Data Retention</h2>
        <p>Account and payment records are retained for as long as your account is active, plus the period required for tax and legal compliance (typically 7 years).</p>

        <h2 className="text-xl font-semibold mt-6">6. Security</h2>
        <p>Data is stored on encrypted infrastructure with role-based access. Despite reasonable safeguards, no system is 100% secure; please use a strong unique password.</p>

        <h2 className="text-xl font-semibold mt-6">7. Your Rights</h2>
        <p>You may request access, correction, or deletion of your personal data by writing to <a className="text-primary underline underline-offset-4" href="mailto:biswajit@softgogy.com">biswajit@softgogy.com</a>. Identify the service and account concerned. We may need to verify that the request relates to your own information. Records required for tax, legal compliance, or fraud prevention may be retained as described above.</p>

        <h2 className="text-xl font-semibold mt-6">8. Cookies</h2>
        <p>We use essential cookies for session management. We do not use third-party advertising or tracking cookies.</p>

        <h2 className="text-xl font-semibold mt-6">9. Contact</h2>
        <p>Softgogy, 397 Motilal Colony (Gr. Floor), Kolkata, India<br />Email: biswajit@softgogy.com · Phone: +91 7003460866</p>

        <h2 className="text-xl font-semibold mt-6">10. Policy Updates</h2>
        <p>Changes to this policy will be published on this page with an updated revision date. Review this page for the current policy.</p>
      </section>
    </main>
  </div>
);

export default Privacy;
