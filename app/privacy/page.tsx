"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, Variants } from "framer-motion";
import { Shield, Lock, Eye, Share2, Server, UserCheck, FileText } from "lucide-react";

export default function PrivacyPage() {

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

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: (
        <>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and payment information.
          </p>
          <p>
            We also automatically collect certain information about your device and usage of our service, including your IP address, browser type, operating system, and app usage patterns.
          </p>
        </>
      )
    },
    {
      icon: Server,
      title: "How We Use Your Information",
      content: (
        <>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends and usage</li>
            <li>Detect and prevent fraudulent transactions</li>
          </ul>
        </>
      )
    },
    {
      icon: Share2,
      title: "Information Sharing",
      content: (
        <>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Campus food vendors to fulfill your orders</li>
            <li>Payment processors to handle transactions</li>
            <li>Service providers who assist in our operations</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </>
      )
    },
    {
      icon: Lock,
      title: "Data Security",
      content: (
        <p>
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data and regular security assessments.
        </p>
      )
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: (
        <>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access and update your personal information</li>
            <li>Delete your account and associated data</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </>
      )
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
              Privacy Policy
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${textBody}`}>
              How we manage and protect your data at Byte.
            </p>
          </motion.div>

          {/* Policy Sections Grid */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.section
                key={idx}
                variants={itemUpVariants}
                className={`p-8 md:p-10 ${clayCard}`}
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="shrink-0">
                    <div className={iconBox}>
                      <section.icon size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="w-full">
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

            {/* Contact Section */}
            <motion.section
              variants={itemUpVariants}
              className={`p-8 md:p-10 ${clayCard}`}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="shrink-0">
                  <div className={iconBox}>
                    <FileText size={24} strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h2 className={`text-2xl mb-4 ${textHeading}`}>
                    Contact Us
                  </h2>
                  <p className={`text-sm md:text-base mb-2 ${textBody}`}>
                    If you have any questions about this Privacy Policy, please contact us at:
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