import { siteSettings } from "@/setting/site-settings";


export default function ReleasesPage() {
    return <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Releases Page for {siteSettings.siteName}</h1>
    </div>
}
