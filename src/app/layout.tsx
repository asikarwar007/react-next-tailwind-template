import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { siteSettings } from "@/setting/site-settings";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
import { AppHeader } from "@/components/header";
import { AppFooter } from "@/components/footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.canonical),
  title: {
    default: siteSettings.name,
    template: `%s | ${siteSettings.name} `,
  },
  description: siteSettings.description,
  icons: siteSettings.icons,
  keywords: siteSettings.keywords,
  applicationName: siteSettings.name,
  creator: siteSettings.creator,
  authors: siteSettings.author,
  verification: siteSettings.verification,
  appleWebApp: true,
  openGraph: {
    type: "website",
    url: siteSettings.canonical,
    title: siteSettings.name,
    description: siteSettings.description,
    siteName: siteSettings.name,
    images: [siteSettings.logo.url],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteSettings.social.twitter,
    creator: "@abhimanyu",
    title: siteSettings.name,
    description: siteSettings.description,
    images: [siteSettings.logo.url],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
        "overflow-y-scroll bg-[url('/grid-light.svg')] dark:bg-[url('/grid-dark.svg')] min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <AppHeader />
            <div className="app-container flex-1">
              <div className="main-content container">
                <div className="main-content-inner">
                  {children}
                </div>
              </div>
            </div>
            <AppFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
