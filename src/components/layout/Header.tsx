"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

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
      "shrink-0 whitespace-nowrap text-[0.8125rem] tracking-normal transition-colors lg:text-sm",
      isDark
        ? "rounded-md px-2 py-1.5 text-ivory/90 hover:bg-white/10 hover:text-ivory"
        : "rounded-md px-2 py-1.5 text-graphite/85 hover:bg-sage/60 hover:text-graphite",
      !isDark && pathname === href && "bg-sage text-graphite",
      isDark && pathname === href && "bg-white/10 text-ivory",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 py-2 pb-2.5 transition-[background-color,box-shadow] duration-300 sm:py-2.5 sm:pb-3 pt-[max(0.5rem,env(safe-area-inset-top))]",
        solid
          ? "bg-white/92 shadow-header backdrop-blur-md"
          : "bg-gradient-to-b from-charcoal/70 to-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-editorial items-center justify-between gap-2 px-4 sm:gap-3 lg:h-16 lg:gap-4 lg:px-8 xl:px-10">
        <Link
          href="/"
          className="relative z-10 flex h-full w-36 shrink-0 items-center sm:w-40 lg:w-44"
          onClick={() => setOpen(false)}
        >
          {!logoFailed ? (
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="absolute left-0 top-1/2 h-[10rem] w-auto max-w-[min(68vw,20rem)] -translate-y-1/2 object-contain object-left"
              onError={() => setLogoFailed(true)}
              priority
            />
          ) : (
            <span
              className={cn(
                "font-semibold uppercase tracking-[0.12em]",
                isDark ? "text-lg text-ivory" : "text-graphite",
              )}
            >
              Konark
            </span>
          )}
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 lg:flex xl:gap-3"
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

        <div className="hidden shrink-0 lg:block">
          <Button
            href="/contact"
            variant={isDark ? "ghost" : "primary"}
            className={cn(
              "whitespace-nowrap px-4 py-2.5 text-xs lg:text-body-sm",
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
