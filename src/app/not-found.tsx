import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Rozhan Ahmadifar",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-center px-10 py-32 text-center">
      <p className="text-eyebrow mb-3">404</p>
      <h1 className="text-name text-[3.2rem]">This page doesn&apos;t exist</h1>
      <p className="mt-6 max-w-md">
        The link may be old or mistyped. Everything I&apos;ve made is still
        here, though.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-[4px] border border-ink bg-transparent px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
      >
        Back to home
      </Link>
    </section>
  );
}
