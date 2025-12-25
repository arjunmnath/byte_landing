import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-20 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-6">
              Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Service Availability
                </h2>
                <p>
                  Byte provides a platform connecting students with campus food
                  vendors. While we strive to maintain continuous service, we do
                  not guarantee uninterrupted access to our platform. Service
                  may be temporarily unavailable due to maintenance, technical
                  issues, or circumstances beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Food Quality and Safety
                </h2>
                <p>
                  Byte acts as an intermediary between customers and food
                  vendors. We are not responsible for the preparation, quality,
                  safety, or nutritional content of food items. All food is
                  prepared by independent vendors who are solely responsible for
                  food safety, hygiene, and compliance with health regulations.
                </p>
                <p>
                  Customers with food allergies or dietary restrictions should
                  communicate directly with vendors and verify ingredients
                  before ordering.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Pickup Timing
                </h2>
                <p>
                  Estimated pickup times are provided by vendors and are
                  approximate. Byte is not responsible for delays caused by, but
                  not limited to, the following:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>High order volumes</li>
                  {/* <li>Weather conditions</li> */}
                  <li>Vendor preparation times</li>
                  <li>Campus events or restrictions</li>
                  <li>Technical difficulties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Payment and Wallet
                </h2>
                <p>
                  While we use secure payment processing, customers are
                  responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the security of their account credentials</li>
                  <li>
                    Monitoring their wallet balance and transaction history
                  </li>
                  <li>Reporting unauthorized transactions immediately</li>
                  <li>Ensuring sufficient funds for orders</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Third-Party Vendors
                </h2>
                <p>
                  Campus food vendors are independent businesses. Byte does not
                  control their operations, pricing, menu availability, or
                  business practices. Any disputes regarding food quality,
                  service, or vendor policies should be addressed directly with
                  the vendor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, Byte shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages, including but not limited to loss of
                  profits, data, or use, arising from your use of our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  User Responsibilities
                </h2>
                <p>Users are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  {/* <li>Providing accurate delivery information</li> */}
                  <li>Being available to receive orders</li>
                  <li>Using the service in accordance with our terms</li>
                  <li>Respecting vendor policies and campus regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Changes to Service
                </h2>
                <p>
                  Byte reserves the right to modify, suspend, or discontinue any
                  aspect of our service at any time without prior notice. We may
                  also update our policies, features, or pricing as needed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this disclaimer, please contact us
                  at{" "}
                  <a
                    href="mailto:legal@thisisanshrastogi@gmail.com"
                    className="text-primary hover:underline"
                  >
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
  );
}
