import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-serif font-black text-foreground mb-3 sm:mb-4 block">
              Byte
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              Making campus dining seamless, fast, and secure for college students everywhere.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Contact:{" "}
              <a href="mailto:hello@thisisanshrastogi@gmail.com" className="text-primary hover:underline">
                thisisanshrastogi@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/return"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">© 2025 Byte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
