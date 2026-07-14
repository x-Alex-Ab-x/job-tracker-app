import ApplicationCard from "@/components/ApplicationCard";

const applications = [
  {
    id: 1,
    companyName: "Mirego",
    positionTitle: "Développeuse mobile junior",
    applicationDate: "2026-07-01",
    status: "Refusé",
    rating: 3,
  },
  {
    id: 2,
    companyName: "Revenu Québec",
    positionTitle: "Programmeuse-analyste",
    applicationDate: "2026-07-05",
    status: "En attente",
    rating: 4,
  },
  {
    id: 3,
    companyName: "Techladder Inc.",
    positionTitle: "Programmeuse Java junior",
    applicationDate: "2026-07-08",
    status: "Postulé",
    rating: 3,
  },
];

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-violet-400">
          Mes candidatures
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Suivi des candidatures
        </h1>

        <div className="mb-10 max-w-2xl space-y-3 text-slate-300">
          <p>Cette page affiche une première liste de candidatures avec :</p>

          <ul className="list-disc space-y-1 pl-6">
            <li>leur entreprise;</li>
            <li>leur poste;</li>
            <li>leur date d&apos;application;</li>
            <li>leur statut;</li>
            <li>une note d&apos;intérêt.</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {applications.map((application) => (
            <ApplicationCard
              key={application.id}
              companyName={application.companyName}
              positionTitle={application.positionTitle}
              applicationDate={application.applicationDate}
              status={application.status}
              rating={application.rating}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
