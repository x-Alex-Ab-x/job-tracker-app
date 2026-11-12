import ApplicationCard from "@/components/ApplicationCard";
import { applications } from "@/data/applications";

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
          <p className="mb-10 max-w-2xl text-xl text-slate-300">
            Cette page me permet de consulter mes candidatures et de suivre leur
            évolution depuis leur envoi.
          </p>
        </div>

        <div className="grid gap-4">
          {applications.map((application) => (
            <ApplicationCard
              key={application.id}
              companyName={application.companyName}
              positionTitle={application.positionTitle}
              applicationDate={application.applicationDate}
              status={application.status}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
