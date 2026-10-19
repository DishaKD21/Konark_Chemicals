"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CompareSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  className?: string;
};

export function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  className,
}: CompareSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const clamp = (value: number) => Math.min(100, Math.max(0, value));

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(pct));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => clamp(p - 2));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => clamp(p + 2));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full overflow-hidden border border-graphite/10 bg-charcoal"
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            src={beforeSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>

        <div
          className="absolute inset-y-0 z-10 w-px bg-ivory/80 shadow-[0_0_12px_rgba(0,0,0,0.4)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        <button
          type="button"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-label="Compare pretreated metal and black phosphated finish"
          className="absolute top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-copper bg-charcoal text-ivory transition-colors hover:bg-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          style={{ left: `${position}%` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onKeyDown={onKeyDown}
        >
          <span className="text-xs tracking-widest" aria-hidden="true">
            ‖
          </span>
        </button>

        <span
          className="absolute bottom-4 left-4 z-20 border border-ivory/20 bg-charcoal/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ivory backdrop-blur-sm"
        >
          {beforeLabel}
        </span>
        <span
          className="absolute bottom-4 right-4 z-20 border border-ivory/20 bg-charcoal/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ivory backdrop-blur-sm"
        >
          {afterLabel}
        </span>
      </div>
      <p className="sr-only">{beforeAlt}</p>
    </div>
  );
}
