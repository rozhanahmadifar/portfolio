export default function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-xs leading-none font-semibold tabular-nums text-white">
            {i + 1}
          </span>
          <span className="text-meta-value">{item}</span>
        </li>
      ))}
    </ol>
  );
}
