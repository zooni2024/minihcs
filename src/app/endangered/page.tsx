import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EndangeredPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1 max-w-4xl">
                <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Endangered Species</h1>
                    <p className="text-gray-600 mb-6">
                        Many animal species are currently at risk of extinction. Here at Mini HCS, we believe in raising awareness to help protect our planet's biodiversity.
                    </p>
                    <div className="p-6 bg-red-50 text-red-800 rounded-lg border border-red-100 text-center">
                        <p className="font-bold text-lg">Coming Soon</p>
                        <p>We are compiling a comprehensive list of endangered species and how you can help.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
