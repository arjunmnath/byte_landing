"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, Variants } from "framer-motion";
import { RefreshCcw, AlertCircle, CheckCircle2, Clock, Ban, HelpCircle } from "lucide-react";

export default function RefundPage() {

  // --- CLAY TOKENS ---
  const clayCard = "bg-white shadow-[8px_8px_16px_rgba(214,198,186,0.5),_-4px_-4px_12px_rgba(255,255,255,0.8)] rounded-[2rem] border border-transparent dark:bg-card dark:border-border dark:shadow-none";
  const textHeading = "text-[#5C4D45] dark:text-foreground font-black tracking-tight";
  const textBody = "text-[#9C8C84] dark:text-muted-foreground font-bold leading-relaxed";

  const iconBox = "w-12 h-12 rounded-[1rem] flex items-center justify-center mb-4 bg-[#FFF0E6] text-[#FF9E75] dark:bg-primary/10 dark:text-primary shadow-sm";

  // --- ANIMATION ---
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

      <main className="py-20 mt-20 lg:py-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemUpVariants} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white dark:bg-secondary rounded-full text-[#FF9E75] dark:text-foreground font-black text-xs uppercase tracking-wider mb-6 shadow-sm border border-[#F5EFE8] dark:border-border">
              Last updated: January 2025
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${textHeading}`}>
              Refund Policy
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${textBody}`}>
              Clear, fair, and transparent rules for cancellations and refunds.
            </p>
          </motion.div>

          <div className="space-y-8">

            {/* Order Cancellations */}
            <motion.section variants={itemUpVariants} className={`p-8 md:p-10 ${clayCard}`}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className={iconBox}>
                    <Ban size={24} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h2 className={`text-2xl mb-4 ${textHeading}`}>Order Cancellations</h2>
                  <p className={`mb-4 ${textBody}`}>You may cancel your order and receive a full refund if:</p>
                  <ul className={`list-disc pl-5 space-y-2 mb-4 ${textBody}`}>
                    <li>The order has not yet been confirmed by the vendor</li>
                    <li>The cancellation is made within 5 minutes of placing the order</li>
                    <li>The vendor has not started preparing your food</li>
                  </ul>
                  <div className="p-4 bg-[#FFF0F0] rounded-[1rem] border border-[#FFE4E4] dark:bg-red-900/10 dark:border-red-900/20">
                    <p className="text-[#FF6B6B] font-bold text-sm dark:text-red-400">
                      Note: Once food preparation has begun, orders cannot be cancelled for a refund.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Eligibility */}
            <motion.section variants={itemUpVariants} className={`p-8 md:p-10 ${clayCard}`}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className={iconBox}>
                    <CheckCircle2 size={24} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h2 className={`text-2xl mb-4 ${textHeading}`}>Refund Eligibility</h2>
                  <p className={`mb-4 ${textBody}`}>We will provide a full refund in the following situations:</p>
                  <ul className={`list-disc pl-5 space-y-2 ${textBody}`}>
                    <li>The vendor cancelled your order after confirmation</li>
                    <li>Technical issues prevented order completion</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Refund Process */}
            <motion.section variants={itemUpVariants} className={`p-8 md:p-10 ${clayCard}`}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className={iconBox}>
                    <RefreshCcw size={24} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h2 className={`text-2xl mb-4 ${textHeading}`}>Refund Process</h2>
                  <ol className={`list-decimal pl-5 space-y-3 ${textBody}`}>
                    <li>Contact our support team within 24 hours of the incident</li>
                    <li>Provide your order number and details of the issue</li>
                    <li>Our team will review your request within 1-2 business days</li>
                    <li>Approved refunds will be processed back to your Byte wallet or original payment method</li>
                  </ol>
                </div>
              </div>
            </motion.section>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Timeline */}
              <motion.section variants={itemUpVariants} className={`p-8 ${clayCard}`}>
                <div className={iconBox}>
                  <Clock size={24} strokeWidth={2.5} />
                </div>
                <h2 className={`text-2xl mb-4 ${textHeading}`}>Refund Timeline</h2>
                <ul className={`list-disc pl-5 space-y-2 ${textBody}`}>
                  <li><strong>Byte Wallet:</strong> Instant refund upon approval</li>
                </ul>
              </motion.section>

              {/* Non-Refundable */}
              <motion.section variants={itemUpVariants} className={`p-8 ${clayCard}`}>
                <div className={iconBox}>
                  <AlertCircle size={24} strokeWidth={2.5} />
                </div>
                <h2 className={`text-2xl mb-4 ${textHeading}`}>Non-Refundable</h2>
                <ul className={`list-disc pl-5 space-y-2 ${textBody}`}>
                  <li>Orders cancelled after food preparation has begun</li>
                  <li>Personal preference or taste-related complaints</li>
                  <li>Promotional credits or discount codes</li>
                </ul>
              </motion.section>
            </div>

            {/* Contact */}
            <motion.section variants={itemUpVariants} className={`p-8 md:p-10 ${clayCard}`}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className={iconBox}>
                    <HelpCircle size={24} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h2 className={`text-2xl mb-4 ${textHeading}`}>Questions?</h2>
                  <p className={`mb-2 ${textBody}`}>
                    For refund requests or questions about this policy, please contact us at:
                  </p>
                  <a
                    href="mailto:thisisanshrastogi@gmail.com"
                    className="text-[#FF9E75] font-black hover:underline break-all dark:text-primary text-lg"
                  >
                    thisisanshrastogi@gmail.com
                  </a>
                </div>
              </div>
            </motion.section>

          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}