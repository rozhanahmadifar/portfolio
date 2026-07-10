import { ReactNode } from "react";

export default function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg bg-teal-pale py-[1.4rem] px-[1.6rem]">
      <p className="!text-teal-deep">{children}</p>
    </div>
  );
}
