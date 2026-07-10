export default function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
            {i + 1}
          </span>
          <span className="text-meta-value">{item}</span>
        </li>
      ))}
    </ol>
  );
}
