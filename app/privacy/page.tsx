import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Appstackers collects, uses, and protects your personal information across our website and products.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 15, 2026">
      <p>
        Appstackers (&ldquo;Appstackers&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy. This
        Privacy Policy explains what information we collect, how we use it, and
        the choices you have. It applies to this website and, unless a product
        has its own privacy notice, to our software products including
        GroupScout, MeetingSync, Polyscribe, and GroupZen (together, the
        &ldquo;Services&rdquo;).
      </p>

      <section>
        <h2>1. Information We Collect</h2>
        <h3 className="mt-4">Information you provide</h3>
        <ul className="mt-3">
          <li>
            <strong>Account details</strong> — such as your name, email address,
            and organization when you create an account or contact us.
          </li>
          <li>
            <strong>Content</strong> — information you upload or generate while
            using the Services, such as meeting recordings, transcripts,
            community data, and messages you send us.
          </li>
          <li>
            <strong>Payment information</strong> — processed by our third-party
            payment providers. We do not store full card numbers.
          </li>
        </ul>
        <h3 className="mt-6">Information collected automatically</h3>
        <ul className="mt-3">
          <li>
            <strong>Usage data</strong> — pages visited, features used, and
            interactions with the Services.
          </li>
          <li>
            <strong>Device data</strong> — browser type, operating system, IP
            address, and similar technical information.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> — used to keep you
            signed in, remember preferences, and understand how the Services are
            used. You can control cookies through your browser settings.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Information</h2>
        <ul className="mt-3">
          <li>To provide, operate, and improve the Services.</li>
          <li>To create and manage your account and authenticate you.</li>
          <li>To respond to your requests and provide customer support.</li>
          <li>
            To send service communications, and — with your consent where
            required — product updates and marketing you can opt out of at any
            time.
          </li>
          <li>To monitor performance, debug, and keep the Services secure.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <p className="mt-4">
          Where our Services use artificial intelligence to process your content
          (for example, transcribing audio or summarizing meetings), that
          processing is performed to deliver the feature you requested. We do
          not sell your personal information.
        </p>
      </section>

      <section>
        <h2>3. How We Share Information</h2>
        <p className="mt-3">We share personal information only with:</p>
        <ul className="mt-3">
          <li>
            <strong>Service providers</strong> — vendors that help us run the
            Services (hosting, analytics, payment processing, AI model
            providers), bound by contractual confidentiality obligations.
          </li>
          <li>
            <strong>Legal authorities</strong> — when required by law, or to
            protect our rights, users, or the public.
          </li>
          <li>
            <strong>Business transfers</strong> — in connection with a merger,
            acquisition, or sale of assets, in which case this Policy will
            continue to apply to your information.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Data Retention</h2>
        <p className="mt-3">
          We keep personal information only as long as needed for the purposes
          described above, to comply with legal obligations, or to resolve
          disputes. Content you delete from the Services is removed from active
          systems within a reasonable period, subject to residual copies in
          backups that expire on a rolling basis.
        </p>
      </section>

      <section>
        <h2>5. Security</h2>
        <p className="mt-3">
          We use administrative, technical, and physical safeguards designed to
          protect personal information, including encryption in transit,
          access controls, and least-privilege practices. No method of
          transmission or storage is completely secure, so we cannot guarantee
          absolute security.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p className="mt-3">
          Depending on where you live, you may have rights to access, correct,
          delete, or export your personal information, to object to or restrict
          certain processing, and to withdraw consent. Residents of the European
          Economic Area and the United Kingdom have rights under the GDPR;
          California residents have rights under the CCPA/CPRA, including the
          right to know, delete, and opt out of the sale or sharing of personal
          information (we do not sell personal information).
        </p>
        <p className="mt-4">
          To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will
          respond within the timeframe required by applicable law.
        </p>
      </section>

      <section>
        <h2>7. International Transfers</h2>
        <p className="mt-3">
          Your information may be processed in countries other than your own.
          Where required, we use appropriate safeguards such as standard
          contractual clauses to protect information transferred
          internationally.
        </p>
      </section>

      <section>
        <h2>8. Children&rsquo;s Privacy</h2>
        <p className="mt-3">
          The Services are not directed to children under 16, and we do not
          knowingly collect personal information from them. If you believe a
          child has provided us personal information, contact us and we will
          delete it.
        </p>
      </section>

      <section>
        <h2>9. Changes to This Policy</h2>
        <p className="mt-3">
          We may update this Privacy Policy from time to time. We will post the
          updated version on this page and revise the &ldquo;Last updated&rdquo;
          date. Material changes will be communicated through the Services or by
          email where appropriate.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p className="mt-3">
          Questions about this Policy or our privacy practices? Email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
