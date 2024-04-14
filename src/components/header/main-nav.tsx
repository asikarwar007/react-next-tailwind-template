'use client';
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { publicLinks } from "@/lib/publicLinks";
import { PageLogo } from "../ui/page-logo";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname()
  return (
    <div className={cn("flex gap-6 md:gap-10")}>
      <PageLogo />
      {publicLinks?.length && (
        <nav className={cn("flex gap-6")}>
          {publicLinks?.map((item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium",
                  item.disabled && "cursor-not-allowed opacity-80",
                  !pathname.includes(item.href) && "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      )}
    </div>
  )
}

