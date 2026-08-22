const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.nordicmovespain.com";

export const metadata = {
  title: "Privacy Policy | Nordic Move Spain",
  description:
    "Privacy Policy of Nordic Move Spain explaining how personal data is collected, used and protected.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#302820]">
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#b78b4b]">
            Nordic Move Spain
          </p>

          <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
            Privacy Policy
          </h1>

          <p className="text-sm text-[#6b6259]">
            Last updated: 22 August 2026
          </p>
        </div>

        <div className="space-y-10 text-base leading-8">
          <section>
            <h2 className="mb-3 text-2xl font-semibold">1. Introduction</h2>
            <p>
              Nordic Move Spain respects your privacy and is committed to
              protecting your personal data. This Privacy Policy explains how
              we collect, use, store and protect personal information when you
              visit our website, contact us, submit a form, request information
              or use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              2. Who is responsible for your data?
            </h2>
            <p>
              Nordic Move Spain is responsible for the personal data processed
              in connection with this website and our services.
            </p>
            <p className="mt-3">
              If you have questions about this Privacy Policy or how your
              personal data is handled, you can contact us through the contact
              options provided on this website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              3. Personal data we may collect
            </h2>

            <p>Depending on how you interact with us, we may collect:</p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Your name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Country or region</li>
              <li>
                Information about your property search, preferred areas,
                property type and approximate budget
              </li>
              <li>
                Information about your relocation or property purchase plans
              </li>
              <li>Messages and information you submit through our forms</li>
              <li>
                Technical information such as browser type, device information,
                IP address and website activity
              </li>
              <li>
                Marketing and advertising information where you have given the
                required consent
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              4. How we collect personal data
            </h2>

            <p>We may collect personal data when you:</p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Complete a form on our website</li>
              <li>Request an Area Match Report or other information</li>
              <li>Book or request an introductory call</li>
              <li>Contact us by email, telephone or WhatsApp</li>
              <li>Submit a Google Ads lead form</li>
              <li>Use or browse our website</li>
              <li>Request information about our services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              5. How we use your personal data
            </h2>

            <p>We may use personal information to:</p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Respond to enquiries and contact requests</li>
              <li>
                Understand your property purchase and relocation requirements
              </li>
              <li>Provide requested reports, information or services</li>
              <li>Arrange introductory calls or appointments</li>
              <li>Provide buyer-side property and relocation support</li>
              <li>Improve our website and services</li>
              <li>Measure website and advertising performance</li>
              <li>
                Prevent misuse, fraud or security problems affecting our
                website or services
              </li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              6. Legal basis for processing
            </h2>

            <p>
              Where the GDPR or similar privacy legislation applies, we process
              personal data only when we have a lawful basis to do so.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Consent:</strong> for certain cookies, analytics,
                advertising or marketing activities.
              </li>
              <li>
                <strong>Contractual necessity:</strong> when processing is
                required to provide services you request.
              </li>
              <li>
                <strong>Legitimate interests:</strong> for activities such as
                responding to enquiries, operating our business and improving
                our services, where these interests do not override your
                privacy rights.
              </li>
              <li>
                <strong>Legal obligation:</strong> when we must process
                information to comply with applicable law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              7. Google Analytics, Google Tag Manager and Google Ads
            </h2>

            <p>
              We use Google services including Google Analytics, Google Tag
              Manager and Google Ads to understand website usage, measure
              advertising performance and improve our marketing.
            </p>

            <p className="mt-3">
              Where legally required, analytics and advertising technologies
              are activated only after you have provided the appropriate
              consent through our cookie settings.
            </p>

            <p className="mt-3">
              Information collected through Google services may include device
              information, browser information, approximate location, website
              interactions and advertising-related identifiers.
            </p>

            <p className="mt-3">
              Google processes certain information according to its own privacy
              policies. You can read Google&apos;s Privacy Policy at{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              8. Google Ads lead forms
            </h2>

            <p>
              When you submit information through a Google Ads lead form,
              Google may collect and process the information before making it
              available to Nordic Move Spain.
            </p>

            <p className="mt-3">
              We use the information you submit through these forms to respond
              to your request, understand your property requirements and
              contact you regarding relevant Nordic Move Spain services.
            </p>

            <p className="mt-3">
              We do not sell personal information obtained through Google Ads
              lead forms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              9. Cookies and consent
            </h2>

            <p>
              Our website may use cookies and similar technologies for
              essential website functionality, analytics and advertising.
            </p>

            <p className="mt-3">
              Where required, non-essential cookies are used only after you
              provide consent. You can review or change your choices through
              the Cookie Settings option available on our website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              10. Service providers
            </h2>

            <p>
              We use trusted service providers to operate our website and
              business. These may include providers for:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Website hosting and infrastructure</li>
              <li>Database and secure data storage</li>
              <li>Email delivery</li>
              <li>Website analytics</li>
              <li>Advertising and conversion measurement</li>
              <li>Communication and customer enquiries</li>
            </ul>

            <p className="mt-4">
              Our technology providers may include Vercel, Supabase, Resend and
              Google. These providers process information according to their
              own contractual and privacy obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              11. Sharing personal information
            </h2>

            <p>
              We do not sell your personal information. We may share personal
              information with service providers where necessary to operate our
              website or deliver requested services.
            </p>

            <p className="mt-3">
              Where your property purchase or relocation requires assistance
              from independent professionals, information will only be shared
              when necessary and appropriate for the requested service.
            </p>

            <p className="mt-3">
              This may include independent legal, technical or other
              professional service providers involved in your purchase or
              relocation process.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              12. International data transfers
            </h2>

            <p>
              Some technology providers we use may process data outside your
              country or outside the European Economic Area.
            </p>

            <p className="mt-3">
              Where required by applicable law, appropriate safeguards are
              used for international transfers of personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              13. How long we keep your information
            </h2>

            <p>
              We retain personal information only for as long as reasonably
              necessary for the purposes for which it was collected, including
              providing requested services, maintaining business records and
              complying with legal, accounting or regulatory requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              14. Data security
            </h2>

            <p>
              We take reasonable technical and organisational measures to
              protect personal information against unauthorised access, loss,
              misuse, alteration or disclosure.
            </p>

            <p className="mt-3">
              However, no internet transmission or electronic storage method
              can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              15. Your privacy rights
            </h2>

            <p>
              Depending on where you live, you may have rights concerning your
              personal information, including the right to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Request restriction of certain processing</li>
              <li>Object to certain processing</li>
              <li>Withdraw consent where processing relies on consent</li>
              <li>Request data portability where applicable</li>
              <li>
                Lodge a complaint with the relevant data protection authority
              </li>
            </ul>

            <p className="mt-4">
              To exercise a privacy right, please contact Nordic Move Spain
              using the contact details available on this website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              16. Third-party websites
            </h2>

            <p>
              Our website may contain links to third-party websites. Nordic Move
              Spain is not responsible for the privacy practices or content of
              third-party websites. We recommend reviewing their privacy
              policies separately.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              17. Changes to this Privacy Policy
            </h2>

            <p>
              We may update this Privacy Policy when our services, technology
              or legal obligations change. The latest version will always be
              published on this page together with the date of the latest
              update.
            </p>
          </section>

          <section className="border-t border-[#d8cfc3] pt-10">
            <h2 className="mb-3 text-2xl font-semibold">Contact</h2>

            <p>
              If you have questions about privacy or the use of your personal
              information, please contact Nordic Move Spain through the contact
              options available at{" "}
              <a
                href={siteUrl}
                className="underline underline-offset-4"
              >
                nordicmovespain.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}