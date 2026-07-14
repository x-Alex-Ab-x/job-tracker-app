import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-violet-400">
          Job Tracker App
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Suivre mes candidatures et gérer ma recherche d&apos;emploi en
          informatique
        </h1>

        <div className="mb-8 max-w-2xl text-lg text-slate-300">
          <p>C&apos;est une application pour m&apos;aider à :</p>

          <ul className="mt-4 list-disc space-y-1 pl-6">
            <li>organiser mes candidatures;</li>
            <li>suivre les statuts;</li>
            <li>donner une note aux entreprises;</li>
            <li>mieux gérer mes recherches d&apos;emploi.</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-lg bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700">
            Ajouter une candidature
          </button>

          <Link
            href="/applications"
            className="rounded-lg border border-violet-500 px-5 py-3 font-medium text-violet-100 hover:bg-violet-950"
          >
            Voir mes candidatures
          </Link>
        </div>
      </section>
    </main>
  );
}
