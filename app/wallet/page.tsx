"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { load } from "@cashfreepayments/cashfree-js";
import CountUp from "react-countup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Wallet, Plus, CreditCard, TrendingUp, Shield } from "lucide-react";
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

  // useEffect(() => {
  //   fetchWalletBalance();
  //   const interval = setInterval(fetchWalletBalance, 10000);
  //   return () => clearInterval(interval);
  // }, []);

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
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-16 h-screen my-20">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* ---------------- Wallet Card ---------------- */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="bg-card border rounded-3xl shadow-lg overflow-hidden">
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Byte Wallet</h3>
                      <p className="text-xs text-muted-foreground">
                        Digital Payments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-accent" />
                    <span className="text-xs text-muted-foreground">
                      Secured
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Available Balance
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">
                      <CountUp
                        start={0}
                        end={balance}
                        duration={1}
                        separator=","
                        prefix="₹ "
                      />
                    </span>
                    <div className="flex items-center gap-1 text-accent">
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-xs font-medium">Active</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Account
                      </p>
                      <p className="text-sm font-medium truncate max-w-40">
                        {user.email}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        ID
                      </p>
                      <p className="text-sm font-mono">{maskedId}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-xs text-muted-foreground">
                        Instant Payments
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-xs text-muted-foreground">
                        24/7 Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- Recharge Card ---------------- */}
          <Card className="h-fit shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Recharge Wallet
              </CardTitle>
              <CardDescription>Add money to your Byte wallet</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleRecharge} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Enter Amount (₹)
                  </Label>
                  <Input
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);

                      clearPaymentAttemptId();
                    }}
                    className="h-12 text-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Quick Add</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {quickAmounts.map((q) => (
                      <Button
                        key={q}
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-10"
                        onClick={() => {
                          setAmount(q.toString());
                          clearPaymentAttemptId();
                        }}
                      >
                        ₹{q}
                      </Button>
                    ))}
                  </div>
                </div>

                {message && (
                  <Alert
                    variant={
                      messageType === "error" ? "destructive" : "default"
                    }
                  >
                    <AlertDescription>{message}</AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  disabled={isPaying}
                  className="w-full h-12 bg-primary hover:bg-primary/90 hover:cursor-pointer font-medium"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  {isPaying ? "Processing..." : "Add Money"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
