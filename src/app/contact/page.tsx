import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12 flex-1 max-w-4xl">
                <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
                    <p className="text-gray-600 mb-6">
                        Have a question, feedback, or interested in **Guest Posting & Collaborations**?
                        We’d love to hear from you. Fill out the form below or check our <a href="/write-for-us" className="text-green-700 font-bold hover:underline">Write for Us</a> page.
                    </p>

                    <form className="space-y-4 max-w-lg">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-600 focus:outline-none" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-600 focus:outline-none" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded h-32 focus:ring-2 focus:ring-green-600 focus:outline-none" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="px-6 py-2 bg-green-700 text-white font-bold rounded hover:bg-green-800 transition">Send Message</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
