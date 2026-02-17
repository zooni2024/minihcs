import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1 max-w-4xl">
                <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Cookie Policy</h1>
                    <p className="text-gray-600">We use cookies to improve your experience.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
