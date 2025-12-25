import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-12 sm:py-16 lg:py-20 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-foreground mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Have questions or need support? We're here to help make your Byte
              experience amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="p-6 sm:p-8">
              <CardContent className="p-0">
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-card-foreground mb-3 sm:mb-4">
                  General Support
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  For general questions, account issues, or technical support.
                </p>
                <p className="text-sm sm:text-base text-foreground">
                  <a
                    href="mailto:thisisanshrastogi@gmail.com"
                    className="text-primary hover:underline break-all"
                  >
                    thisisanshrastogi@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8">
              <CardContent className="p-0">
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-card-foreground mb-3 sm:mb-4">
                  Business Inquiries
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  Interested in partnering with Byte or bringing us to your
                  campus?
                </p>
                <p className="text-sm sm:text-base text-foreground">
                  <a
                    href="mailto:thisisanshrastogi@gmail.com"
                    className="text-primary hover:underline break-all"
                  >
                    thisisanshrastogi@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-6 sm:p-8">
            <CardContent className="p-0">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-card-foreground mb-4 sm:mb-6 text-center">
                Send us a Message
              </h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 sm:px-4 py-3 sm:py-3 text-sm sm:text-base border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 sm:px-4 py-3 sm:py-3 text-sm sm:text-base border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3 text-sm sm:text-base border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 sm:px-4 py-3 sm:py-3 text-sm sm:text-base border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <div className="text-center">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
