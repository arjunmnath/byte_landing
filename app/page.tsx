import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-foreground mb-4 sm:mb-6 leading-tight">
              Order Food Seamlessly in Your College
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Byte lets you order and pay at the canteen with just a few taps.
            </p>
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto cursor-pointer"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Getting your favorite food is as easy as 1, 2, 3
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-serif font-bold text-primary-foreground">
                  1
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3 sm:mb-4">
                Add Money to Your Wallet
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Add money to your Byte wallet securely and manage your balance
                with ease.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-serif font-bold text-secondary-foreground">
                  2
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3 sm:mb-4">
                Place Your Order
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Place an order from the different canteens available on campus.
              </p>
            </div>
            <div className="text-center px-4 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-serif font-bold text-accent-foreground">
                  3
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3 sm:mb-4">
                Enjoy Your Food
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Enjoy quick pickup from your favorite campus
                canteens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Byte Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              Why Byte?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Experience the future of campus dining with our innovative
              features
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-card-foreground mb-3 sm:mb-4">
                  Fast Payments
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Lightning-fast payment processing with secure digital wallet
                  integration.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-card-foreground mb-3 sm:mb-4">
                  Simple Ordering
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Intuitive interface designed specifically for busy college
                  students.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-card-foreground mb-3 sm:mb-4">
                  Secure Wallet
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Bank-grade security with encrypted transactions and fraud
                  protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
