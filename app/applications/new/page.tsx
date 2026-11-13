"use client";
import { useState } from "react";

export default function NewApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(e.currentTarget);

    const companyName = formData.get("companyName");
    const positionTitle = formData.get("positionTitle");
    const applicationDate = formData.get("applicationDate");
    const status = formData.get("status");

    if (
      typeof companyName !== "string" ||
      typeof positionTitle !== "string" ||
      typeof applicationDate !== "string" ||
      typeof status !== "string" ||
      !companyName.trim() ||
      !positionTitle.trim() ||
      !applicationDate.trim() ||
      !status.trim()
    ) {
      console.error("Veuillez remplir correctement tous les champs.");
      return;
    }

    setFeedback("");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: companyName.trim(),
          positionTitle: positionTitle.trim(),
          applicationDate,
          status,
        }),
      });

      if (!response.ok) {
        setFeedback("Erreur lors de l'enregistrement.");
        return;
      }

      setFeedback("Candidature enregistrée avec succès.");
    } catch (error) {
      console.error("Erreur de communication avec le serveur :", error);
      setFeedback("Impossible de communiquer avec le serveur.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Ajouter une candidature
        </h1>

        <div className="mb-10 max-w-2xl text-slate-300">
          <p>
            Cette page me permet d&apos;ajouter de nouvelles candidatures et de
            suivre leur évolution.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="companyName" className="mt-6 block">
            Nom de l&apos;entreprise
          </label>
          <input
            className="bg-zinc-800 w-full text-white placeholder:text-zinc-500 border border-zinc-600 focus:ring-2 focus:ring-violet-500 focus:outline-none block mt-2 rounded-md px-3 py-2"
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Ex. : Entreprise ABC"
            required
          />

          <label htmlFor="positionTitle" className="mt-6 block">
            Titre du poste
          </label>
          <input
            className="bg-zinc-800 w-full text-white placeholder:text-zinc-500 border border-zinc-600 focus:ring-2 focus:ring-violet-500 focus:outline-none block mt-2 rounded-md px-3 py-2"
            id="positionTitle"
            name="positionTitle"
            type="text"
            placeholder="Ex. : Développeur Python"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="applicationDate" className="mt-6 block">
                Date de candidature
              </label>
              <input
                className="bg-zinc-800 w-full text-white border border-zinc-600 focus:ring-2 focus:ring-violet-500 focus:outline-none block mt-2 rounded-md px-3 py-2"
                id="applicationDate"
                name="applicationDate"
                type="date"
                required
              />
            </div>

            <div>
              <label htmlFor="status" className="mt-6 block">
                Statut
              </label>
              <select
                id="status"
                name="status"
                className="bg-zinc-800 w-full text-white border border-zinc-600 focus:ring-2 focus:ring-violet-500 focus:outline-none block mt-2 rounded-md px-3 py-2"
              >
                <option value="Postulé">Postulé</option>
                <option value="En attente">En attente</option>
                <option value="Entrevue">Entrevue</option>
                <option value="Refusé">Refusé</option>
                <option value="Accepté">Accepté</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-md bg-violet-500 px-4 py-2 text-white hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-zinc-950"
          >
            Ajouter la candidature
          </button>
          {feedback && (
            <p
              role="status"
              aria-live="polite"
              className="mt-4 text-sm text-slate-300"
            >
              {feedback}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
