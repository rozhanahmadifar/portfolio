export interface PersonaSection {
  label: string;
  items: string[];
}

export default function PersonaCard({
  name,
  tagline,
  background,
  sections,
}: {
  name: string;
  tagline: string;
  background: string[];
  sections: PersonaSection[];
}) {
  return (
    <div className="bg-bg rounded-[14px] border border-hairline p-8 shadow-[0_8px_28px_rgba(20,32,28,0.12)]">
      <div>
        <h3 className="text-sub-header">{name}</h3>
        <p className="text-subtitle mt-1">{tagline}</p>
        <ul className="mt-3">
          {background.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 grid gap-x-8 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-2">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="text-meta-label">{section.label}</p>
            <ul className="mt-2">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
