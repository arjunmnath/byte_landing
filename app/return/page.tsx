import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function ReturnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-20 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-6">
              Return Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <p>
                  We do not accept any returns. If you experience any issues
                  with your order, please contact the vendor directly to resolve
                  your concerns.
                </p>
              </section>
              {/* <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Food Orders</h2>
                <p>
                  Due to the nature of food products and health safety regulations, we generally do not accept returns
                  of food items once they have been delivered. However, we are committed to ensuring your satisfaction
                  with every order.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Quality Issues</h2>
                <p>If you receive food that is:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Spoiled, damaged, or contaminated</li>
                  <li>Significantly different from what you ordered</li>
                  <li>Missing items from your order</li>
                  <li>Cold when it should be hot, or otherwise improperly prepared</li>
                </ul>
                <p>
                  Please contact us immediately at{" "}
                  <a href="mailto:thisisanshrastogi@gmail.com" className="text-primary hover:underline">
                    thisisanshrastogi@gmail.com
                  </a>{" "}
                  or through the app. We will work with you to resolve the issue, which may include a replacement order
                  or refund.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Reporting Process</h2>
                <p>To report an issue with your order:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact us within 2 hours of delivery</li>
                  <li>Provide your order number and photos if applicable</li>
                  <li>Describe the specific issue with your order</li>
                  <li>Our support team will respond within 30 minutes during business hours</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Resolution Options</h2>
                <p>Depending on the situation, we may offer:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A replacement order at no additional cost</li>
                  <li>A full or partial refund to your Byte wallet</li>
                  <li>Credit for a future order</li>
                  <li>Direct refund to your original payment method</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Non-Returnable Items</h2>
                <p>We cannot process returns for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Food consumed or partially consumed</li>
                  <li>Orders where the issue is reported more than 2 hours after delivery</li>
                  <li>Personal taste preferences</li>
                  <li>Orders delivered to incorrect addresses due to customer error</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Health and Safety</h2>
                <p>
                  For health and safety reasons, we cannot accept physical returns of food items. If you have concerns
                  about food safety or quality, please do not consume the item and contact us immediately with photos
                  and details.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Contact Information</h2>
                <p>
                  For return-related inquiries, contact us at{" "}
                  <a href="mailto:thisisanshrastogi@gmail.com" className="text-primary hover:underline">
                    thisisanshrastogi@gmail.com
                  </a>{" "}
                  or call our support line during business hours.
                </p>
              </section> */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
