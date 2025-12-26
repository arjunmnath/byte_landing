"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, Variants } from "framer-motion";
import {
  AlertTriangle,
  Utensils,
  Clock,
  Wallet,
  Store,
  ShieldAlert,
  UserCheck,
  RefreshCw
} from "lucide-react";

export default function DisclaimerPage() {

  // --- CLAY TOKENS ---
  const clayCard = "bg-white shadow-[8px_8px_16px_rgba(214,198,186,0.5),_-4px_-4px_12px_rgba(255,255,255,0.8)] rounded-[2rem] border border-transparent dark:bg-card dark:border-border dark:shadow-none";
  const textHeading = "text-[#5C4D45] dark:text-foreground font-black tracking-tight";
  const textBody = "text-[#9C8C84] dark:text-muted-foreground font-bold leading-relaxed";

  const iconBox = "w-12 h-12 rounded-[1rem] flex items-center justify-center mb-4 bg-[#FFF0E6] text-[#FF9E75] dark:bg-primary/10 dark:text-primary shadow-sm";

  // --- ANIMATIONS ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemUpVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const sections = [
    {
      icon: AlertTriangle,
      title: "Service Availability",
      content: "Byte provides a platform connecting students with campus food vendors. While we strive to maintain continuous service, we do not guarantee uninterrupted access. Service may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control."
    },
    {
      icon: Utensils,
      title: "Food Quality & Safety",
      content: "Byte acts as an intermediary. We are not responsible for the preparation, quality, safety, or nutritional content of food items. All food is prepared by independent vendors who are solely responsible for food safety, hygiene, and compliance with health regulations."
    },
    {
      icon: Clock,
      title: "Pickup Timing",
      content: (
        <>
          <p className="mb-2">Estimated pickup times are approximate. Byte is not responsible for delays caused by:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>High order volumes</li>
            <li>Vendor preparation times</li>
            <li>Campus events or restrictions</li>
            <li>Technical difficulties</li>
          </ul>
        </>
      )
    },
    {
      icon: Wallet,
      title: "Payment & Wallet",
      content: (
        <>
          <p className="mb-2">Customers are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Maintaining security of account credentials</li>
            <li>Monitoring wallet balance and history</li>
            <li>Reporting unauthorized transactions immediately</li>
            <li>Ensuring sufficient funds for orders</li>
          </ul>
        </>
      )
    },
    {
      icon: Store,
      title: "Third-Party Vendors",
      content: "Campus food vendors are independent businesses. Byte does not control their operations, pricing, menu availability, or business practices. Disputes regarding food quality or service should be addressed directly with the vendor."
    },
    {
      icon: ShieldAlert,
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, Byte shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our service."
    },
    {
      icon: UserCheck,
      title: "User Responsibilities",
      content: (
        <>
          <p className="mb-2">Users are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Being available to receive orders</li>
            <li>Using the service in accordance with our terms</li>
            <li>Respecting vendor policies and campus regulations</li>
          </ul>
        </>
      )
    },
    {
      icon: RefreshCw,
      title: "Changes to Service",
      content: "Byte reserves the right to modify, suspend, or discontinue any aspect of our service at any time without prior notice. We may also update our policies, features, or pricing as needed."
    }
  ];

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
              Last updated: December 2025
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${textHeading}`}>
              Disclaimer
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${textBody}`}>
              Important legal information regarding the use of Byte.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.section
                key={idx}
                variants={itemUpVariants}
                className={`p-8 md:p-10 ${clayCard}`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0">
                    <div className={iconBox}>
                      <section.icon size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h2 className={`text-2xl mb-4 ${textHeading}`}>
                      {section.title}
                    </h2>
                    <div className={`text-sm md:text-base ${textBody}`}>
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}

            {/* Contact */}
            <motion.section variants={itemUpVariants} className="text-center pt-8">
              <p className={textBody}>
                Have questions about this disclaimer? Contact us at{' '}
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
      </main>

      <Footer />
    </div>
  );
}