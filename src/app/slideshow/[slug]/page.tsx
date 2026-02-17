import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SlideshowPage({ params }: { params: { slug: string } }) {
    // In a real app, fetch data. For now, valid placeholders.
    const title = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-1 max-w-5xl">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{title}</h1>
                        <p className="text-gray-500">A visual journey through nature.</p>
                    </div>

                    {/* Slideshow Placeholder UI */}
                    <div className="bg-black relative aspect-video flex items-center justify-center">
                        <p className="text-white text-xl">Image 1 of 8</p>
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                            <button className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full text-2xl font-bold transition">&lsaquo;</button>
                            <button className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full text-2xl font-bold transition">&rsaquo;</button>
                        </div>
                    </div>

                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Slide 1: The Beginning</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            This is a placeholder for the slideshow content. In a fully implemented version, this would be an interactive carousel showing high-definition images of the topic "{title}".
                        </p>
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                            <strong>Did You Know?</strong> Slideshows are a great way to engage with visual content!
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
