import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Write for Us - Contribute to Mini HCS Animal Blog',
    description: 'Join our community of animal enthusiasts. Submit guest posts about pets, wildlife, livestock, and animal care to get high-quality backlinks and reach.',
};

export default function WriteForUs() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f9fbf9' }}>
            <Header />
            <main style={{ flex: 1, padding: '4rem 1rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <h1 style={{ fontSize: '2.5rem', color: '#2e7d32', marginBottom: '1.5rem', fontWeight: '800' }}>Write for Us: Animal Guest Posting</h1>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>
                        Are you an animal lover, a veterinarian, a wildlife expert, or a pet owner with a story to tell?
                        <strong> Mini HCS</strong> is always looking for high-quality, original content that helps our readers understand and appreciate the animal kingdom better.
                    </p>

                    <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', marginBottom: '1rem' }}>Why Guest Post with Us?</h2>
                    <ul style={{ lineHeight: '2', color: '#555', marginBottom: '2rem' }}>
                        <li><strong>Reach a Wider Audience:</strong> Your articles will be read by thousands of animal enthusiasts.</li>
                        <li><strong>High-Quality Backlinks:</strong> Improve your site's SEO with a link back to your blog or website.</li>
                        <li><strong>Build Authority:</strong> Establish yourself as an expert in the animal niche.</li>
                        <li><strong>Social Media Promotion:</strong> We share our best articles across our social channels.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', marginBottom: '1rem' }}>Topics We Cover</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '2rem' }}>
                        {[
                            'Pet Care & Training',
                            'Livestock Management',
                            'Wildlife Conservation',
                            'Animal Behavior',
                            'Rare Breeds (e.g., Mini Cows)',
                            'Poultry & Farming',
                            'Aquatic Life',
                            'DIY Pet Projects'
                        ].map((topic, i) => (
                            <div key={i} style={{ padding: '10px 15px', background: '#e8f5e9', color: '#2e7d32', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                ✓ {topic}
                            </div>
                        ))}
                    </div>

                    <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', marginBottom: '1rem' }}>Submission Guidelines</h2>
                    <ul style={{ lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
                        <li><strong>Content Quality:</strong> Articles must be at least 1,000 words, informative, and original.</li>
                        <li><strong>No Plagiarism:</strong> We only accept 100% unique content. No AI-generated or copied text.</li>
                        <li><strong>Formatting:</strong> Use clear headings, bullet points, and short paragraphs.</li>
                        <li><strong>Images:</strong> Please provide high-resolution images that you have the rights to use.</li>
                        <li><strong>Linking Policy:</strong> You can include 1 contextually relevant link to your own site.</li>
                    </ul>

                    <div style={{ background: '#2e7d32', color: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center', marginTop: '3rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to Submit?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>Send your pitch or complete draft to our editorial team at:</p>
                        <a href="mailto:guestposts@minihcs.com" style={{ fontSize: '1.3rem', color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>
                            guestposts@minihcs.com
                        </a>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>We typically respond within 48-72 hours.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
