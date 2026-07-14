import StatusBadge from "./StatusBadge";

type ApplicationCardProps = {
  companyName: string;
  positionTitle: string;
  applicationDate: string;
  status: string;
};

export default function ApplicationCard({
  companyName,
  positionTitle,
  applicationDate,
  status,
}: ApplicationCardProps) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">{positionTitle}</h2>

          <p className="mt-1 text-slate-300">{companyName}</p>
        </div>

        <StatusBadge status={status} />
      </div>

      <div className="mt-4 text-sm text-slate-300">
        <p>
          <span className="font-medium text-slate-100">Date :</span>{" "}
          {applicationDate}
        </p>
      </div>
    </article>
  );
}
