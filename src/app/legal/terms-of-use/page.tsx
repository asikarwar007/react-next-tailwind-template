import { siteSettings } from "@/setting/site-settings";

export default async function TermsOfUsePage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Terms of Use for {siteSettings.siteName}</h1>
            <p className="mb-2">
                Welcome to {siteSettings.siteName} These Terms of Use (Terms) govern your use of our website located at {siteSettings.canonical} (Service) and any related services provided by {siteSettings.siteName}.
            </p>
            <section className="mt-4">
                <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms
                </h2>
                <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
                </p>
            </section>
            <section className="mt-4">
                <h2 className="text-xl font-semibold mb-2">2. Changes to Terms
                </h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.
                </p>
            </section>
            <section className="mt-4">
                <h2 className="text-xl font-semibold mb-2">3. Use of the Service
                </h2>
                <p>You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else use and enjoyment of the Service.


                </p>
            </section>
            <section className="mt-4">
                <h2 className="text-xl font-semibold mb-2">4. User Contributions


                </h2>
                <p>The Service may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features that allow users to post, submit, publish, display, or transmit content or materials. You are responsible for the content that you contribute to the Service, and you must ensure it is legal, honest, and respectful.

                </p>
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
    );
}
