import { LeaderboardAdArea } from "@/components/ads-area/leaderboard-728x90";
import { MediumRectangleAdArea } from "@/components/ads-area/medium-rectangle-300x250";
import { siteSettings } from "@/setting/site-settings";

export default function Home() {
  return (
    <section className="page-wrapper">
      <h1 className="text-2xl font-bold antialiased font-bold anton-regular">{siteSettings.name}</h1>
      <p className="antialiased text-slate-900 dark:text-slate-300">
        {siteSettings.description}
      </p>
      <div className="grid items-center gap-8 pb-4 pt-3">
        <MediumRectangleAdArea />
        {/* <ArticleHeroPage />
        <EditorChoicePage />
        <AdAreaLarge />
        <MostPopularPage /> */}
      </div>
    </section>
  );
}
