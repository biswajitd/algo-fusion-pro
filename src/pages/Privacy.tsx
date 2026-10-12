const Privacy = () => (
  <div className="min-h-screen bg-background">
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 pt-16">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: 25 May 2026</p>

      <section className="space-y-4 text-foreground">
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
        <p>You may request access, correction, or deletion of your personal data by writing to biswajit@softgogy.com.</p>

        <h2 className="text-xl font-semibold mt-6">8. Cookies</h2>
        <p>We use essential cookies for session management. We do not use third-party advertising or tracking cookies.</p>

        <h2 className="text-xl font-semibold mt-6">9. Contact</h2>
        <p>Softgogy, 397 Motilal Colony (Gr. Floor), Kolkata, India<br />Email: biswajit@softgogy.com · Phone: +91 7003460866</p>
      </section>
    </main>
  </div>
);

export default Privacy;
