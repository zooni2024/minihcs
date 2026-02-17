import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1 max-w-4xl">
                <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
                    <div className="prose max-w-none text-gray-700 text-sm">
                        <p className="mb-4">Last Updated: January 2026</p>
                        <p className="mb-4">
                            At Mini HCS, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
                        </p>
                        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">Information We Collect</h2>
                        <p className="mb-4">
                            We may collect non-personal information such as browser type, operating system, and pages visited to help us improve our site. We also use cookies to enhance your experience and serve relevant advertisements.
                        </p>
                        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">Third-Party Advertisers</h2>
                        <p className="mb-4">
                            We use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
