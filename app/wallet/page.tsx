"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { load } from "@cashfreepayments/cashfree-js";
import CountUp from "react-countup";
import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Wallet, Plus, CreditCard, TrendingUp, Shield, AlertCircle, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import axi from "@/lib/axi";

export default function WalletPage() {
  const router = useRouter();
  const { user, loading, updateWalletBalance } = useAuth();

  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [isPaying, setIsPaying] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const cashfreeRef = useRef<any>(null);

  // --- CLAY TOKENS ---
  const clayCard = "bg-white shadow-[8px_8px_16px_rgba(214,198,186,0.5),_-4px_-4px_12px_rgba(255,255,255,0.8)] rounded-[2rem] border border-transparent dark:bg-card dark:border-border dark:shadow-none";
  const clayInset = "bg-[#F5EFE8] shadow-[inset_4px_4px_8px_rgba(204,190,178,0.4),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] rounded-[1rem] border-none text-[#5C4D45] placeholder-[#B0A69E] focus:ring-0 focus:outline-none transition-all focus:shadow-[inset_6px_6px_12px_rgba(204,190,178,0.6),_inset_-6px_-6px_12px_rgba(255,255,255,1)] dark:bg-muted dark:shadow-none dark:text-foreground";
  const clayBtn = "bg-[#FF9E75] text-white shadow-[6px_6px_12px_rgba(255,158,117,0.4),_-2px_-2px_6px_rgba(255,255,255,0.4)] hover:bg-[#FF9E75]/90 hover:shadow-lg active:translate-y-[2px] active:shadow-none transition-all dark:bg-primary dark:text-primary-foreground dark:shadow-none";

  const textHeading = "text-[#5C4D45] dark:text-foreground font-black tracking-tight";
  const textBody = "text-[#9C8C84] dark:text-muted-foreground font-bold";

  // --- ANIMATION VARIANTS ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const clayPopVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15 } },
  };

  /* -------------------- Init Cashfree SDK (ONCE) -------------------- */
  useEffect(() => {
    const init = async () => {
      cashfreeRef.current = await load({
        mode: "production",
      });
    };
    init();
  }, []);

  /* -------------------- Auth Guard -------------------- */
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const PAYMENT_KEY = "wallet_payment_attempt_id";

  const getPaymentAttemptId = () => {
    let key = sessionStorage.getItem(PAYMENT_KEY);
    if (!key) {
      key = crypto.randomUUID();
      sessionStorage.setItem(PAYMENT_KEY, key);
    }
    return key;
  };

  const clearPaymentAttemptId = () => {
    sessionStorage.removeItem(PAYMENT_KEY);
  };

  /* -------------------- Wallet Balance -------------------- */
  const fetchWalletBalance = async () => {
    try {
      const res = await axi.get("/wallet/balance");
      const data = res.data;
      const newBalance = data.available_balance + data.reserved_balance;

      if (newBalance !== balance) {
        setBalance(newBalance);
        updateWalletBalance(newBalance);
      }
    } catch (err) {
      console.error("Failed to fetch wallet balance", err);
    }
  };

  useEffect(() => {
    fetchWalletBalance();
    // const interval = setInterval(fetchWalletBalance, 10000);
    // return () => clearInterval(interval);
  }, []);

  /* -------------------- Payments -------------------- */
  const getPaymentSession = async (amount: number) => {
    const idempotencyKey = getPaymentAttemptId();

    const res = await axi.post("/payments/create-payment", {
      order_amount: amount,
      idempotency_key: idempotencyKey,
    });
    return res.data.payment_session_id;
  };

  const handlePayment = async (amount: number) => {
    if (!cashfreeRef.current) {
      setMessage("Payment system not ready. Try again.");
      setMessageType("error");
      return;
    }

    setIsPaying(true);
    setMessage("");

    try {
      const sessionId = await getPaymentSession(amount);

      await cashfreeRef.current.checkout({
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      });

      await fetchWalletBalance();

      clearPaymentAttemptId();
      setMessage("Wallet recharged successfully");
      setMessageType("success");
    } catch (err) {
      console.error(err);
      clearPaymentAttemptId();
      setMessage("Payment failed or cancelled");
      setMessageType("error");
    } finally {
      setIsPaying(false);
    }
  };

  /* -------------------- Form -------------------- */
  const handleRecharge = (e: React.FormEvent) => {
    e.preventDefault();

    const value = Number(amount);
    if (!value || value <= 0) {
      setMessage("Enter a valid amount");
      setMessageType("error");
      return;
    }

    handlePayment(value);
  };

  const quickAmounts = [50, 100, 200, 500, 1000];
  const maskedId = user?.email
    ? `**** **** **** ${user.email.slice(-4)}`
    : "**** **** **** 1234";

  if (loading || !user) return null;

  return (
    <div className="min-h-screen bg-[#FFFBF7] dark:bg-background selection:bg-orange-100 dark:selection:bg-primary/30 font-sans">
      <Navbar />

      <main className="container mx-auto px-4 py-20 mt-20 lg:py-24 min-h-[90vh]">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ---------------- Wallet Card ---------------- */}
          <motion.div
            variants={clayPopVariants}
            className="relative w-full max-w-md mx-auto"
          >
            {/* Using Clay Card style instead of Card component */}
            <div className={`${clayCard} overflow-hidden h-full flex flex-col`}>
              <div className="p-8 space-y-8 flex-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#FFF0E6] rounded-[1rem] flex items-center justify-center text-[#FF9E75] dark:bg-primary/10 dark:text-primary shadow-sm">
                      <Wallet className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className={`text-xl ${textHeading}`}>Byte Wallet</h3>
                      <p className={`text-xs uppercase tracking-wider ${textBody}`}>
                        Digital Payments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EAF8E6] rounded-full text-[#4CAF50] dark:bg-green-900/20 dark:text-green-400">
                    <Shield className="w-3.5 h-3.5" />
                    <span className="text-xs font-black uppercase tracking-wide">
                      Secured
                    </span>
                  </div>
                </div>

                <div>
                  <p className={`text-sm font-black uppercase tracking-wide mb-1 ${textBody}`}>
                    Available Balance
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className={`text-5xl font-black ${textHeading}`}>
                      <CountUp
                        start={0}
                        end={balance}
                        duration={1}
                        separator=","
                        prefix="₹ "
                      />
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-[#FF9E75] dark:text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-wide">Active</span>
                  </div>
                </div>

                <div className="bg-[#F5EFE8] dark:bg-muted/50 rounded-[1.5rem] p-6 space-y-4 mt-auto">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className={`text-xs uppercase tracking-wide mb-1 opacity-70 ${textBody}`}>
                        Account
                      </p>
                      <p className={`text-sm font-black truncate max-w-40 text-[#5C4D45] dark:text-foreground`}>
                        {user.email}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className={`text-xs uppercase tracking-wide mb-1 opacity-70 ${textBody}`}>
                        ID
                      </p>
                      <p className="text-sm font-black font-mono text-[#5C4D45] dark:text-foreground">{maskedId}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-[#D6C6BA]/20 dark:border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#FF9E75] rounded-full" />
                      <span className={`text-xs font-bold ${textBody}`}>
                        Instant Payments
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#5C4D45] dark:bg-foreground rounded-full" />
                      <span className={`text-xs font-bold ${textBody}`}>
                        24/7 Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---------------- Recharge Card ---------------- */}
          <motion.div
            variants={clayPopVariants}
            className={`w-full max-w-md mx-auto h-fit ${clayCard} p-8`}
          >
            <div className="mb-8">
              <h2 className={`text-2xl flex items-center gap-3 mb-2 ${textHeading}`}>
                <div className="w-10 h-10 bg-[#5C4D45] rounded-full flex items-center justify-center text-white dark:bg-primary dark:text-primary-foreground">
                  <Plus className="w-5 h-5" strokeWidth={3} />
                </div>
                Recharge Wallet
              </h2>
              <p className={`text-sm ${textBody}`}>Add money to your Byte wallet instantly.</p>
            </div>

            <form onSubmit={handleRecharge} className="space-y-8">
              <div className="space-y-3">
                <label className={`block text-xs font-black uppercase tracking-wide ml-1 ${textBody}`}>
                  Enter Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C8C84] font-black text-lg">₹</span>
                  <input
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      clearPaymentAttemptId();
                    }}
                    className={`w-full pl-8 pr-4 py-5 text-xl font-black ${clayInset}`}
                    placeholder="0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className={`block text-xs font-black uppercase tracking-wide ml-1 ${textBody}`}>Quick Add</label>
                <div className="grid grid-cols-5 gap-3">
                  {quickAmounts.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => {
                        setAmount(q.toString());
                        clearPaymentAttemptId();
                      }}
                      className={`py-2 rounded-[0.8rem] text-sm font-black transition-all
                        ${amount === q.toString()
                          ? "bg-[#5C4D45] text-white shadow-md scale-105 dark:bg-primary"
                          : "bg-[#F5EFE8] text-[#9C8C84] hover:bg-[#E8DED5] dark:bg-muted dark:text-muted-foreground dark:hover:bg-accent"}
                      `}
                    >
                      ₹{q}
                    </button>
                  ))}
                </div>
              </div>

              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-[1rem] flex items-center gap-3 font-bold text-sm ${messageType === "error"
                    ? "bg-[#FFF0F0] text-[#FF6B6B]"
                    : "bg-[#EAF8E6] text-[#4CAF50]"
                    }`}
                >
                  {messageType === "error" ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
                  {message}
                </motion.div>
              )}

              <Button
                type="submit"
                disabled={isPaying}
                className={`w-full h-14 rounded-[1.2rem] text-base font-black uppercase tracking-wide flex items-center justify-center gap-2 ${clayBtn} disabled:opacity-70`}
              >
                {isPaying ? (
                  "Processing..."
                ) : (
                  <>
                    Add Money <CreditCard className="w-5 h-5" strokeWidth={2.5} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}