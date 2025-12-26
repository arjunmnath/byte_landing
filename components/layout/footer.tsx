import Link from "next/link";

export function Footer() {
  // --- CLAY/BRAND TOKENS (Light Mode) ---
  const footerBg = "bg-[#5C4D45] border-[#6B5A50] dark:bg-card dark:border-border";
  const textBase = "text-[#D6C6BA] dark:text-muted-foreground";
  const textHead = "text-white dark:text-foreground";
  const hoverLink = "hover:text-white transition-colors dark:hover:text-primary";

  return (
    <footer className={`${footerBg} border-t py-12 sm:py-16 font-sans`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className={`text-3xl font-black tracking-tight mb-4 sm:mb-6 block flex items-center gap-2 ${textHead}`}
            >
              {/* Optional: Small Clay Logo Circle if you want to add it back later */}
              {/* <div className="w-8 h-8 rounded-full bg-[#FF9E75] text-white flex items-center justify-center text-sm">b</div> */}
              Byte
            </Link>

            <p className={`text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-sm font-bold ${textBase}`}>
              Making campus dining seamless, fast, and secure for college students everywhere.
            </p>

            <div className={`text-xs sm:text-sm font-bold ${textBase}`}>
              Contact:{" "}
              <a
                href="mailto:hello@thisisanshrastogi@gmail.com"
                className={`text-[#FF9E75] hover:text-white dark:text-primary dark:hover:underline transition-colors`}
              >
                thisisanshrastogi@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-black uppercase tracking-wide text-xs sm:text-sm mb-4 sm:mb-6 ${textHead}`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Contact", "Privacy Policy", "Refund Policy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" policy", "").replace(" ", "-")}`}
                    className={`text-sm font-bold ${textBase} ${hoverLink}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li key="join_beta_testing">
                <Link
                  href="/invite"
                  className={`text-sm font-bold ${textBase} ${hoverLink}`}
                >
                  Become a Beta Tester
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`font-black uppercase tracking-wide text-xs sm:text-sm mb-4 sm:mb-6 ${textHead}`}>
              Legal
            </h4>
            <ul className="space-y-3">
              {["Return Policy", "Disclaimer"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" policy", "")}`}
                    className={`text-sm font-bold ${textBase} ${hoverLink}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t border-[#6B5A50] dark:border-border mt-12 sm:mt-16 pt-8 text-center`}>
          <p className={`text-xs sm:text-sm font-bold opacity-60 ${textBase}`}>
            © {new Date().getFullYear()} Byte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}