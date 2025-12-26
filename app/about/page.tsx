"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Lightbulb, Target, Rocket, Heart } from 'lucide-react';
import { motion, Variants } from "framer-motion";

export default function AboutPage() {

  // --- CLAY TOKENS ---
  const clayCard = "bg-white shadow-[8px_8px_16px_rgba(214,198,186,0.5),_-4px_-4px_12px_rgba(255,255,255,0.8)] rounded-[2rem] border border-transparent transition-all dark:bg-card dark:border-border dark:shadow-none";
  const textHeading = "text-[#5C4D45] dark:text-foreground font-black tracking-tight";
  const textBody = "text-[#9C8C84] dark:text-muted-foreground font-bold leading-relaxed";

  const iconBox = "w-14 h-14 rounded-[1rem] flex items-center justify-center bg-[#FFF0E6] text-[#FF9E75] dark:bg-primary/10 dark:text-primary shadow-sm";

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

  const itemUpVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // The signature "Clay Pop" for cards
  const clayPopVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
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

      <main className="py-20 mt-20 lg:py-28">
        <motion.div
          className="max-w-5xl mx-auto px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Header */}
          <motion.div variants={itemUpVariants} className="text-center mb-20">
            <motion.div
              variants={clayPopVariants}
              className="inline-block px-4 py-2 bg-white dark:bg-secondary rounded-full text-[#FF9E75] dark:text-foreground font-black text-xs uppercase tracking-wider mb-6 shadow-sm border border-[#F5EFE8] dark:border-border"
            >
              Our Story
            </motion.div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${textHeading}`}>
              About Byte
            </h1>
            <p className={`text-xl md:text-2xl max-w-2xl mx-auto ${textBody}`}>
              Revolutionizing campus dining with seamless technology and student-first design.
            </p>
          </motion.div>

          <div className="space-y-12 lg:space-y-16">

            {/* Mission Section */}
            <motion.section
              variants={clayPopVariants}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className={`p-8 md:p-10 lg:p-12 ${clayCard} flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12`}
            >
              <div className="shrink-0">
                <div className={iconBox}>
                  <Target size={28} strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h2 className={`text-3xl mb-4 ${textHeading}`}>
                  Our Mission
                </h2>
                <p className={`text-lg ${textBody}`}>
                  At Byte, we believe that getting great food on campus shouldn't be complicated. We're dedicated to creating a seamless, fast, and secure food ordering experience that fits perfectly into the busy lives of college students.
                </p>
              </div>
            </motion.section>

            {/* What We Do Section */}
            <motion.section
              variants={clayPopVariants}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className={`p-8 md:p-10 lg:p-12 ${clayCard} flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12`}
            >
              <div className="shrink-0">
                <div className={iconBox}>
                  <Lightbulb size={28} strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h2 className={`text-3xl mb-6 ${textHeading}`}>
                  What We Do
                </h2>
                <div className="space-y-4">
                  <p className={textBody}>
                    Byte is a comprehensive food ordering platform designed specifically for college campuses. We connect students with their favorite canteens through an intuitive mobile-first platform.
                  </p>
                  <p className={textBody}>
                    Our digital wallet system eliminates the need for cash transactions, while real-time tracking ensures you know exactly when to pick up your food.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Why We Started Section */}
            <motion.section
              variants={clayPopVariants}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className={`p-8 md:p-10 lg:p-12 ${clayCard} flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12`}
            >
              <div className="shrink-0">
                <div className={iconBox}>
                  <Rocket size={28} strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h2 className={`text-3xl mb-6 ${textHeading}`}>
                  Why We Started
                </h2>
                <div className="space-y-4">
                  <p className={textBody}>
                    Founded by students who experienced the frustrations of campus dining firsthand—long lines, cash-only counters, and unpredictable waits.
                  </p>
                  <p className={textBody}>
                    We built Byte to solve these everyday problems with modern technology that works around your class schedule, not the other way around.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Values Section */}
            <motion.section
              variants={clayPopVariants}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className={`p-8 md:p-10 lg:p-12 ${clayCard} flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16`}
            >
              <div className="shrink-0 lg:w-1/3">
                <div className={iconBox} style={{ marginBottom: '1.5rem' }}>
                  <Heart size={28} strokeWidth={2.5} />
                </div>
                <h2 className={`text-3xl ${textHeading}`}>
                  Our Values
                </h2>
              </div>

              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { title: "Student-First", desc: "Every feature is designed with student needs in mind." },
                  { title: "Simplicity", desc: "Technology should make life easier, not more complicated." },
                  { title: "Security", desc: "Your money and data are protected with bank-grade security." },
                  { title: "Community", desc: "Supporting local campus food vendors and building connections." }
                ].map((val, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h3 className={`text-xl font-black ${textHeading}`}>{val.title}</h3>
                    <p className={textBody}>{val.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}