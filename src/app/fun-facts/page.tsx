import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FunFactsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1 max-w-4xl">
                <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Animal Fun Facts</h1>
                    <ul className="space-y-4 text-gray-700">
                        <li className="p-4 bg-yellow-50 rounded border border-yellow-100">
                            <strong>Did you know?</strong> Cows have best friends and get stressed when they are separated.
                        </li>
                        <li className="p-4 bg-green-50 rounded border border-green-100">
                            <strong>Did you know?</strong> A shrimp's heart is located in its head.
                        </li>
                        <li className="p-4 bg-blue-50 rounded border border-blue-100">
                            <strong>Did you know?</strong> Snails can sleep for up to three years.
                        </li>
                        <li className="p-4 bg-red-50 rounded border border-red-100">
                            <strong>Did you know?</strong> Slugs have four noses.
                        </li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
}
