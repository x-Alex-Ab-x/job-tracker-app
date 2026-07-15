export type ApplicationStatus =
  | "Postulé"
  | "En attente"
  | "Entrevue"
  | "Refusé"
  | "Accepté";

export type Application = {
  id: number;
  companyName: string;
  positionTitle: string;
  applicationDate: string;
  status: ApplicationStatus;
};
