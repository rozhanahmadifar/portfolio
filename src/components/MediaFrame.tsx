import { ReactNode } from "react";

export default function MediaFrame({ children }: { children: ReactNode }) {
  return (
    <div className="aspect-[6/5] w-full min-w-0 overflow-hidden rounded-[14px]">{children}</div>
  );
}
