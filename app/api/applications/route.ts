import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  let data: unknown;

  try {
    data = await request.json();
  } catch {
    return Response.json(
      { error: "Le format JSON est invalide." },
      { status: 400 },
    );
  }

  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return Response.json({ error: "Données invalides." }, { status: 400 });
  }
  const { companyName, positionTitle, applicationDate, status } =
    data as Record<string, unknown>;

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
    return Response.json(
      { error: "Les champs de la candidature sont invalides." },
      { status: 400 },
    );
  }

  const validStatuses = new Set<string>([
    "Postulé",
    "En attente",
    "Entrevue",
    "Refusé",
    "Accepté",
  ]);

  if (!validStatuses.has(status)) {
    return Response.json(
      { error: "Le statut de la candidature est invalide." },
      { status: 400 },
    );
  }

  const date = new Date(applicationDate);

  const isValidDate =
    /^\d{4}-\d{2}-\d{2}$/.test(applicationDate) &&
    !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === applicationDate;

  if (!isValidDate) {
    return Response.json(
      { error: "La date de candidature est invalide." },
      { status: 400 },
    );
  }

  try {
    const client = await clientPromise;

    const db = client.db("job_tracker");

    const result = await db.collection("applications").insertOne({
      companyName: companyName.trim(),
      positionTitle: positionTitle.trim(),
      applicationDate,
      status,
    });

    return Response.json(
      {
        message: "Candidature enregistrée avec succès.",
        id: result.insertedId.toString(),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erreur MongoDB :", error);

    return Response.json(
      { error: "Impossible d'enregistrer la candidature." },
      { status: 500 },
    );
  }
}
