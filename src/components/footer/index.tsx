import React from 'react'
import './footer.style.css'
import { siteSettings } from '@/setting/site-settings'
import { PageLogo } from '../ui/page-logo'
import Link from 'next/link'
import { footerLinks } from './footer-links'

interface AppFooterProp {
}

export const AppFooter: React.FC<AppFooterProp> = ({ }) => (
    <footer className="theme-footer-area bg-background bg-slate-900 dark:bg-slate-50 border-t ">
        <div className="footer-top pt-8 pb-0">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12  gap-4">
                    <div className="col-span-2 md:col-span-4">
                        <div className="footer-widget widget">
                            <div className="footer-logo text-white dark:text-black">
                                <PageLogo />
                            </div>
                            <p className='text-gray-200 dark:text-gray-900 line-clamp-5'>
                                {siteSettings.description}
                            </p>
                        </div>
                    </div>
                    {
                        footerLinks.map((section, index) => (
                            <div key={`footer-${index}`} className="col-span-1 md:col-span-3">
                                <div className="footer-widget widget widget-nav-menu ml-70">
                                    <h4 className="widget-title anton-regular text-white dark:text-black">{section.name}</h4>
                                    <ul className="menu">
                                        {
                                            section.items.map((link, i) => (
                                                <li key={`footer-li-${index}-${i}`} className='text-gray-200 dark:text-gray-900'>
                                                    <Link href={link.href}>
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="col-span-2 md:col-span-4">
                        <div className="footer-widget widget widget-newsletter ml-30">
                            <h4 className="widget-title anton-regular text-white dark:text-black">Subscribe Now</h4>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-bottom py-2 border-t border-slate-700 dark:border-slate-500">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4">
                        <div className="col-span-6 flex items-center">
                            <div className="copyright-text">
                                <p className='text-sm text-gray-200 dark:text-gray-900'>Copyright © {siteSettings.siteName} {(new Date()).getFullYear()}. All rights reserved</p>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="footer-menu">
                                <ul className="footer-nav text-left md:text-right">
                                    <li className="pr-2 ml-0 md:text-right">
                                        <Link href="/legal/privacy-policy" className='text-sm text-gray-300 dark:text-gray-800'>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className='px-2 border-l border-slate-700 dark:border-slate-500'>
                                        <Link href="/legal/cookie-policy" className='text-sm text-gray-300 dark:text-gray-800'>
                                            Cookie Policy
                                        </Link>
                                    </li>
                                    <li className='px-2 border-l border-slate-700 dark:border-slate-500'>
                                        <Link href="/legal/terms-of-use" className='text-sm text-gray-300 dark:text-gray-800'>
                                            Terms of Use
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)