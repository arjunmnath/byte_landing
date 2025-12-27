"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, Variants } from "framer-motion";
import {
  Trash2,
  AlertTriangle,
  Wallet,
  History,
  Shield,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function DeleteAccountPage() {
  // --- CLAY TOKENS ---
  const clayCard =
    "bg-white shadow-[8px_8px_16px_rgba(214,198,186,0.5),_-4px_-4px_12px_rgba(255,255,255,0.8)] rounded-[2rem] border border-transparent dark:bg-card dark:border-border dark:shadow-none";
  const textHeading =
    "text-[#5C4D45] dark:text-foreground font-black tracking-tight";
  const textBody =
    "text-[#9C8C84] dark:text-muted-foreground font-bold leading-relaxed";

  const iconBox =
    "w-12 h-12 rounded-[1rem] flex items-center justify-center mb-4 bg-[#FFF0E6] text-[#FF9E75] dark:bg-primary/10 dark:text-primary shadow-sm";

  // --- ANIMATION ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemUpVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] dark:bg-background selection:bg-orange-100 dark:selection:bg-primary/30 font-sans">
      <Navbar />

      <main className="py-20 lg:py-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemUpVariants} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white dark:bg-secondary rounded-full text-[#FF9E75] dark:text-foreground font-black text-xs uppercase tracking-wider mb-6 shadow-sm border border-[#F5EFE8] dark:border-border">
              Account Management
            </div>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${textHeading}`}
            >
              Delete Your Account
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${textBody}`}>
              We're sorry to see you go. Here is everything you need to know
              about deleting your Byte account and data.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Critical Warning Card */}
            <motion.section
              variants={itemUpVariants}
              className={`p-8 md:p-10 bg-[#FFF0F0] border border-[#FFE4E4] rounded-[2rem] dark:bg-red-900/10 dark:border-red-900/20 shadow-[8px_8px_16px_rgba(255,200,200,0.3),_-4px_-4px_12px_rgba(255,255,255,0.8)] dark:shadow-none`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0 w-14 h-14 bg-white/60 dark:bg-red-900/30 rounded-[1rem] flex items-center justify-center text-[#FF6B6B] dark:text-red-400">
                  <AlertTriangle size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h2
                    className={`text-2xl mb-4 font-black text-[#5C4D45] dark:text-red-400`}
                  >
                    Before You Proceed
                  </h2>
                  <p
                    className={`mb-4 font-bold text-[#FF6B6B]/90 dark:text-red-400/80 leading-relaxed`}
                  >
                    Deleting your account is permanent and cannot be undone.
                    Please read the following consequences carefully:
                  </p>
                  <ul
                    className={`list-disc pl-5 space-y-2 font-bold text-[#5C4D45] dark:text-muted-foreground`}
                  >
                    <li>
                      <span className="text-[#FF6B6B] dark:text-red-400">
                        Wallet Balance:
                      </span>{" "}
                      Any remaining funds in your Byte Wallet will be forfeited.
                      We recommend using your balance before deletion.
                    </li>
                    <li>
                      <span className="text-[#FF6B6B] dark:text-red-400">
                        Profile Data:
                      </span>{" "}
                      Your personal information, saved addresses, and
                      preferences will be erased.
                    </li>
                    <li>
                      <span className="text-[#FF6B6B] dark:text-red-400">
                        Recovery:
                      </span>{" "}
                      You will not be able to reactivate this account or
                      retrieve order history.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* How to Delete Steps */}
            <motion.section
              variants={itemUpVariants}
              className={`p-8 md:p-10 ${clayCard}`}
            >
              <h2 className={`text-2xl mb-8 ${textHeading}`}>
                How to Delete Your Account
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "1. Go to Profile",
                    desc: "Open the Byte app and navigate to the 'Profile' tab in the navigation bar.",
                  },
                  {
                    title: "2. Settings",
                    desc: "Tap on the Settings gear icon and select 'Account Management'.",
                  },
                  {
                    title: "3. Delete",
                    desc: "Tap 'Delete Account' and confirm your choice via email verification.",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="bg-[#F5EFE8] dark:bg-muted/50 rounded-[1.5rem] p-6 relative"
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#5C4D45] dark:bg-primary text-white dark:text-primary-foreground rounded-full flex items-center justify-center font-black text-sm shadow-md">
                      {i + 1}
                    </div>
                    <h3 className={`text-lg font-black mb-2 ${textHeading}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${textBody}`}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Data Retention Policy */}
              <motion.section
                variants={itemUpVariants}
                className={`p-8 ${clayCard}`}
              >
                <div className={iconBox}>
                  <History size={24} strokeWidth={2.5} />
                </div>
                <h2 className={`text-2xl mb-4 ${textHeading}`}>
                  Data Retention
                </h2>
                <p className={`text-sm ${textBody}`}>
                  While your personal profile is deleted immediately, we may
                  retain certain transaction records (such as payment history
                  and order totals) for financial reporting and fraud prevention
                  purposes as required by law. These records will be anonymized
                  where possible.
                </p>
              </motion.section>

              {/* Security */}
              <motion.section
                variants={itemUpVariants}
                className={`p-8 ${clayCard}`}
              >
                <div className={iconBox}>
                  <Shield size={24} strokeWidth={2.5} />
                </div>
                <h2 className={`text-2xl mb-4 ${textHeading}`}>Verification</h2>
                <p className={`text-sm ${textBody}`}>
                  To prevent accidental or malicious deletion, we require a
                  verification step. You will be asked to enter your password or
                  verify a code sent to your registered email/phone number
                  before the process completes.
                </p>
              </motion.section>
            </div>

            {/* Manual Request */}
            <motion.section
              variants={itemUpVariants}
              className={`p-8 md:p-10 ${clayCard}`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="shrink-0">
                  <div className={iconBox}>
                    <Mail size={24} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="grow text-center md:text-left">
                  <h2 className={`text-2xl mb-2 ${textHeading}`}>
                    Can't access the app?
                  </h2>
                  <p className={`mb-4 ${textBody}`}>
                    If you cannot access your account to delete it manually,
                    please contact our support team to initiate a deletion
                    request.
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href="mailto:support@byte.com?subject=Account Deletion Request"
                    className="inline-flex items-center gap-2 bg-[#5C4D45] text-white px-6 py-4 rounded-[1.2rem] font-black uppercase tracking-wide hover:bg-[#4a3d36] transition-colors dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
                  >
                    Email Support <ArrowRight size={18} />
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
