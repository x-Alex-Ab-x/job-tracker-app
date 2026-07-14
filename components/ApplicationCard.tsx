type ApplicationCardProps = {
  companyName: string;
  positionTitle: string;
  applicationDate: string;
  status: string;
  rating: number;
};

export default function ApplicationCard({
  companyName,
  positionTitle,
  applicationDate,
  status,
  rating,
}: ApplicationCardProps) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">{positionTitle}</h2>

          <p className="mt-1 text-slate-300">{companyName}</p>
        </div>

        <span className="rounded-full bg-violet-600 px-3 py-1 text-sm font-medium text-white">
          {status}
        </span>
      </div>

      <div className="mt-4 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
        <p>
          <span className="font-medium text-slate-100">Date :</span>{" "}
          {applicationDate}
        </p>

        <p>
          <span className="font-medium text-slate-100">Note :</span> {rating}/5
        </p>
      </div>
    </article>
  );
}
