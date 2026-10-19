"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
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

  const linkClass = (dark: boolean) =>
    cn(
      "text-sm tracking-wide transition-colors",
      dark
        ? "text-ivory/90 hover:text-ivory"
        : "text-graphite/80 hover:text-copper",
    );

  const isDark = !solid && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid || open
          ? "border-b border-graphite/10 bg-ivory/95 backdrop-blur-md"
          : "bg-gradient-to-b from-charcoal/70 to-transparent",
      )}
    >
      <div className="mx-auto flex max-w-editorial items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link
          href="#home"
          className={cn(
            "font-display text-lg font-semibold uppercase tracking-[0.12em]",
            isDark ? "text-ivory" : "text-graphite",
          )}
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(isDark)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="#contact"
            variant={isDark ? "primary" : "primary"}
            className={cn(isDark && "border-ivory/30 bg-transparent text-ivory hover:bg-copper hover:border-copper")}
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

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-graphite/10 bg-ivory lg:hidden",
          open ? "block" : "hidden",
        )}
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
          <Button href="#contact" className="mt-6 w-full">
            Request a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}
