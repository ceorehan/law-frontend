import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { FieldLabel, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function AdminSettingsPage() {
  return (
    <>
      <Topbar title="Settings" />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <Card className="max-w-xl p-6 sm:p-8">
          <h2 className="text-sm font-semibold text-charcoal-800">Consultant profile</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <div><FieldLabel htmlFor="name">Full name</FieldLabel><Input id="name" defaultValue="Sara Ahmed" /></div>
            <div><FieldLabel htmlFor="email">Work email</FieldLabel><Input id="email" defaultValue="sara.ahmed@zalawassociates.pk" /></div>
          </div>
          <div className="mt-8 flex justify-end gap-3 border-t border-charcoal-800/8 pt-6">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </Card>
      </div>
    </>
  );
}
