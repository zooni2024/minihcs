import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { azList, allAnimals } from '@/data';

export const metadata = {
    title: 'Animal Index - A-Z List of Animals',
    description: 'Browse our complete list of animals from A to Z.',
};

export default function AnimalIndexPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f9f9f9' }}>
            <Header />
            <main className="container" style={{ flex: 1, padding: '3rem 1rem' }}>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#2e7d32' }}>
                    A-Z Animal Index
                </h1>

                <div className="content-section" style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem' }}>
                        Search our encyclopedia of animals by their first letter.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '800px', margin: '0 auto' }}>
                        {azList.map((letter) => (
                            <Link
                                href={`/az/${letter.toLowerCase()}`}
                                key={letter}
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    background: '#2e7d32',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '1.5rem',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    transition: 'transform 0.2s'
                                }}
                            >
                                {letter}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Optional: Show All Animals List grouped by letter? 
                    That might be too long. Let's show "Popular Animals" instead. 
                */}
                <div style={{ marginTop: '4rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Popular Animals</h2>
                    <div className="az-grid">
                        {allAnimals.slice(0, 8).map((animal, index) => (
                            <Link href={animal.link} key={index} className="az-card">
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 className="az-card-title" style={{ margin: 0 }}>{animal.name}</h3>
                                    <p className="az-card-text" style={{ marginTop: '0.5rem' }}>{animal.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
