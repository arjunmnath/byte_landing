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
import { User, Wallet, LogOut, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { user, logout, loading } = useAuth();
  const pathname = usePathname();

  // --- CLAY TOKENS ---
  // Glassmorphic Clay Container
  const navGlass = "bg-[#FFFBF7]/90 backdrop-blur-md border border-[#F5EFE8] shadow-[8px_8px_16px_rgba(214,198,186,0.25),_-4px_-4px_12px_rgba(255,255,255,0.8)] dark:bg-card/80 dark:border-border dark:shadow-none";

  const textBrand = "text-[#5C4D45] dark:text-foreground font-black tracking-tight";
  const textLink = "text-[#9C8C84] hover:text-[#FF9E75] font-bold transition-colors dark:text-muted-foreground dark:hover:text-primary";
  const textActive = "text-[#5C4D45] dark:text-foreground font-black";

  const clayBtn = "bg-[#FF9E75] text-white shadow-[4px_4px_8px_rgba(255,158,117,0.4),_-2px_-2px_4px_rgba(255,255,255,0.4)] hover:bg-[#FF9E75]/90 hover:shadow-lg active:translate-y-[1px] active:shadow-none transition-all dark:bg-primary dark:text-primary-foreground dark:shadow-none";
  const clayDropdown = "bg-white border-none shadow-[8px_8px_16px_rgba(214,198,186,0.5),_-4px_-4px_12px_rgba(255,255,255,0.8)] rounded-[1.5rem] p-2 dark:bg-popover dark:border dark:border-border dark:shadow-none dark:rounded-md";

  // ---- hide/show on scroll ----
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); // scrolling down
        setIsMenuOpen(false); // close menu on scroll
      } else {
        setHidden(false); // scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-4 left-0 right-0 z-[90] px-4
        transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
        ${hidden ? "-translate-y-32" : "translate-y-0"}
      `}
    >
      <nav
        className={`
          mx-auto max-w-5xl rounded-[2rem]
          ${navGlass}
          transition-all duration-300
        `}
      >
        {/* Main Bar */}
        <div className="flex h-16 items-center justify-between px-6 md:px-8">

          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-sans ${textBrand} flex items-center gap-2`}
          >
            <span className="w-2 h-2 rounded-full bg-[#FF9E75] mb-1"></span>
            Byte
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["/", "/about", "/contact"].map((path) => (
              <Link
                key={path}
                href={path}
                className={`text-sm ${pathname === path ? textActive : textLink}`}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
            {user && (
              <Link
                href="/wallet"
                className={`text-sm ${pathname === "/wallet" ? textActive : textLink}`}
              >
                Wallet
              </Link>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
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
                          className="flex items-center gap-2 rounded-full hover:bg-[#F5EFE8] dark:hover:bg-accent text-[#5C4D45] dark:text-foreground font-bold px-3"
                        >
                          <div className="w-6 h-6 bg-[#FFF0E6] rounded-full flex items-center justify-center text-[#FF9E75] dark:bg-muted dark:text-foreground">
                            <User className="h-3.5 w-3.5" />
                          </div>
                          {/* Fallback for empty name */}
                          <span className="text-sm truncate max-w-[100px]">
                            {user.name || "User"}
                          </span>
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end" className={`w-64 ${clayDropdown}`}>
                        <DropdownMenuLabel className="font-normal px-4 pt-4">
                          <div className="flex flex-col space-y-1">
                            {/* Fallback for empty name */}
                            <p className={`text-sm ${textBrand} truncate`}>
                              {user.name || "User"}
                            </p>
                            {/* Fallback for empty email */}
                            <p className="text-xs text-[#9C8C84] font-bold truncate">
                              {user.email || "No email linked"}
                            </p>
                          </div>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator className="bg-[#F5EFE8] dark:bg-border my-2" />

                        <DropdownMenuItem asChild className="rounded-[1rem] focus:bg-[#FFF0E6] focus:text-[#FF9E75] cursor-pointer p-3 font-bold text-[#5C4D45] dark:text-foreground dark:focus:bg-accent">
                          <Link href="/wallet" className="flex items-center gap-2">
                            <Wallet className="h-4 w-4" />
                            <span>Wallet: ₹{user.walletBalance?.toFixed(0) || "0"}</span>
                          </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator className="bg-[#F5EFE8] dark:bg-border my-2" />

                        <DropdownMenuItem
                          onClick={logout}
                          className="rounded-[1rem] focus:bg-[#FFF0E0] text-[#FF6B6B] focus:text-[#FF6B6B] cursor-pointer p-3 font-bold flex items-center gap-2 dark:focus:bg-destructive/10"
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
                      <Button className={`rounded-[1rem] font-bold px-5 ${clayBtn}`} size="sm">
                        Login
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#5C4D45] dark:text-foreground hover:bg-[#F5EFE8] dark:hover:bg-accent rounded-xl"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden px-2 pb-2">
            <div className="rounded-[1.5rem] bg-[#FFFBF7] dark:bg-card border border-[#F5EFE8] dark:border-border shadow-inner p-2 space-y-1">
              {["Home", "About", "Contact"].map((label) => {
                const path = label === "Home" ? "/" : `/${label.toLowerCase()}`;
                return (
                  <Link
                    key={label}
                    href={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-[1rem] px-4 py-3 font-bold transition-colors ${pathname === path ? "bg-[#FFF0E6] text-[#FF9E75]" : "text-[#5C4D45] hover:bg-[#F5EFE8] dark:text-foreground dark:hover:bg-accent"}`}
                  >
                    {label}
                  </Link>
                );
              })}

              {!loading && user && (
                <>
                  <div className="h-px bg-[#F5EFE8] dark:bg-border mx-4 my-2"></div>
                  <Link
                    href="/wallet"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-[1rem] px-4 py-3 font-bold transition-colors ${pathname === "/wallet" ? "bg-[#FFF0E6] text-[#FF9E75]" : "text-[#5C4D45] hover:bg-[#F5EFE8] dark:text-foreground dark:hover:bg-accent"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>Wallet</span>
                      <span className="text-xs bg-[#EAF8E6] text-[#4CAF50] px-2 py-1 rounded-md dark:bg-muted dark:text-muted-foreground">₹{user.walletBalance?.toFixed(0) || "0"}</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left rounded-[1rem] px-4 py-3 text-[#FF6B6B] font-bold hover:bg-[#FFF0E0] transition-colors dark:hover:bg-destructive/10"
                  >
                    Logout
                  </button>
                </>
              )}

              {!loading && !user && (
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-[1rem] px-4 py-3 text-center font-bold mt-2 ${clayBtn}`}
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