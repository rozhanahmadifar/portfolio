import { ReactNode } from "react";

export default function Callout({
  children,
  onTintedBand = false,
}: {
  children: ReactNode;
  onTintedBand?: boolean;
}) {
  return (
    <div
      className={`rounded-lg py-[1.4rem] px-[1.6rem] ${
        onTintedBand
          ? "border border-hairline bg-bg shadow-[0_2px_10px_rgba(20,32,28,0.08)]"
          : "bg-teal-pale"
      }`}
    >
      <p className="!text-teal-deep">{children}</p>
    </div>
  );
}
