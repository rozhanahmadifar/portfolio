export interface MetricRow {
  metric: string;
  original: string;
  final: string;
}

export default function MetricTable({ rows }: { rows: MetricRow[] }) {
  return (
    <div className="border-t border-hairline">
      <div className="flex items-center justify-end gap-3 pt-3">
        <span className="text-caption not-italic w-[110px] text-center uppercase tracking-wide">
          Original
        </span>
        <span className="text-caption not-italic w-[180px] text-center uppercase tracking-wide">
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
            <div className="flex flex-wrap gap-3">
              <span className="flex h-10 w-[110px] items-center justify-center rounded-full bg-[#ececE6] px-3 text-center text-sm leading-tight font-medium text-ink-soft">
                {row.original}
              </span>
              <span className="flex h-10 w-[180px] items-center justify-center rounded-full bg-teal-pale px-3 text-center text-sm leading-tight font-medium !text-teal">
                {row.final}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
