type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles: Record<string, string> = {
    Postulé: "bg-blue-600 text-white",
    "En attente": "bg-yellow-500 text-zinc-950",
    Entrevue: "bg-violet-600 text-white",
    Refusé: "bg-red-600 text-white",
    Accepté: "bg-green-600 text-white",
  };

  const badgeStyle = statusStyles[status] ?? "bg-zinc-700 text-white";

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${badgeStyle}`}
    >
      {status}
    </span>
  );
}
