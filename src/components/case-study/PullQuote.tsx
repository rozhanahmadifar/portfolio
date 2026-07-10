import { ReactNode } from "react";

export default function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-2 border-teal pl-6 text-[1.35rem] italic leading-snug !text-teal-deep">
      {children}
    </blockquote>
  );
}
