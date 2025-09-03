"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
import { useAuth } from "@/contexts/auth-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

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
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-0 bg-card">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold text-primary">
                Welcome to Byte
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Sign in with Google to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 flex items-center justify-center gap-3 text-base font-medium"
                onClick={() => signIn("google")}
              >
                {/* Google Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8c0-17.8-1.6-35.1-4.6-51.8H249v98h135.7c-5.9 32.1-23.8 59.2-50.8 77.3l82.1 63.8C455.1 409 488 340.1 488 261.8zM249 492c67.5 0 124.1-22.4 165.4-60.7l-82.1-63.8c-22.8 15.3-51.9 24.4-83.3 24.4-63.8 0-117.8-43.1-137.2-101.1H26.1v63.6C67.2 437.6 152.3 492 249 492zM111.8 290.8c-9.5-28.3-9.5-59.4 0-87.7V139.5H26.1C9.4 176.4 0 217.8 0 261.8s9.4 85.4 26.1 122.3l85.7-65.9zm137.2-229.6c34.4 0 65.2 11.8 89.6 34.9l67.2-67.2C373.1 9.7 316.5-12 249-12 152.3-12 67.2 42.4 26.1 138.2l85.7 65.9c19.5-58 73.5-101.1 137.2-101.1z"
                  />
                </svg>
                Continue with Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
