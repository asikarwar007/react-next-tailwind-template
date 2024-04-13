import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { siteSettings } from "@/setting/site-settings";
import Link from "next/link";

interface PageLogoProp {

}

export const PageLogo: React.FC<PageLogoProp> = ({ }) => (

  <Link href="/" className={cn("flex items-center space-x-2")}>
    <Icons.logo className={cn("h-6 w-6")} />
    <span className={cn("inline-block font-bold")}>{siteSettings.siteName}</span>
  </Link>
)
