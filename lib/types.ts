export type ApplicationStatus =
  | "New"
  | "InProgress"
  | "Submitted"
  | "DocumentsUnderReview"
  | "ConsultantReviewing"
  | "CorrectionRequired"
  | "ReadyForFiling"
  | "Filed"
  | "Completed";

export type DocumentStatus =
  | "Uploaded"
  | "UnderReview"
  | "Approved"
  | "Rejected"
  | "ReplacementRequired";

export interface TaxApplication {
  id: string;
  applicationNumber: string;
  clientName: string;
  cnic: string;
  taxYear: number;
  service: string;
  status: ApplicationStatus;
  progress: number;
  assignedConsultant?: string;
  submittedDate?: string;
  lastUpdated: string;
}

export interface ChecklistStepSummary {
  key: string;
  title: string;
  completed: boolean;
  current?: boolean;
}

export interface ClientDocument {
  id: string;
  name: string;
  uploadedDate: string;
  sizeKb: number;
  status: DocumentStatus;
  reviewedBy?: string;
  comment?: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  keyFeatures: string[];
  requiredDocuments: string[];
  process: string[];
}
