"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || !isHome;
  const isDark = isHome && !solid;

  const navLinkClass = (href: string) =>
    cn(
      "text-sm tracking-wide transition-colors",
      isDark
        ? "text-ivory/90 hover:text-ivory"
        : "rounded-md px-3 py-2 text-graphite/85 hover:bg-sage/60 hover:text-graphite",
      !isDark && pathname === href && "bg-sage text-graphite",
      isDark && pathname === href && "text-ivory",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        solid
          ? "bg-white/92 shadow-header backdrop-blur-md"
          : "bg-gradient-to-b from-charcoal/70 to-transparent",
      )}
    >
      <div className="mx-auto flex max-w-editorial items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link
          href="/"
          className={cn(
            "font-semibold uppercase tracking-[0.12em]",
            isDark ? "text-lg text-ivory" : "text-graphite",
          )}
          onClick={() => setOpen(false)}
        >
          Konark
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="/contact"
            variant={isDark ? "ghost" : "primary"}
            className={cn(
              isDark &&
                "border border-ivory/30 bg-transparent text-ivory shadow-none ring-0 hover:border-ivory/50 hover:bg-ivory/5",
            )}
          >
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center p-2 lg:hidden",
            isDark ? "text-ivory" : "text-graphite",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-graphite/10 bg-ivory lg:hidden"
        >
          <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-stone/60 py-4 text-graphite"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-6 w-full">
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
