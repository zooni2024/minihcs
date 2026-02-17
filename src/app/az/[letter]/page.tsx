import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { allAnimals, azList } from '@/data';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { letter: string } }) {
    const letter = params.letter.toUpperCase();
    return {
        title: `Animals Starting with ${letter} - MiniHCS`,
        description: `Explore our collection of animals starting with the letter ${letter}.`,
    };
}

export default function AzPage({ params }: { params: { letter: string } }) {
    const letter = params.letter.toUpperCase();

    // Validate letter
    if (!azList.includes(letter)) {
        return notFound();
    }

    const animals = allAnimals.filter(animal =>
        animal.name.toUpperCase().startsWith(letter)
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f5f5f5' }}>
            <Header />

            <main className="container" style={{ flex: 1, padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>

                {/* A-Z Navigation */}
                {/* A-Z Navigation */}
                <nav style={{ marginBottom: '3rem', textAlign: 'center', background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#444', fontWeight: '700' }}>Browse By First Letter</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
                        {azList.map((l) => {
                            const isActive = l === letter;
                            return (
                                <Link
                                    href={`/az/${l.toLowerCase()}`}
                                    key={l}
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: isActive ? 'linear-gradient(135deg, #43a047 0%, #2e7d32 100%)' : '#f5f5f5',
                                        color: isActive ? 'white' : '#555',
                                        border: isActive ? 'none' : '1px solid #e0e0e0',
                                        borderRadius: '12px',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                        boxShadow: isActive ? '0 5px 15px rgba(46, 125, 50, 0.3)' : 'none',
                                        transition: 'all 0.2s ease',
                                        transform: isActive ? 'scale(1.1)' : 'scale(1)'
                                    }}
                                    className="az-nav-item"
                                >
                                    {l}
                                </Link>
                            )
                        })}
                    </div>
                </nav>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333', borderBottom: '2px solid #2e7d32', paddingBottom: '0.5rem' }}>
                    Animals Starting with "{letter}"
                </h1>

                {animals.length > 0 ? (
                    <div className="az-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '20px'
                    }}>
                        {animals.map((animal, index) => (
                            <Link href={animal.link} key={index} className="az-card" style={{
                                background: 'white',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{ position: 'relative', height: '200px', background: '#e0e0e0' }}>
                                    {animal.image && (
                                        <Image
                                            src={animal.image}
                                            alt={animal.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    )}
                                </div>
                                <div style={{ padding: '1.25rem' }}>
                                    <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#2e7d32' }}>{animal.name}</h2>
                                    <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>{animal.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem 0', color: '#666' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No animals found starting with {letter}</h3>
                        <p>We are constantly adding new animals to our database. Check back soon!</p>
                        <Link href="/" style={{ display: 'inline-block', marginTop: '1rem', color: '#2e7d32', fontWeight: 'bold' }}>
                            Return to Homepage
                        </Link>
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
}
