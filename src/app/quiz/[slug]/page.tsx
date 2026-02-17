import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

export default function QuizPage({ params }: { params: { slug: string } }) {
    // In a real app, fetch quiz data based on slug
    const quizTitle = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + " Quiz";

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-1 max-w-4xl">
                <nav className="text-sm text-gray-500 mb-4">
                    <a href="/" className="hover:underline">Home</a> &gt; <a href="/quizzes" className="hover:underline">Quizzes</a> &gt; <span>{quizTitle}</span>
                </nav>

                <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{quizTitle}</h1>
                    <div className="prose max-w-none text-gray-600">
                        <p className="mb-6">Test your knowledge! This is a placeholder for the interactive quiz component.</p>

                        <div className="p-6 bg-green-50 rounded-lg border border-green-100 text-center">
                            <p className="text-lg font-medium text-green-800 mb-4">Question 1: What is the primary habitat of this animal?</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button className="p-3 bg-white border border-gray-300 rounded hover:bg-green-600 hover:text-white transition">Rainforest</button>
                                <button className="p-3 bg-white border border-gray-300 rounded hover:bg-green-600 hover:text-white transition">Desert</button>
                                <button className="p-3 bg-white border border-gray-300 rounded hover:bg-green-600 hover:text-white transition">Tundra</button>
                                <button className="p-3 bg-white border border-gray-300 rounded hover:bg-green-600 hover:text-white transition">Ocean</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
