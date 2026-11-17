"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

type Values = { name: string; email: string; question: string };
type FieldId = keyof Values;
type Errors = Partial<Record<FieldId, string>>;
type Status = "idle" | "submitting" | "success";

type FieldConfig = {
  id: FieldId;
  label: string;
  placeholder: string;
  autoComplete: string;
  type?: string;
  multiline?: boolean;
};

const fields: FieldConfig[] = [
  {
    id: "name",
    label: "Full name",
    placeholder: "Your name",
    autoComplete: "name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "youremail@example.com",
    autoComplete: "email",
    type: "email",
  },
  {
    id: "question",
    label: "Your question",
    placeholder: "Tell us how we can help...",
    autoComplete: "off",
    multiline: true,
  },
];

const emptyValues: Values = { name: "", email: "", question: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.question.trim().length < 10) {
    errors.question = "Please tell us a bit more (at least 10 characters).";
  }

  return errors;
}

const controlClass =
  "w-full rounded-lg border bg-cream px-4 text-sm leading-6 text-foreground placeholder:text-muted focus:border-primary";

export default function ContactForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  // Move o foco para a confirmação depois do envio
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const id = event.target.name as FieldId;
    const next = { ...values, [id]: event.target.value };
    setValues(next);

    // Depois que o erro aparece, ele some assim que o campo fica válido
    if (errors[id]) {
      setErrors((current) => ({ ...current, [id]: validate(next)[id] }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = fields.find((field) => nextErrors[field.id]);
    if (firstInvalid) {
      const element = formRef.current?.elements.namedItem(firstInvalid.id);
      (element as HTMLElement | null)?.focus();
      return;
    }

    setStatus("submitting");
    // Envio simulado: não há backend neste projeto
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  function reset() {
    setValues(emptyValues);
    setErrors({});
    setStatus("idle");
  }

  const firstName = values.name.trim().split(" ")[0];

  return (
    <div className="rounded-[20px] border border-border bg-white px-5 py-6 shadow-[0_24px_60px_rgba(23,27,44,0.08)] md:p-10">
      {status === "success" ? (
        <div>
          <h3
            ref={successRef}
            tabIndex={-1}
            className="font-display text-xl font-bold leading-8 text-foreground focus:outline-none"
          >
            Thanks, {firstName}!
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            Your message is on its way. We usually reply within 24 hours on
            business days.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex h-[52px] items-center justify-center rounded-lg border border-border bg-white px-7 text-sm font-bold leading-6 text-foreground transition hover:bg-cream"
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <h3 className="font-display text-xl font-bold leading-8 text-foreground">
            Contact us
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            Fill out the fields and we will get in touch.
          </p>

          <form
            ref={formRef}
            noValidate
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-5"
          >
            {fields.map((field) => {
              const error = errors[field.id];
              const inputId = `contact-${field.id}`;
              const errorId = `${inputId}-error`;
              const sharedProps = {
                id: inputId,
                name: field.id,
                value: values[field.id],
                onChange: handleChange,
                placeholder: field.placeholder,
                autoComplete: field.autoComplete,
                "aria-invalid": error ? true : undefined,
                "aria-describedby": error ? errorId : undefined,
              };
              const borderClass = error ? "border-danger" : "border-border";

              return (
                <div key={field.id} className="flex flex-col gap-2">
                  <label
                    htmlFor={inputId}
                    className="text-sm font-bold leading-6 text-foreground"
                  >
                    {field.label}
                  </label>

                  {field.multiline ? (
                    <textarea
                      {...sharedProps}
                      rows={4}
                      className={`${controlClass} ${borderClass} h-[100px] resize-none py-4 md:h-[120px]`}
                    />
                  ) : (
                    <input
                      {...sharedProps}
                      type={field.type}
                      className={`${controlClass} ${borderClass} h-12`}
                    />
                  )}

                  {error && (
                    <p id={errorId} className="text-sm leading-5 text-danger">
                      {error}
                    </p>
                  )}
                </div>
              );
            })}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1 inline-flex h-[52px] w-full items-center justify-center rounded-lg bg-primary px-7 text-sm font-bold leading-6 text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}