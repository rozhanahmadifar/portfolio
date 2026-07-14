export interface MetricRow {
  metric: string;
  original: string;
  final: string;
}

export default function MetricTable({ rows }: { rows: MetricRow[] }) {
  return (
    <div className="border-t border-hairline">
      <div className="hidden items-center justify-end gap-8 pt-3 sm:flex">
        <span className="text-caption not-italic w-[170px] text-center uppercase tracking-wide">
          Original
        </span>
        <span className="text-caption not-italic w-[230px] text-center uppercase tracking-wide">
          Redesign
        </span>
      </div>
      <div className="divide-y divide-hairline">
        {rows.map((row) => (
          <div
            key={row.metric}
            className="flex flex-wrap items-center justify-between gap-4 py-5"
          >
            <p className="text-meta-label">{row.metric}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-8">
              <div className="flex items-center gap-3 sm:contents">
                <span className="text-caption not-italic w-14 uppercase tracking-wide sm:hidden">
                  Original
                </span>
                <span className="inline-flex h-10 w-[170px] items-center justify-center whitespace-nowrap rounded-full bg-[#ececE6] px-4 text-center text-sm font-medium text-ink-soft">
                  {row.original}
                </span>
              </div>
              <div className="flex items-center gap-3 sm:contents">
                <span className="text-caption not-italic w-14 uppercase tracking-wide sm:hidden">
                  Redesign
                </span>
                <span className="inline-flex h-10 w-[230px] items-center justify-center whitespace-nowrap rounded-full bg-teal-pale px-4 text-center text-sm font-medium !text-teal">
                  {row.final}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
