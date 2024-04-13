import React, { Suspense } from 'react'
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { siteSettings } from '@/setting/site-settings'
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Icons } from "@/components/ui/icons"
import dynamic from 'next/dynamic'

const MainNav = dynamic(() => import('@/components/header/main-nav'))

interface AppHeaderProp { }

export const AppHeader: React.FC<AppHeaderProp> = ({  }) => (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Suspense fallback={<div>Loading...</div>}>
          <MainNav />
        </Suspense>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteSettings.social.github}
              target="_blank"
              key={'instagram-social'}
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.instagram className="h-7 w-7 flex items-center" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <Link
              href={siteSettings.social.github}
              target="_blank"
              key={'instagram-GitHub'}
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteSettings.social.twitter}
              target="_blank"
              key={'instagram-Twitter'}
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
)