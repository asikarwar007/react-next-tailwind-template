import { EpicForm } from "@/components/form/epic-form";
import { siteSettings } from "@/setting/site-settings";
import { EpicResult } from "@/components/epic-results/epic-result";

export default function VoterSearchDetailsPage() {

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">
        voter search details Page for {siteSettings.siteName}
      </h1>
      <EpicForm />
    </div>
  );
}
