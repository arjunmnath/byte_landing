"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase, Send } from 'lucide-react';
import { motion, Variants } from "framer-motion";

export default function ContactPage() {

  // --- CLAY TOKENS ---
  const clayCard = "bg-white shadow-[8px_8px_16px_rgba(214,198,186,0.5),_-4px_-4px_12px_rgba(255,255,255,0.8)] rounded-[2rem] border border-transparent dark:bg-card dark:border-border dark:shadow-none";
  const clayInset = "bg-[#F5EFE8] shadow-[inset_4px_4px_8px_rgba(204,190,178,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] rounded-[1rem] border-none text-[#5C4D45] placeholder-[#B0A69E] focus:ring-0 focus:outline-none transition-all focus:shadow-[inset_6px_6px_12px_rgba(204,190,178,0.6),_inset_-6px_-6px_12px_rgba(255,255,255,1)] dark:bg-muted dark:shadow-none dark:text-foreground dark:focus:shadow-none dark:focus:ring-2 dark:focus:ring-primary";
  const clayBtn = "bg-[#FF9E75] text-white shadow-[6px_6px_12px_rgba(255,158,117,0.4),_-2px_-2px_6px_rgba(255,255,255,0.4)] hover:bg-[#FF9E75]/90 hover:shadow-lg active:translate-y-[2px] active:shadow-none transition-all dark:bg-primary dark:text-primary-foreground dark:shadow-none";

  const textHeading = "text-[#5C4D45] dark:text-foreground font-black tracking-tight";
  const textBody = "text-[#9C8C84] dark:text-muted-foreground font-bold leading-relaxed";

  const iconBox = "w-12 h-12 rounded-[1rem] flex items-center justify-center mb-4 bg-[#FFF0E6] text-[#FF9E75] dark:bg-primary/10 dark:text-primary shadow-sm";

  // --- ANIMATION VARIANTS ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Standard slide up for text elements
  const itemUpVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // slightly bouncier pop for cards
  const clayPopVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] dark:bg-background selection:bg-orange-100 dark:selection:bg-primary/30 font-sans overflow-x-hidden">
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
            <motion.div
              variants={clayPopVariants}
              className="inline-block px-4 py-2 bg-white dark:bg-secondary rounded-full text-[#FF9E75] dark:text-foreground font-black text-xs uppercase tracking-wider mb-6 shadow-sm border border-[#F5EFE8] dark:border-border"
            >
              Get in Touch
            </motion.div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${textHeading}`}>
              Contact Us
            </h1>
            <p className={`text-xl md:text-2xl max-w-2xl mx-auto ${textBody}`}>
              Have questions or need support? We're here to help make your Byte experience amazing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* General Support Card */}
            <motion.div
              variants={clayPopVariants}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              className={`p-8 ${clayCard}`}
            >
              <div className={iconBox}>
                <Mail size={24} strokeWidth={2.5} />
              </div>
              <h3 className={`text-xl mb-3 ${textHeading}`}>
                General Support
              </h3>
              <p className={`text-sm mb-4 ${textBody}`}>
                For general questions, account issues, or technical support.
              </p>
              <a
                href="mailto:thisisanshrastogi@gmail.com"
                className="text-[#FF9E75] font-black hover:underline break-all dark:text-primary transition-colors"
              >
                thisisanshrastogi@gmail.com
              </a>
            </motion.div>

            {/* Business Inquiries Card */}
            <motion.div
              variants={clayPopVariants}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              className={`p-8 ${clayCard}`}
            >
              <div className={iconBox}>
                <Briefcase size={24} strokeWidth={2.5} />
              </div>
              <h3 className={`text-xl mb-3 ${textHeading}`}>
                Business Inquiries
              </h3>
              <p className={`text-sm mb-4 ${textBody}`}>
                Interested in partnering with Byte or bringing us to your campus?
              </p>
              <a
                href="mailto:thisisanshrastogi@gmail.com"
                className="text-[#FF9E75] font-black hover:underline break-all dark:text-primary transition-colors"
              >
                thisisanshrastogi@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div variants={clayPopVariants} className={`p-8 md:p-10 ${clayCard}`}>
            <h3 className={`text-2xl font-black text-center mb-8 ${textHeading}`}>
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={itemUpVariants}>
                  <label htmlFor="name" className={`block text-xs font-black uppercase tracking-wide mb-2 ml-1 ${textBody}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-4 ${clayInset}`}
                    placeholder="Gordon Ramsay"
                  />
                </motion.div>
                <motion.div variants={itemUpVariants}>
                  <label htmlFor="email" className={`block text-xs font-black uppercase tracking-wide mb-2 ml-1 ${textBody}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-4 ${clayInset}`}
                    placeholder="chef@kitchen.com"
                  />
                </motion.div>
              </div>
              <motion.div variants={itemUpVariants}>
                <label htmlFor="subject" className={`block text-xs font-black uppercase tracking-wide mb-2 ml-1 ${textBody}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-4 ${clayInset}`}
                  placeholder="Feedback about..."
                />
              </motion.div>
              <motion.div variants={itemUpVariants}>
                <label htmlFor="message" className={`block text-xs font-black uppercase tracking-wide mb-2 ml-1 ${textBody}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-4 resize-none ${clayInset}`}
                  placeholder="Tell us how we can help..."
                />
              </motion.div>
              <motion.div variants={itemUpVariants} className="text-center pt-2">
                <Button
                  size="lg"
                  className={`w-full sm:w-auto px-8 py-6 rounded-[1.5rem] text-base font-black uppercase tracking-wide flex items-center justify-center gap-2 ${clayBtn}`}
                >
                  Send Message <Send size={18} strokeWidth={3} />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}