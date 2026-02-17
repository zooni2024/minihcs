import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StaticPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1 max-w-4xl">
                <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
                    <div className="prose max-w-none text-gray-700 leading-relaxed">
                        <p className="mb-4">
                            Welcome to <strong>Mini HCS</strong>, your ultimate guide to the animal kingdom. We are dedicated to providing accurate, engaging, and educational content about animals from around the world.
                        </p>
                        <p className="mb-4">
                            Our mission is to foster appreciation and understanding of wildlife through high-quality articles, stunning photography, and interactive features. Whether you are a student, a pet owner, or simply a nature enthusiast, we have something for you.
                        </p>
                        <p>
                            We adhere to strict editorial standards to ensure our content is reliable and up-to-date. Thank you for exploring the world of animals with us!
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
