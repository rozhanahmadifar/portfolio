const EMAIL = "ahmadifarrozhan@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/rozhan-ahmadifar-676642249";

export default function ContactLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex items-center gap-2 rounded-[4px] border border-ink bg-transparent px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
      >
        {EMAIL}
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-[4px] border border-ink bg-transparent px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
      >
        LinkedIn <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
