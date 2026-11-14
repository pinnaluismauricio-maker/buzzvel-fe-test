import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "outline" | "secondary";
  size?: "md" | "lg" | "cta";
};

const variants = {
  primary: "bg-primary text-white hover:brightness-95",
  outline: "border border-border bg-white text-foreground hover:bg-cream",
  secondary: "bg-secondary text-foreground hover:brightness-95",
};

const sizes = {
  md: "px-5 py-2.5",
  lg: "h-[52px] px-7 sm:h-[54px]",
  cta: "h-[52px] px-7",
};



export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-lg text-sm font-bold leading-6 transition ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}