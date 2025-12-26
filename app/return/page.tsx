"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, Variants } from "framer-motion";
import { Ban, MessageCircle, AlertCircle, UtensilsCrossed, AlertTriangle, MessageSquare, RefreshCw, XCircle, ShieldAlert } from "lucide-react";

export default function ReturnPage() {

  // --- CLAY TOKENS ---
  const clayCard = "bg-white shadow-[8px_8px_16px_rgba(214,198,186,0.5),_-4px_-4px_12px_rgba(255,255,255,0.8)] rounded-[2rem] border border-transparent dark:bg-card dark:border-border dark:shadow-none";
  const textHeading = "text-[#5C4D45] dark:text-foreground font-black tracking-tight";
  const textBody = "text-[#9C8C84] dark:text-muted-foreground font-bold leading-relaxed";

  // use when policy is displayed 
  // const iconBox = "w-12 h-12 rounded-[1rem] flex items-center justify-center mb-4 bg-[#FFF0E6] text-[#FF9E75] dark:bg-primary/10 dark:text-primary shadow-sm";
  const iconBox = "w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-6 bg-[#FFF0E6] text-[#FF9E75] dark:bg-primary/10 dark:text-primary shadow-sm";

  // --- ANIMATIONS ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemUpVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] dark:bg-background selection:bg-orange-100 dark:selection:bg-primary/30 font-sans">
      <Navbar />
      <main className="py-20 mt-20 lg:py-32">
        <motion.div
          className="max-w-3xl mx-auto px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemUpVariants} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white dark:bg-secondary rounded-full text-[#FF9E75] dark:text-foreground font-black text-xs uppercase tracking-wider mb-6 shadow-sm border border-[#F5EFE8] dark:border-border">
              Last updated: December 2025
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${textHeading}`}>
              Return Policy
            </h1>
          </motion.div>

          {/* Main Policy Card */}
          <motion.div
            variants={itemUpVariants}
            className={`p-10 md:p-16 text-center flex flex-col items-center ${clayCard}`}
          >
            <div className={iconBox}>
              <Ban size={32} strokeWidth={3} />
            </div>

            <h2 className={`text-2xl md:text-3xl mb-6 ${textHeading}`}>
              No Returns Accepted
            </h2>

            <p className={`text-lg md:text-xl max-w-lg mx-auto mb-8 ${textBody}`}>
              We do not accept any returns. If you experience any issues with your order, please contact the vendor directly to resolve your concerns.
            </p>

            {/* Optional Helper Note */}
            <div className="w-full bg-[#F5EFE8] dark:bg-muted/50 rounded-[1.5rem] p-6 flex gap-4 items-start text-left mt-4">
              <AlertCircle className="shrink-0 text-[#FF9E75] dark:text-primary mt-1" size={24} />
              <div>
                <h3 className={`text-sm font-black uppercase tracking-wide mb-1 ${textHeading}`}>
                  Need Assistance?
                </h3>
                <p className={`text-sm ${textBody}`}>
                  While we cannot process returns, our support team is available to help mediate serious issues with vendors.
                  <br className="my-2" />
                  <a href="/contact" className="text-[#FF9E75] hover:underline dark:text-primary">Contact Support &rarr;</a>
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </main>
      {/* 
      <main className="py-20 lg:py-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemUpVariants} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white dark:bg-secondary rounded-full text-[#FF9E75] dark:text-foreground font-black text-xs uppercase tracking-wider mb-6 shadow-sm border border-[#F5EFE8] dark:border-border">
              Last updated: December 2025
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${textHeading}`}>
              Return Policy
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${textBody}`}>
              How we handle issues with food orders to ensure your satisfaction.
            </p>
          </motion.div>

          <div className="space-y-8">

            <motion.section variants={itemUpVariants} className={`p-8 md:p-10 ${clayCard}`}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className={iconBox}>
                    <UtensilsCrossed size={24} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h2 className={`text-2xl mb-4 ${textHeading}`}>Food Orders</h2>
                  <p className={`mb-4 ${textBody}`}>
                    Due to the perishable nature of food and strict health safety regulations, <strong>we generally do not accept physical returns</strong> of food items once they have been delivered.
                  </p>
                  <p className={textBody}>
                    However, we are committed to ensuring your satisfaction. If something is wrong, we will fix it.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={itemUpVariants} className={`p-8 md:p-10 ${clayCard}`}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className={iconBox}>
                    <AlertTriangle size={24} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h2 className={`text-2xl mb-4 ${textHeading}`}>Quality Issues</h2>
                  <p className={`mb-4 ${textBody}`}>Please report the issue if you receive food that is:</p>
                  <ul className={`list-disc pl-5 space-y-2 ${textBody}`}>
                    <li>Spoiled, damaged, or contaminated</li>
                    <li>Significantly different from what you ordered</li>
                    <li>Missing items</li>
                    <li>Cold (when it should be hot) or improperly prepared</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.section variants={itemUpVariants} className={`p-8 ${clayCard}`}>
                <div className={iconBox}>
                  <MessageSquare size={24} strokeWidth={2.5} />
                </div>
                <h2 className={`text-2xl mb-4 ${textHeading}`}>Reporting Process</h2>
                <ol className={`list-decimal pl-5 space-y-3 ${textBody}`}>
                  <li>Contact us within <strong>2 hours</strong> of delivery.</li>
                  <li>Provide your order number.</li>
                  <li>Send photos of the item if applicable.</li>
                  <li>Our team responds within 30 minutes during business hours.</li>
                </ol>
              </motion.section>

              <motion.section variants={itemUpVariants} className={`p-8 ${clayCard}`}>
                <div className={iconBox}>
                  <RefreshCw size={24} strokeWidth={2.5} />
                </div>
                <h2 className={`text-2xl mb-4 ${textHeading}`}>Resolutions</h2>
                <p className={`mb-3 ${textBody}`}>Depending on the situation, we may offer:</p>
                <ul className={`list-disc pl-5 space-y-2 ${textBody}`}>
                  <li>A replacement order (no cost)</li>
                  <li>A full or partial refund to Wallet</li>
                  <li>Credit for a future order</li>
                </ul>
              </motion.section>
            </div>

            <motion.section variants={itemUpVariants} className={`p-8 md:p-10 ${clayCard}`}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className={iconBox}>
                    <XCircle size={24} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h2 className={`text-2xl mb-4 ${textHeading}`}>Non-Refundable Situations</h2>
                  <ul className={`list-disc pl-5 space-y-2 ${textBody}`}>
                    <li>Food that has been fully consumed.</li>
                    <li>Issues reported more than 2 hours after delivery.</li>
                    <li>Personal taste preferences (e.g., "too spicy").</li>
                    <li>Orders delivered to incorrect addresses due to customer error.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section variants={itemUpVariants} className={`p-8 bg-[#FFF0F0] border border-[#FFE4E4] rounded-[2rem] dark:bg-red-900/10 dark:border-red-900/20`}>
              <div className="flex gap-4 items-start">
                <ShieldAlert className="text-[#FF6B6B] dark:text-red-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-black text-[#FF6B6B] dark:text-red-400 mb-2">Health & Safety Warning</h3>
                  <p className="text-[#FF6B6B]/80 dark:text-red-400/80 font-bold text-sm leading-relaxed">
                    For your safety, if you suspect any food safety issue (contamination or spoilage), <strong>do not consume the item</strong>. Take photos immediately and contact our support team.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={itemUpVariants} className="text-center pt-8">
              <p className={textBody}>
                Need to report an issue? Contact us at{' '}
                <a
                  href="mailto:thisisanshrastogi@gmail.com"
                  className="text-[#FF9E75] font-black hover:underline dark:text-primary"
                >
                  thisisanshrastogi@gmail.com
                </a>
              </p>
            </motion.section>
          </div>
        </motion.div>
      </main> */}

      <Footer />
    </div>
  );
}