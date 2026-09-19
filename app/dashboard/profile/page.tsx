import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { FieldLabel, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
  return (
    <>
      <Topbar title="Profile" />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <Card className="max-w-2xl p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-lg font-semibold text-emerald-700">
              AK
            </div>
            <div>
              <p className="text-base font-semibold text-charcoal-800">Ahmed Khan</p>
              <p className="text-sm text-charcoal-800/50">Client since Jan 2026</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div><FieldLabel htmlFor="fullName">Full name</FieldLabel><Input id="fullName" defaultValue="Ahmed Khan" /></div>
            <div><FieldLabel htmlFor="cnic">CNIC number</FieldLabel><Input id="cnic" defaultValue="42101-XXXXXXX-X" /></div>
            <div><FieldLabel htmlFor="phone">Phone number</FieldLabel><Input id="phone" defaultValue="03XX-XXXXXXX" /></div>
            <div><FieldLabel htmlFor="email">Email address</FieldLabel><Input id="email" defaultValue="ahmed.khan@example.com" /></div>
          </div>

          <div className="mt-8 border-t border-charcoal-800/8 pt-6">
            <h2 className="text-sm font-semibold text-charcoal-800">Change password</h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div><FieldLabel htmlFor="newPassword">New password</FieldLabel><Input id="newPassword" type="password" placeholder="••••••••" /></div>
              <div><FieldLabel htmlFor="confirmNewPassword">Confirm new password</FieldLabel><Input id="confirmNewPassword" type="password" placeholder="••••••••" /></div>
            </div>
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
