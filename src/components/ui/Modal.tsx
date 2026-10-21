"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  panelClassName?: string;
  zIndex?: number;
  size?: "md" | "lg" | "full";
};

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
  panelClassName,
  zIndex = 90,
  size = "md",
}: ModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const sizeClass =
    size === "full"
      ? "h-[min(90vh,900px)] w-[min(95vw,1200px)]"
      : size === "lg"
        ? "max-h-[min(92vh,880px)] w-full max-w-4xl"
        : "max-h-[min(90vh,720px)] w-full max-w-2xl";

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center p-4 sm:p-6",
        className,
      )}
      style={{ zIndex }}
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/55 backdrop-blur-[2px] transition-opacity"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative flex flex-col overflow-hidden rounded-lg bg-ivory shadow-card-elevated transition-all duration-200",
          sizeClass,
          panelClassName,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-graphite/10 px-5 py-4 sm:px-6">
          <h2 id={titleId} className="pr-8 text-lg font-semibold text-graphite">
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-md p-2 text-graphite hover:bg-sage/60 hover:text-copper"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
