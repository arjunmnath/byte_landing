import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, make a
                  purchase, or contact us for support. This may include your name, email address, phone number, and
                  payment information.
                </p>
                <p>
                  We also automatically collect certain information about your device and usage of our service,
                  including your IP address, browser type, operating system, and app usage patterns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect and prevent fraudulent transactions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Campus food vendors to fulfill your orders</li>
                  <li>Payment processors to handle transactions</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. This includes encryption of sensitive data and regular
                  security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:thisisanshrastogi@gmail.com" className="text-primary hover:underline">
                    thisisanshrastogi@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
