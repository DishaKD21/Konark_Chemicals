"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.company.trim()) errors.company = "Company name is required.";
  if (!values.email.trim()) {
    errors.email = "Work email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please include a brief message.";
  return errors;
}

/**
 * Form submission integration point.
 * Wire this to your API route, CRM, or form service (e.g. Resend, Formspree).
 * Until configured, successful validation opens a mailto draft to the business email.
 */
function submitInquiry(values: FormState): void {
  const subject = encodeURIComponent(
    `Inquiry from ${values.company} — ${values.interest || "Phosphating"}`,
  );
  const body = encodeURIComponent(
    `Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\nPhone: ${values.phone}\nInterest: ${values.interest}\n\n${values.message}`,
  );
  window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
}

export function ContactSection() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const onChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    submitInquiry(values);
    setStatus("success");
    setValues(initialState);
  };

  const fieldClass = (field: keyof FormState) =>
    cn(
      "mt-2 w-full border bg-ivory px-4 py-3 text-sm text-graphite placeholder:text-soft-grey/60 focus:border-copper focus:outline-none",
      errors[field] ? "border-red-800/60" : "border-graphite/20",
    );

  return (
    <section id="contact" className="border-t border-stone/80 bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Contact"
              title="Request a quote or technical discussion."
              description="Share your application context. We respond to industrial inquiries through the contact channel below."
            />
            <div className="mt-10 space-y-4 text-sm text-soft-grey">
              <p>
                <span className="text-graphite">Email</span>
                <br />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-copper hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="text-graphite">Phone</span>
                <br />
                {siteConfig.contact.phone}
              </p>
              <p>
                <span className="text-graphite">Address</span>
                <br />
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            {status === "success" && (
              <div
                className="mb-8 border border-olive/40 bg-stone/40 px-5 py-4 text-sm text-graphite"
                role="status"
              >
                Thank you. Your email client should open with a draft message.
                If it does not, write to{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-copper underline"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </div>
            )}

            <form
              onSubmit={onSubmit}
              className="grid gap-6 sm:grid-cols-2"
              noValidate
            >
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-wider text-graphite/80">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={fieldClass("name")}
                  value={values.name}
                  onChange={onChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-900">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="text-xs uppercase tracking-wider text-graphite/80">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className={fieldClass("company")}
                  value={values.company}
                  onChange={onChange("company")}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
                {errors.company && (
                  <p id="company-error" className="mt-1 text-xs text-red-900">
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-graphite/80">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass("email")}
                  value={values.email}
                  onChange={onChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-900">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="text-xs uppercase tracking-wider text-graphite/80">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass("phone")}
                  value={values.phone}
                  onChange={onChange("phone")}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="interest" className="text-xs uppercase tracking-wider text-graphite/80">
                  Product or application of interest
                </label>
                <input
                  id="interest"
                  name="interest"
                  type="text"
                  className={fieldClass("interest")}
                  value={values.interest}
                  onChange={onChange("interest")}
                  placeholder="e.g. fabricated steel parts, line integration"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-graphite/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={fieldClass("message")}
                  value={values.message}
                  onChange={onChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-900">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Preparing…" : "Send inquiry"}
                </Button>
                <p className="mt-4 text-xs leading-relaxed text-soft-grey">
                  Submissions open your email client with a pre-filled message.
                  Connect a server-side handler in{" "}
                  <code className="text-graphite">ContactSection.tsx</code> when
                  ready.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
