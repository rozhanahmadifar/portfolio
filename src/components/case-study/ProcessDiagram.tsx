export interface ProcessPhase {
  name: string;
  items: string[];
}

export default function ProcessDiagram({ phases }: { phases: ProcessPhase[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {phases.map((phase) => (
        <div key={phase.name} className="border-t border-hairline pt-6">
          <h3 className="text-subtitle !text-teal">{phase.name}</h3>
          <ul className="mt-4">
            {phase.items.map((item) => (
              <li key={item} className="text-meta-value">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
