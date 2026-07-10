export interface MetadataItem {
  label: string;
  value: string;
}

export default function MetadataSidebar({ items }: { items: MetadataItem[] }) {
  return (
    <div className="space-y-5 border-t border-hairline pt-6">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-meta-label">{item.label}</p>
          <p className="text-meta-value mt-1">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
