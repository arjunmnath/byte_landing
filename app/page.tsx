'use client';

import { Button } from "@/components/ui/button";
import { motion, Variants } from 'framer-motion';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Wallet, Zap, Smartphone, ChevronRight, Utensils, CheckCircle2 } from 'lucide-react';

export default function HomePage() {

  // --- CLAY & DARK MODE TOKENS ---
  const clayFloat = "bg-white shadow-[8px_8px_16px_rgba(214,198,186,0.5),_-4px_-4px_12px_rgba(255,255,255,0.8)] rounded-[2rem] border border-transparent dark:bg-secondary dark:shadow-none dark:border-border";

  const clayBtnPrimary = "bg-[#FF9E75] text-white shadow-[6px_6px_12px_rgba(255,158,117,0.4),_-2px_-2px_6px_rgba(255,255,255,0.4)] active:shadow-[inset_3px_3px_6px_rgba(180,100,60,0.2)] active:translate-y-[2px] transition-all duration-200 hover:bg-[#FF9E75]/90 dark:bg-primary dark:text-primary-foreground dark:shadow-none dark:hover:bg-primary/90 dark:active:translate-y-0";

  const textDark = "text-[#5C4D45] dark:text-foreground";
  const textSoft = "text-[#9C8C84] dark:text-muted-foreground";
  const iconBox = "bg-[#FFF0E6] text-[#FF9E75] dark:bg-primary/10 dark:text-primary";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] dark:bg-background font-sans selection:bg-orange-100 dark:selection:bg-primary/30">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative py-20 mt-20 lg:py-32 overflow-hidden">
        {/* Background decorative blob (Light mode only) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFF0E6] rounded-full blur-3xl opacity-50 -z-10 pointer-events-none dark:opacity-0"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-white dark:bg-secondary rounded-full text-[#FF9E75] dark:text-foreground font-black text-xs uppercase tracking-wider mb-6 shadow-sm border border-[#F5EFE8] dark:border-border">
              Campus Dining Reimagined
            </motion.div>

            <motion.h1 variants={itemVariants} className={`text-4xl sm:text-5xl md:text-7xl font-black ${textDark} mb-6 leading-[1.1] tracking-tight max-w-4xl`}>
              Order food seamlessly<br />
              <span className="text-[#FF9E75] dark:text-primary">in your college.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className={`text-lg sm:text-xl ${textSoft} font-bold mb-10 max-w-2xl mx-auto leading-relaxed`}>
              Byte lets you order and pay at the canteen with just a few taps. Skip the line, not the lunch.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className={`${clayBtnPrimary} h-auto px-8 py-5 text-lg font-black uppercase tracking-wide rounded-[1.5rem] flex items-center gap-2`}
              >
                Get Started <ChevronRight size={20} strokeWidth={3} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-black ${textDark} mb-4 tracking-tight`}>
              How It Works
            </h2>
            <p className={`${textSoft} font-bold text-lg max-w-2xl mx-auto`}>
              Getting your favorite food is as easy as 1, 2, 3.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Add Money",
                desc: "Top up your Byte wallet securely via UPI or Card.",
                icon: Wallet
              },
              {
                step: "2",
                title: "Place Order",
                desc: "Browse menus from all campus canteens and order instantly.",
                icon: Smartphone
              },
              {
                step: "3",
                title: "Enjoy Food",
                desc: "Get notified when your meal is ready for quick pickup.",
                icon: Utensils
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className={`${clayFloat} p-8 flex flex-col items-center text-center group transition-all`}
              >
                {/* Step Number Bubble */}
                <div className="w-16 h-16 rounded-full bg-[#F5EFE8] dark:bg-muted flex items-center justify-center mb-6 shadow-inner dark:shadow-none text-[#FF9E75] dark:text-primary group-hover:bg-[#FF9E75] group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon size={28} strokeWidth={2.5} />
                </div>

                <h3 className={`text-xl font-black ${textDark} mb-3`}>
                  {item.title}
                </h3>
                <p className={`${textSoft} text-sm font-bold leading-relaxed`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY BYTE SECTION --- */}
      <section className="py-20 lg:py-28 bg-[#F5EFE8]/30 dark:bg-secondary/20 border-t border-white dark:border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-black ${textDark} mb-4 tracking-tight`}>
              Why Byte?
            </h2>
            <p className={`${textSoft} font-bold text-lg max-w-2xl mx-auto`}>
              Experience the future of campus dining with features built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast Payments",
                desc: "Lightning-fast processing with zero lag. Pay in seconds."
              },
              {
                icon: CheckCircle2,
                title: "Simple Ordering",
                desc: "No clutter. Just the food you want, right when you want it."
              },
              {
                icon: Wallet,
                title: "Secure Wallet",
                desc: "Bank-grade encryption keeps your pocket money safe."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className={`bg-white dark:bg-card p-8 rounded-[2rem] shadow-sm hover:shadow-md dark:shadow-none transition-shadow duration-300 border border-[#F5EFE8] dark:border-border`}
              >
                <div className={`w-14 h-14 ${iconBox} rounded-[1rem] flex items-center justify-center mb-6`}>
                  <feature.icon size={28} strokeWidth={2.5} />
                </div>

                <h3 className={`text-xl font-black ${textDark} mb-3`}>
                  {feature.title}
                </h3>
                <p className={`${textSoft} font-bold text-sm leading-relaxed`}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}