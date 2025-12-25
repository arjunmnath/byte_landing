"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/contexts/auth-context";
import { User, Wallet, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { user, logout, loading } = useAuth();
  const pathname = usePathname();

  // ---- hide/show on scroll ----
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (path: string) =>
    `transition-colors ${
      pathname === path
        ? "text-foreground"
        : "text-muted-foreground hover:text-primary"
    }`;

  return (
    <div
      className={`
        fixed top-4 left-0 right-0 z-[90]
        transition-transform duration-300 ease-out
        ${hidden ? "-translate-y-24" : "translate-y-0"}
      `}
    >
      <nav
        className="
          mx-auto
          max-w-5xl
          rounded-2xl
          border border-border
          bg-card/70
          backdrop-blur-md
          shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]
        "
      >
        {/* main bar */}
        <div className="flex h-16 items-center justify-between px-6  md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif font-black text-foreground"
          >
            Byte
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
            {user && (
              <Link href="/wallet" className={linkClass("/wallet")}>
                Wallet
              </Link>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {!loading && (
              <>
                {user ? (
                  <div className="hidden md:block">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <User className="h-4 w-4" />
                          <span className="text-sm">{user.name}</span>
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel className="font-normal">
                          <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {user.email}
                            </p>
                          </div>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                          <Link
                            href="/wallet"
                            className="flex items-center gap-2"
                          >
                            <Wallet className="h-4 w-4" />
                            Wallet: ₹{user.walletBalance?.toFixed(0) || "0"}
                          </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                          onClick={logout}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <LogOut className="h-4 w-4" />
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <div className="hidden md:block">
                    <Link href="/login">
                      <Button variant="outline" size="sm">
                        Login
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 mb-4 mx-3 rounded-xl border border-border bg-card/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-2 hover:bg-accent/50"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-2 hover:bg-accent/50"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-2 hover:bg-accent/50"
              >
                Contact
              </Link>

              {!loading && user && (
                <>
                  <Link
                    href="/wallet"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-md px-3 py-2 hover:bg-accent/50"
                  >
                    Wallet (₹{user.walletBalance?.toFixed(0) || "0"})
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left rounded-md px-3 py-2 hover:bg-accent/50"
                  >
                    Logout
                  </button>
                </>
              )}

              {!loading && !user && (
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-accent/50"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
