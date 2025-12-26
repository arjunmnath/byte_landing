"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/auth-context";
import { Navbar } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/footer"; // Footer often removed from split layouts for cleanliness
import { signIn } from "next-auth/react";
import { motion, Variants } from "framer-motion";
import { LogIn, AlertCircle, ArrowRight, Star } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  // --- CLAY TOKENS ---
  // Using a cleaner card style for the split layout
  const clayInset = "bg-[#F5EFE8] shadow-[inset_4px_4px_8px_rgba(204,190,178,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] rounded-[1rem] border-none text-[#5C4D45] placeholder-[#B0A69E] focus:ring-0 focus:outline-none transition-all focus:shadow-[inset_6px_6px_12px_rgba(204,190,178,0.6),_inset_-6px_-6px_12px_rgba(255,255,255,1)] dark:bg-muted dark:shadow-none dark:text-foreground";
  const clayBtnPrimary = "bg-[#FF9E75] text-white shadow-[6px_6px_12px_rgba(255,158,117,0.4),_-2px_-2px_6px_rgba(255,255,255,0.4)] hover:bg-[#FF9E75]/90 hover:shadow-lg active:translate-y-[2px] active:shadow-none transition-all dark:bg-primary dark:text-primary-foreground dark:shadow-none";
  const clayBtnSecondary = "bg-white text-[#5C4D45] shadow-[6px_6px_12px_rgba(214,198,186,0.5),_-2px_-2px_6px_rgba(255,255,255,0.8)] hover:bg-[#F5EFE8] hover:shadow-lg active:translate-y-[2px] active:shadow-none transition-all dark:bg-secondary dark:text-secondary-foreground dark:shadow-none";

  const textHeading = "text-[#5C4D45] dark:text-foreground font-black tracking-tight";
  const textBody = "text-[#9C8C84] dark:text-muted-foreground font-bold";

  // --- ANIMATIONS ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        router.push("/wallet");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#FFFBF7] dark:bg-background selection:bg-orange-100 dark:selection:bg-primary/30 font-sans overflow-hidden">

      {/* ---------------- LEFT SIDE: VISUAL SHOWCASE (Laptop+) ---------------- */}
      <div className="hidden lg:flex w-1/2 relative bg-[#FFF0E6] dark:bg-primary/5 flex-col justify-between p-12 lg:p-20 overflow-hidden">

        {/* Animated Blobs Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FF9E75]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FFD166]/20 rounded-full blur-3xl"
          />
        </div>

        {/* Brand */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 text-2xl font-black text-[#5C4D45] dark:text-foreground">
            <span className="w-3 h-3 rounded-full bg-[#FF9E75]"></span> Byte
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-8 text-[#FF9E75] font-black text-xs uppercase tracking-wide shadow-sm">
              <Star size={14} fill="currentColor" /> The #1 Campus Food App
            </div>
            <h1 className="text-6xl font-black text-[#5C4D45] dark:text-foreground mb-6 leading-[1.1] tracking-tight">
              Skip the line,<br />
              <span className="text-[#FF9E75]">Enjoy the time.</span>
            </h1>
            <p className="text-xl text-[#9C8C84] font-bold leading-relaxed mb-8">
              Join thousands of students ordering from their favorite campus canteens instantly. No cash, no waiting.
            </p>

            {/* Visual Stats / Trust */}
            {/* <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-12 h-12 rounded-full border-4 border-[#FFF0E6] bg-[#F5EFE8] flex items-center justify-center text-xs font-bold text-[#9C8C84] shadow-sm z-${5 - i}`}>
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Avatar" className="w-full h-full" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-[#5C4D45] dark:text-foreground">
                <span className="text-[#FF9E75]">5,000+</span> students<br />ordering daily
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Footer Link */}
        <div className="relative z-10">
          <p className="text-sm font-bold text-[#9C8C84]">© 2025 Byte Technologies</p>
        </div>
      </div>


      {/* ---------------- RIGHT SIDE: LOGIN FORM ---------------- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-24 relative">

        {/* Mobile Nav Toggle (Simplified) */}
        <div className="absolute top-6 right-6 lg:hidden">
          <Link href="/" className="text-sm font-black text-[#9C8C84] hover:text-[#FF9E75]">Back to Home</Link>
        </div>

        <motion.div
          className="w-full max-w-md"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Header */}
          <div className="mb-10">
            <div className="w-16 h-16 bg-[#FFF0E6] rounded-[1.5rem] flex items-center justify-center text-[#FF9E75] dark:bg-primary/10 dark:text-primary mb-6 shadow-sm">
              <LogIn size={32} strokeWidth={3} />
            </div>
            <h2 className={`text-4xl ${textHeading} mb-3`}>Welcome Back!</h2>
            <p className={`text-lg ${textBody}`}>
              Sign in to manage your wallet, view orders, and grab a bite.
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <Alert variant="destructive" className="bg-[#FFF0F0] border-none text-[#FF6B6B] rounded-[1rem] flex items-center p-4">
                <AlertCircle size={20} className="mr-3 shrink-0" />
                <AlertDescription className="font-bold text-sm">{error}</AlertDescription>
              </Alert>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className={`block text-xs font-black uppercase tracking-wide ml-1 ${textBody}`} htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-5 py-5 text-base ${clayInset}`}
                placeholder="name@college.edu"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className={`block text-xs font-black uppercase tracking-wide ${textBody}`} htmlFor="password">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs font-black text-[#FF9E75] hover:underline dark:text-primary">
                  Forgot Password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-5 py-5 text-base ${clayInset}`}
                placeholder="••••••••"
                required
              />
            </div>

            <Button
              type="submit"
              className={`w-full h-16 rounded-[1.2rem] text-lg font-black uppercase tracking-wide flex items-center justify-center gap-2 group ${clayBtnPrimary}`}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : (
                <>Sign In <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </Button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5DCD5] dark:border-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-[#FFFBF7] dark:bg-background px-4 font-black uppercase tracking-widest text-[#D6C6BA]">Or continue with</span>
            </div>
          </div>

          <Button
            type="button"
            className={`w-full h-16 rounded-[1.2rem] text-base font-bold flex items-center justify-center gap-3 ${clayBtnSecondary}`}
            onClick={() => signIn("google")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </Button>

          <div className="text-center mt-10">
            <span className={`text-base ${textBody}`}>
              New to Byte?{" "}
              <Link href="/register" className="text-[#FF9E75] font-black hover:underline dark:text-primary ml-1">
                Create an account
              </Link>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}