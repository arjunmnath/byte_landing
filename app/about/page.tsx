import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-20 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-6">
              About Byte
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionizing campus dining with seamless technology and
              student-first design.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p>
                  At Byte, we believe that getting great food on campus
                  shouldn't be complicated. We're dedicated to creating a
                  seamless, fast, and secure food ordering experience that fits
                  perfectly into the busy lives of college students.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  What We Do
                </h2>
                <p>
                  Byte is a comprehensive food ordering platform designed
                  specifically for college campuses. We connect students with
                  their favorite campus canteens and food vendors through an
                  intuitive mobile-first platform that makes ordering food as
                  simple as a few taps.
                </p>
                <p>
                  Our digital wallet system eliminates the need for cash
                  transactions, while our real-time order tracking ensures you
                  always know when your food will be ready.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Why We Started
                </h2>
                <p>
                  Founded by college students who experienced firsthand the
                  frustrations of campus dining - long lines, limited payment
                  options, and unpredictable wait times - Byte was created to
                  solve these everyday problems with modern technology.
                </p>
                <p>
                  We understand that students need quick, reliable, and
                  affordable food options that work around their class schedules
                  and busy lifestyles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Our Values
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Student-First:</strong> Every feature is designed
                    with student needs in mind
                  </li>
                  <li>
                    <strong>Simplicity:</strong> Technology should make life
                    easier, not more complicated
                  </li>
                  <li>
                    <strong>Security:</strong> Your money and data are protected
                    with bank-grade security
                  </li>
                  <li>
                    <strong>Community:</strong> Supporting local campus food
                    vendors and building connections
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
