"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/data/site";
import { getAllProducts } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type InquiryKind = "general" | "product" | "jobwork";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  productSlug: string;
  componentType: string;
  material: string;
  quantity: string;
  treatment: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emptyState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  productSlug: "",
  componentType: "",
  material: "",
  quantity: "",
  treatment: "",
  message: "",
};

function validate(values: FormState, kind: InquiryKind): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.company.trim()) errors.company = "Company name is required.";
  if (!values.email.trim()) {
    errors.email = "Work email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (kind === "jobwork" && !values.message.trim() && !values.componentType.trim()) {
    errors.message = "Describe your components or requirements.";
  } else if (kind !== "jobwork" && !values.message.trim()) {
    errors.message = "Please include a brief message.";
  }
  return errors;
}

function buildMailto(values: FormState, kind: InquiryKind, productLabel: string): void {
  const subjectParts = [values.company, kind === "jobwork" ? "Jobwork" : "Inquiry"];
  if (productLabel) subjectParts.push(productLabel);
  const subject = encodeURIComponent(subjectParts.join(" — "));
  const lines = [
    `Name: ${values.name}`,
    `Company: ${values.company}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Inquiry type: ${kind}`,
  ];
  if (productLabel) lines.push(`Product: ${productLabel}`);
  if (kind === "jobwork") {
    lines.push(
      `Component type: ${values.componentType}`,
      `Material: ${values.material}`,
      `Approx. quantity: ${values.quantity}`,
      `Treatment / finish: ${values.treatment}`,
    );
  }
  lines.push("", values.message);
  const body = encodeURIComponent(lines.join("\n"));
  window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
}

type InquiryFormProps = {
  kind?: InquiryKind;
  defaultProductSlug?: string;
  className?: string;
};

export function InquiryForm({
  kind = "general",
  defaultProductSlug = "",
  className,
}: InquiryFormProps) {
  const products = useMemo(() => getAllProducts(), []);
  const [values, setValues] = useState<FormState>({
    ...emptyState,
    productSlug: defaultProductSlug,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const productLabel =
    products.find((p) => p.slug === values.productSlug)?.productName ?? "";

  const onChange =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
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
    const nextErrors = validate(values, kind);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus("submitting");
    buildMailto(values, kind, productLabel);
    setStatus("success");
    setValues({ ...emptyState, productSlug: defaultProductSlug });
  };

  const fieldClass = (field: keyof FormState) =>
    cn("input-field", errors[field] && "input-field-error");

  const labelClass =
    "text-body-sm font-medium text-graphite";

  const showProductSelect = kind === "product" || kind === "general";

  return (
    <div className={className}>
      {status === "success" && (
        <div
          className="mb-8 rounded-xl bg-sage/80 px-5 py-4 text-body-sm text-graphite"
          role="status"
        >
          Your email client should open with a draft message. If it does not,
          contact{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-copper underline"
          >
            {siteConfig.contact.email}
          </a>
          . No message is sent automatically until you connect a form backend.
        </div>
      )}

      <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2" noValidate>
        <div>
          <label htmlFor="inq-name" className={labelClass}>
            Name
          </label>
          <input
            id="inq-name"
            className={fieldClass("name")}
            value={values.name}
            onChange={onChange("name")}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-900">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="inq-company" className={labelClass}>
            Company
          </label>
          <input
            id="inq-company"
            className={fieldClass("company")}
            value={values.company}
            onChange={onChange("company")}
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-900">{errors.company}</p>
          )}
        </div>
        <div>
          <label htmlFor="inq-email" className={labelClass}>
            Work email
          </label>
          <input
            id="inq-email"
            type="email"
            className={fieldClass("email")}
            value={values.email}
            onChange={onChange("email")}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-900">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="inq-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="inq-phone"
            type="tel"
            className={fieldClass("phone")}
            value={values.phone}
            onChange={onChange("phone")}
            autoComplete="tel"
          />
        </div>

        {showProductSelect && (
          <div className="sm:col-span-2">
            <label htmlFor="inq-product" className={labelClass}>
              Product (optional)
            </label>
            <select
              id="inq-product"
              className={fieldClass("productSlug")}
              value={values.productSlug}
              onChange={onChange("productSlug")}
            >
              <option value="">General inquiry</option>
              {products.map((p) => (
                <option key={p.id} value={p.slug}>
                  {p.productName}
                </option>
              ))}
            </select>
          </div>
        )}

        {kind === "jobwork" && (
          <>
            <div>
              <label htmlFor="inq-component" className={labelClass}>
                Component type
              </label>
              <input
                id="inq-component"
                className={fieldClass("componentType")}
                value={values.componentType}
                onChange={onChange("componentType")}
              />
            </div>
            <div>
              <label htmlFor="inq-material" className={labelClass}>
                Material
              </label>
              <input
                id="inq-material"
                className={fieldClass("material")}
                value={values.material}
                onChange={onChange("material")}
              />
            </div>
            <div>
              <label htmlFor="inq-qty" className={labelClass}>
                Approximate quantity
              </label>
              <input
                id="inq-qty"
                className={fieldClass("quantity")}
                value={values.quantity}
                onChange={onChange("quantity")}
              />
            </div>
            <div>
              <label htmlFor="inq-treatment" className={labelClass}>
                Required treatment or finish
              </label>
              <input
                id="inq-treatment"
                className={fieldClass("treatment")}
                value={values.treatment}
                onChange={onChange("treatment")}
              />
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <label htmlFor="inq-message" className={labelClass}>
            {kind === "jobwork" ? "Additional requirements" : "Message"}
          </label>
          <textarea
            id="inq-message"
            rows={5}
            className={fieldClass("message")}
            value={values.message}
            onChange={onChange("message")}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-900">{errors.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Preparing…" : "Send inquiry"}
          </Button>
          <p className="mt-4 text-xs leading-relaxed text-soft-grey">
            Submissions open your email client with a pre-filled message. Wire a
            server handler or form service when ready.
          </p>
        </div>
      </form>
    </div>
  );
}
