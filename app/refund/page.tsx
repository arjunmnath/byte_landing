import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-20 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-6">
              Refund Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Order Cancellations
                </h2>
                <p>You may cancel your order and receive a full refund if:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    The order has not yet been confirmed by the vendor, and
                  </li>
                  <li>
                    The cancellation is made within 5 minutes of placing the
                    order, and
                  </li>
                  <li>The vendor has not started preparing your food</li>
                </ul>
                <p>
                  Once food preparation has begun, orders cannot be cancelled
                  for a refund.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Refund Eligibility
                </h2>
                <p>
                  We will provide a full refund in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  {/* <li>Your order was not delivered within the estimated time frame due to vendor error</li> */}
                  {/* <li>You received the wrong order</li> */}
                  {/* <li>Your food was damaged or spoiled upon delivery</li> */}
                  <li>The vendor cancelled your order after confirmation</li>
                  <li>Technical issues prevented order completion</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Refund Process
                </h2>
                <p>To request a refund:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Contact our support team within 24 hours of the incident
                  </li>
                  <li>Provide your order number and details of the issue</li>
                  <li>
                    Our team will review your request within 1-2 business days
                  </li>
                  <li>
                    Approved refunds will be processed back to your Byte wallet
                    or original payment method
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Refund Timeline
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Byte Wallet:</strong> Instant refund upon approval
                  </li>
                  {/* <li>
                    <strong>Credit/Debit Cards:</strong> 3-5 business days
                  </li>
                  <li>
                    <strong>Bank Transfers:</strong> 5-7 business days
                  </li> */}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Non-Refundable Items
                </h2>
                <p>The following are not eligible for refunds:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Orders cancelled after food preparation has begun</li>
                  <li>Personal preference or taste-related complaints</li>
                  {/* <li>Orders where you provided incorrect delivery information</li> */}
                  <li>Promotional credits or discount codes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p>
                  For refund requests or questions about this policy, please
                  contact us at{" "}
                  <a
                    href="mailto:thisisanshrastogi@gmail.com"
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
