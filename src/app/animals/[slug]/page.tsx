import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function AnimalClassPage({ params }: { params: { slug: string } }) {
    const title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

    // In a real app, this would fetch specific data for the class (Mammals, Reptiles, etc.)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f9f9f9' }}>
            <Header />
            <main style={{ flex: 1 }}>
                <section className="hero" style={{
                    background: '#222', color: 'white', padding: '4rem 1rem', textAlign: 'center',
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))'
                }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{title}</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Discover everything you need to know about {title}, from their habitats to their unique behaviors.
                    </p>
                </section>

                <section className="container" style={{ padding: '3rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="az-grid">
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No Animals Found</h3>
                            <p>We are currently updating our database for {title}. Please check back soon!</p>
                            <Link href="/" style={{ display: 'inline-block', marginTop: '1rem', color: '#2e7d32', fontWeight: 'bold' }}>Back to Home</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
