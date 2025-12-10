"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { load } from "@cashfreepayments/cashfree-js";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/auth-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Wallet, Plus, CreditCard, TrendingUp, Shield } from "lucide-react";
import axi from "@/lib/axi";
import { set } from "date-fns";
import CountUp from "react-countup";

export default function WalletPage() {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const { user, loading, updateWalletBalance } = useAuth();
  const [balance, setBalance] = useState(0);
  const router = useRouter();

  let cashfree: {
    checkout: (arg0: {
      paymentSessionId: string;
      redirectTarget: string;
    }) => Promise<any>;
  };
  var initializeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };
  initializeSDK();

  const getPaymentSession = async (amount: number) => {
    // Call your backend API to create a payment session
    try {
      const response = await axi.post("/payments/create-payment", {
        order_amount: amount,
      });
      const data = response.data;
      console.log("Payment session created:", data);
      return data.payment_session_id;
    } catch (error) {
      console.error("Error fetching payment session:", error);
      return null;
    }
  };

  const handlePay = async (amount: number) => {
    const sessionId = await getPaymentSession(amount);
    if (sessionId) {
      doPayment(sessionId);
    }
  };

  const doPayment = async (sessionId: string) => {
    let checkoutOptions = {
      paymentSessionId: sessionId,
      redirectTarget: "_modal",
    };
    cashfree.checkout(checkoutOptions).then((result) => {
      if (result.error) {
        // This will be true whenever user clicks on close icon inside the modal or any error happens during the payment
        console.log(
          "User has closed the popup or there is some payment error, Check for Payment Status"
        );
        console.log(result.error);
      }
      if (result.redirect) {
        // This will be true when the payment redirection page couldnt be opened in the same window
        // This is an exceptional case only when the page is opened inside an inAppBrowser
        // In this case the customer will be redirected to return url once payment is completed
        console.log("Payment will be redirected");
      }
      if (result.paymentDetails) {
        // This will be called whenever the payment is completed irrespective of transaction status
        console.log("Payment has been completed, Check for Payment Status");
        fetchWalletBalance();
        console.log(result.paymentDetails.paymentMessage);
      }
    });
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const fetchWalletBalance = async () => {
    try {
      const response = await axi.get("/wallet/balance");
      const data = response.data;
      if (data) {
        // Update the user context with the new wallet balance
        console.log("balance fetched:", data);
        const newBalance = data.available_balance + data.reserved_balance;
        if (newBalance !== balance) {
          updateWalletBalance(newBalance);
          setBalance(newBalance);
        }
      }
    } catch (error) {
      console.error("Error fetching wallet balance:", error);
    }
  };

  useEffect(() => {
    fetchWalletBalance();
    const interval = setInterval(fetchWalletBalance, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleRecharge = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || Number.parseFloat(amount) <= 0) {
      setMessage("Please enter a valid amount");
      setMessageType("error");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      handlePay(Number.parseFloat(amount));
    } catch (error) {
      setMessage("Network error. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  const quickAmounts = [50, 100, 200, 500, 1000];

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return null;
  }
  const maskedCardNumber = user.email
    ? `**** **** **** ${user.email.slice(-4)}`
    : "**** **** **** 1234";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-screen mx-auto grid lg:grid-cols-2 gap-8">
          {/* Wallet Card */}
          <div className="relative w-full max-w-md mx-auto place-content-center">
            <div className="relative w-full bg-card border border-border rounded-3xl shadow-lg overflow-hidden">
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">
                        Byte Wallet
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Digital Payment
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

                {/* Balance Display */}
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Available Balance
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-card-foreground">
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
              </div>

              {/* Card Info */}
              <div className="px-6 pb-6">
                <div className="bg-muted rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Account
                      </p>
                      <p className="text-sm font-medium text-card-foreground truncate max-w-40">
                        {user.email}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        ID
                      </p>
                      <p className="text-sm font-mono text-card-foreground">
                        {maskedCardNumber}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Instant Payments
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        24/7 Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recharge Card */}
          <Card className="shadow-lg border-0 h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" /> Recharge Wallet
              </CardTitle>
              <CardDescription>Add money to your Byte wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRecharge} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-sm font-medium">
                    Enter Amount (₹)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="1"
                    step="1"
                    required
                    className="h-12 text-lg"
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
                        onClick={() => setAmount(q.toString())}
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
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  disabled={isLoading}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  {isLoading ? "Processing..." : "Add Money"}
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
