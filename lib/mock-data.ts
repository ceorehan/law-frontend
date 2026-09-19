import { ClientDocument, Service, TaxApplication } from "./types";

// Demo data only — fictional, no real CNIC/phone numbers, per brand guidelines.

export const services: Service[] = [
  {
    slug: "individual-tax-filing",
    name: "Individual Tax Filing",
    shortDescription: "Guided FBR return filing for salaried persons and freelancers.",
    icon: "FileText",
    keyFeatures: ["Guided checklist", "FBR-compliant filing", "Filer status support"],
    requiredDocuments: ["CNIC", "Salary certificate", "Bank statement"],
    process: ["Create account", "Complete checklist", "Consultant review", "Filing complete"],
  },
  {
    slug: "corporate-tax-compliance",
    name: "Corporate Tax & Compliance",
    shortDescription: "End-to-end corporate return filing and regulatory compliance.",
    icon: "Building2",
    keyFeatures: ["SECP & FBR compliance", "Annual filings", "Audit coordination"],
    requiredDocuments: ["Incorporation certificate", "Financial statements", "NTN certificate"],
    process: ["Onboarding", "Document collection", "Consultant review", "Filing & compliance"],
  },
  {
    slug: "legal-advisory",
    name: "Legal Advisory",
    shortDescription: "Business and personal legal advisory and documentation support.",
    icon: "Scale",
    keyFeatures: ["Contract review", "Legal documentation", "Regulatory guidance"],
    requiredDocuments: ["CNIC", "Relevant contracts or notices"],
    process: ["Consultation", "Document review", "Advisory report", "Follow-up support"],
  },
  {
    slug: "bookkeeping-accounting",
    name: "Bookkeeping & Accounting",
    shortDescription: "Ongoing bookkeeping and financial record-keeping for businesses.",
    icon: "BookOpenCheck",
    keyFeatures: ["Monthly bookkeeping", "Financial statements", "Reconciliation"],
    requiredDocuments: ["Bank statements", "Invoices & receipts"],
    process: ["Setup", "Monthly data collection", "Reconciliation", "Reporting"],
  },
  {
    slug: "financial-planning-advisory",
    name: "Financial Planning & Advisory",
    shortDescription: "Strategic financial planning for individuals and businesses.",
    icon: "TrendingUp",
    keyFeatures: ["Cash flow planning", "Investment guidance", "Growth strategy"],
    requiredDocuments: ["Income details", "Existing investment summary"],
    process: ["Discovery", "Analysis", "Advisory plan", "Ongoing review"],
  },
  {
    slug: "ntn-strn-registration",
    name: "NTN / STRN & Registration",
    shortDescription: "Tax registration for individuals, freelancers and businesses.",
    icon: "BadgeCheck",
    keyFeatures: ["NTN registration", "STRN registration", "FBR liaison"],
    requiredDocuments: ["CNIC", "Business details (if applicable)"],
    process: ["Application", "FBR submission", "Verification", "Certificate issued"],
  },
];

export const demoApplication: TaxApplication = {
  id: "app_001",
  applicationNumber: "ZA-2026-00124",
  clientName: "Ahmed Khan",
  cnic: "42101-XXXXXXX-X",
  taxYear: 2026,
  service: "Individual Tax Filing",
  status: "ConsultantReviewing",
  progress: 82,
  assignedConsultant: "Sara Ahmed",
  submittedDate: "2026-08-02",
  lastUpdated: "2026-09-10",
};

export const demoApplications: TaxApplication[] = [
  demoApplication,
  {
    id: "app_002",
    applicationNumber: "ZA-2026-00131",
    clientName: "Mehwish Raza",
    cnic: "35202-XXXXXXX-X",
    taxYear: 2026,
    service: "Corporate Tax & Compliance",
    status: "CorrectionRequired",
    progress: 55,
    assignedConsultant: "Bilal Hussain",
    submittedDate: "2026-08-14",
    lastUpdated: "2026-09-12",
  },
  {
    id: "app_003",
    applicationNumber: "ZA-2026-00119",
    clientName: "Usman Tariq",
    cnic: "61101-XXXXXXX-X",
    taxYear: 2026,
    service: "NTN / STRN & Registration",
    status: "Completed",
    progress: 100,
    assignedConsultant: "Sara Ahmed",
    submittedDate: "2026-07-20",
    lastUpdated: "2026-08-05",
  },
  {
    id: "app_004",
    applicationNumber: "ZA-2026-00142",
    clientName: "Zainab Sheikh",
    cnic: "42301-XXXXXXX-X",
    taxYear: 2026,
    service: "Legal Advisory",
    status: "New",
    progress: 8,
    lastUpdated: "2026-09-14",
  },
];

export const demoDocuments: ClientDocument[] = [
  { id: "doc_1", name: "CNIC_Front.pdf", uploadedDate: "2026-08-01", sizeKb: 820, status: "Approved", reviewedBy: "Sara Ahmed" },
  { id: "doc_2", name: "CNIC_Back.pdf", uploadedDate: "2026-08-01", sizeKb: 790, status: "Approved", reviewedBy: "Sara Ahmed" },
  { id: "doc_3", name: "Salary_Certificate_2026.pdf", uploadedDate: "2026-08-03", sizeKb: 340, status: "UnderReview" },
  { id: "doc_4", name: "Bank_Statement_Jul2026.pdf", uploadedDate: "2026-08-03", sizeKb: 1120, status: "ReplacementRequired", reviewedBy: "Sara Ahmed", comment: "Please upload the latest bank statement covering the full tax year." },
];

export const checklistSteps = [
  { key: "personal", title: "Personal Information" },
  { key: "tax-profile", title: "Tax Profile" },
  { key: "employment", title: "Employment / Salary" },
  { key: "business", title: "Business / Freelance Income" },
  { key: "property", title: "Property" },
  { key: "bank", title: "Bank & Investments" },
  { key: "assets", title: "Assets & Liabilities" },
  { key: "credits", title: "Tax Credits / Deductions" },
  { key: "foreign", title: "Foreign / Overseas Information" },
  { key: "documents", title: "Documents" },
  { key: "review", title: "Review" },
  { key: "declaration", title: "Declaration & Submit" },
];
