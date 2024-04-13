import { siteSettings } from "@/setting/site-settings";


export default function PrivacyPolicyPage() {
    return <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy for {siteSettings.siteName}</h1>
        <p className="mb-2">
            Welcome to {siteSettings.siteName} ({siteSettings.canonical}), a comprehensive database and community for gamers. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website.
        </p>
        <section className="mt-4">
            <h2 className="text-xl font-semibold mb-2">1. Information Collection</h2>
            <p>We collect information from you when you register on our site, subscribe to a newsletter, respond to a survey, fill out a form, or use certain other site features. The types of information we may collect include:</p>
            <ul className="list-disc pl-5">
                <li>Personal Identification Information: Name, email address, and other contact details.</li>
                <li>Usage Data: Information on how you interact with our site, such as page views, site navigation paths, and game preferences.</li>
                <li>Cookies and Tracking Data: We use cookies to enhance your experience, gather general visitor information, and track visits to our website.</li>
            </ul>
        </section>
        <section className="mt-4">
            <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
            <p>The information we collect from you may be used in one of the following ways:</p>
            <ul className="list-disc pl-5">
                <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                <li>To improve our website based on the information and feedback we receive from you.</li>
                <li>To send periodic emails regarding updates or other products and services.</li>
            </ul>
        </section>
        <section className="mt-4">
            <h2 className="text-xl font-semibold mb-2">3. Information Protection</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.</p>
        </section>
        <section className="mt-4">
            <h2 className="text-xl font-semibold mb-2">4. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
        </section>

        {/* ... other sections ... */}

        <section className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Contacting Us</h2>
            <p>If you have any questions regarding this privacy policy, you may contact us using the information below:</p>
            <ul className="list-disc pl-5">
                <li>Website: {siteSettings.canonical}</li>
            </ul>
        </section>
    </div>
}
