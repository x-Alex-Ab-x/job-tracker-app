export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-violet-400">
          Job Tracker App
        </p>

        <h1 className="mb-6 text-1xl font-bold tracking-tight md:text-5xl">
          Suivre mes candidatures et gérer ma recherche d'emploi en informatique
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-slate-300">
          C'est une application pour m'aider à:
          <ul className="list-disc space-y-1 pl-6">
            <li>organiser mes candidatures</li>
            <li>suivre les statuts</li>
            <li>donner une note aux entreprises</li>
            <li>mieux gérer mes recherches d'emploi</li>
          </ul>
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-lg bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700">
            Ajouter une candidature
          </button>

          <button className="rounded-lg border border-violet-500 px-5 py-3 font-medium text-violet-100 hover:bg-violet-950">
            Voir mes candidatures
          </button>
        </div>
      </section>
    </main>
  );
}
