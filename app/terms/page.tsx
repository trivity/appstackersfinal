import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Appstackers website and products, including GroupScout, MeetingSync, Polyscribe, and GroupZen.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 15, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the Appstackers website and our software products, including
        GroupScout, MeetingSync, Polyscribe, and GroupZen (together, the
        &ldquo;Services&rdquo;). By using the Services, you agree to these
        Terms. If you are using the Services on behalf of an organization, you
        represent that you have authority to bind that organization, and
        &ldquo;you&rdquo; refers to it.
      </p>

      <section>
        <h2>1. The Services</h2>
        <p className="mt-3">
          Appstackers provides AI-powered software products and custom software
          development services. We may add, change, or remove features over
          time. We will not materially reduce the core functionality of a paid
          Service during your paid term without notice.
        </p>
      </section>

      <section>
        <h2>2. Accounts</h2>
        <p className="mt-3">
          You must provide accurate information when creating an account and
          keep your credentials secure. You are responsible for activity under
          your account. Notify us immediately at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if you suspect
          unauthorized use.
        </p>
      </section>

      <section>
        <h2>3. Acceptable Use</h2>
        <p className="mt-3">You agree not to:</p>
        <ul className="mt-3">
          <li>Use the Services in violation of any applicable law.</li>
          <li>
            Upload content you do not have the right to use, or that infringes
            the rights of others.
          </li>
          <li>
            Record or transcribe conversations without any consent required by
            applicable law.
          </li>
          <li>
            Attempt to probe, disrupt, reverse engineer, or gain unauthorized
            access to the Services or their systems.
          </li>
          <li>
            Resell or provide the Services to third parties except as expressly
            permitted.
          </li>
          <li>
            Use the Services to develop a competing product, or use automated
            means to extract data at scale without our written permission.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Your Content</h2>
        <p className="mt-3">
          You retain ownership of the content you submit to the Services
          (&ldquo;Customer Content&rdquo;). You grant us a limited license to
          host, process, and display Customer Content solely to provide and
          improve the Services for you. You are responsible for Customer
          Content and for having the rights and consents necessary to use it
          with the Services, including consent from meeting participants where
          recording or transcription laws require it.
        </p>
      </section>

      <section>
        <h2>5. AI Output</h2>
        <p className="mt-3">
          The Services use artificial intelligence. AI-generated output (such as
          transcripts, summaries, and recommendations) may contain errors and is
          provided for your convenience — it is not professional advice. Review
          output before relying on it. As between you and Appstackers, you own
          the output generated from your Customer Content.
        </p>
      </section>

      <section>
        <h2>6. Fees and Payment</h2>
        <p className="mt-3">
          Paid Services are billed as described at purchase. Unless stated
          otherwise, subscriptions renew automatically until cancelled, fees are
          non-refundable except where required by law, and prices may change
          with notice effective at your next renewal. Taxes are your
          responsibility unless we are required to collect them.
        </p>
      </section>

      <section>
        <h2>7. Intellectual Property</h2>
        <p className="mt-3">
          The Services, including software, design, logos, and content we
          provide, are owned by Appstackers or its licensors and protected by
          intellectual property laws. Except for the limited rights granted in
          these Terms, no rights are transferred to you. Feedback you provide
          may be used by us without obligation.
        </p>
      </section>

      <section>
        <h2>8. Third-Party Services</h2>
        <p className="mt-3">
          The Services may integrate with third-party products (for example,
          calendars or messaging tools). Your use of those products is governed
          by their own terms, and we are not responsible for them.
        </p>
      </section>

      <section>
        <h2>9. Disclaimers</h2>
        <p className="mt-3">
          THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
          AVAILABLE&rdquo;. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM
          ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS
          FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT
          THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT AI OUTPUT WILL
          BE ACCURATE OR COMPLETE.
        </p>
      </section>

      <section>
        <h2>10. Limitation of Liability</h2>
        <p className="mt-3">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, APPSTACKERS WILL NOT BE LIABLE
          FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
          DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL. OUR TOTAL
          LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES IN ANY 12-MONTH
          PERIOD WILL NOT EXCEED THE AMOUNTS YOU PAID US FOR THE SERVICES IN
          THAT PERIOD (OR USD $100 IF YOU HAVE PAID NOTHING). SOME JURISDICTIONS
          DO NOT ALLOW CERTAIN LIMITATIONS, SO SOME OF THE ABOVE MAY NOT APPLY
          TO YOU.
        </p>
      </section>

      <section>
        <h2>11. Indemnification</h2>
        <p className="mt-3">
          You will indemnify and hold Appstackers harmless from claims arising
          out of your Customer Content, your use of the Services in violation of
          these Terms, or your violation of applicable law.
        </p>
      </section>

      <section>
        <h2>12. Termination</h2>
        <p className="mt-3">
          You may stop using the Services at any time. We may suspend or
          terminate your access if you materially breach these Terms, if
          required by law, or if we discontinue the Services. Upon termination,
          your right to use the Services ends; sections that by their nature
          should survive (including ownership, disclaimers, limitations of
          liability, and indemnification) survive.
        </p>
      </section>

      <section>
        <h2>13. Changes to These Terms</h2>
        <p className="mt-3">
          We may update these Terms from time to time. We will post the updated
          version on this page and revise the &ldquo;Last updated&rdquo; date.
          If a change is material, we will provide reasonable notice. Your
          continued use of the Services after changes take effect constitutes
          acceptance.
        </p>
      </section>

      <section>
        <h2>14. General</h2>
        <p className="mt-3">
          These Terms are the entire agreement between you and Appstackers
          regarding the Services and supersede prior agreements on that subject.
          If any provision is found unenforceable, the rest remain in effect.
          Our failure to enforce a provision is not a waiver. You may not assign
          these Terms without our consent; we may assign them in connection with
          a merger, acquisition, or sale of assets. These Terms are governed by
          the laws of the jurisdiction in which Appstackers is established,
          without regard to conflict-of-laws rules.
        </p>
      </section>

      <section>
        <h2>15. Contact</h2>
        <p className="mt-3">
          Questions about these Terms? Email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
