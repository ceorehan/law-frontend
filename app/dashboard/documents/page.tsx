import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { demoDocuments } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { UploadCloud, FileText, MoreVertical } from "lucide-react";

const statusTone = {
  Uploaded: "info", UnderReview: "warning", Approved: "success",
  Rejected: "danger", ReplacementRequired: "danger",
} as const;

export default function DocumentsPage() {
  return (
    <>
      <Topbar title="Documents" />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl border-2 border-dashed border-charcoal-800/15 bg-ivory-100 p-8 text-center">
          <UploadCloud className="mx-auto h-8 w-8 text-emerald-600" />
          <p className="mt-3 text-sm font-medium text-charcoal-800">Drag files here or click to upload</p>
          <p className="mt-1 text-xs text-charcoal-800/50">PDF, JPG or PNG, up to 10 MB per file</p>
          <Button variant="outline" size="sm" className="mt-4">Browse Files</Button>
        </div>

        <Card className="divide-y divide-charcoal-800/6 overflow-hidden">
          {demoDocuments.map((d) => (
            <div key={d.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                  <FileText className="h-4.5 w-4.5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal-800">{d.name}</p>
                  <p className="text-xs text-charcoal-800/50">
                    {formatDate(d.uploadedDate)} &middot; {(d.sizeKb / 1024).toFixed(1)} MB
                  </p>
                  {d.comment && <p className="mt-1 text-xs text-red-600">{d.comment}</p>}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge tone={statusTone[d.status]}>{d.status.replace(/([A-Z])/g, " $1").trim()}</Badge>
                <button className="rounded-lg p-1.5 text-charcoal-800/40 hover:bg-charcoal-800/5" aria-label="More options">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}
