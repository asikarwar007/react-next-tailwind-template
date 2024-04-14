import { BasicForm } from "@/components/form/basic-form";
import { siteSettings } from "@/setting/site-settings";


export default function VoterSearchMobilePage() {
    return <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">voter search Mobile Page for {siteSettings.siteName}</h1>
        <BasicForm />
    </div>
}
