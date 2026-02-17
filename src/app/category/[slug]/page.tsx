import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { categoryData, categoryDetails, CategoryContent } from '@/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug.toLowerCase();
    const details = categoryDetails?.[slug];
    const content = categoryData?.[slug];
    const title = details?.title || slug.replace(/-/g, ' ');
    const description = details?.description || content?.intro?.slice(0, 160) || `Explore our comprehensive guide to ${title}. Learn about care, breeds, and fun facts.`;

    return {
        title: `${title} - Guide & Encyclopedia`,
        description: description,
        openGraph: {
            title: `${title} | MiniHCS`,
            description: description,
            images: [details?.headerImage || '/hero-bg.png'],
        },
    };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
    const categoryKey = params.slug.toLowerCase();

    // In the new data structure, categoryData returns the rich content object
    // We cast it to any or CategoryContent to avoid TS issues if types aren't fully picked up yet
    const content = categoryData[categoryKey] as unknown as CategoryContent;
    const details = categoryDetails?.[categoryKey];

    // FAQ Schema
    const faqJsonLd = content?.faqs ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    } : null;

    // If no content or details found (and not a known category), handle 404
    if (!content && !details) {
        if (!['mammals', 'reptiles', 'birds', 'fish', 'amphibians', 'invertebrates'].includes(categoryKey)) {
            return (
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Header />
                    <main className="container" style={{ flex: 1, padding: '4rem 1rem', textAlign: 'center' }}>
                        <h1>Category Not Found</h1>
                        <p>We are working on adding more animals to this category.</p>
                        <Link href="/" className="btn-primary" style={{ marginTop: '2rem' }}>Go Back Home</Link>
                    </main>
                    <Footer />
                </div>
            );
        }
    }

    const title = details?.title || params.slug.replace(/-/g, ' ');
    const heroImage = details?.headerImage || '/hero-bg.png';
    const description = details?.description || `Explore our collection of ${title}.`;

    // 1. Define Theme Colors based on category
    const getTheme = (cat: string) => {
        switch (cat) {
            case 'cats': return { bg: '#fff5ec', accent: '#d84315', lightAccent: '#ffccbc', gradient: 'linear-gradient(135deg, #fff5ec 0%, #ffe0b2 100%)' }; // Warm Orange
            case 'roosters': return { bg: '#ffebee', accent: '#c62828', lightAccent: '#ffcdd2', gradient: 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)' }; // Vibrant Red
            case 'cows': return { bg: '#e8f5e9', accent: '#2e7d32', lightAccent: '#c8e6c9', gradient: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' }; // Natural Green
            case 'mini-highland-cows': return { bg: '#fff8e1', accent: '#f57f17', lightAccent: '#ffecb3', gradient: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)' }; // Golden/Highland
            default: return { bg: '#f5f5f5', accent: '#424242', lightAccent: '#e0e0e0', gradient: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)' };
        }
    };

    const theme = getTheme(categoryKey);
    const collageImages = [heroImage, ...(content?.gallery?.map(g => g.image) || [])].slice(0, 3);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: theme.bg, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}
            <Header />
            <main style={{ flex: 1 }}>
                {/* 1. Vibrant Hero Section (Pinterest/Collage Style) */}
                <section style={{
                    background: theme.gradient,
                    padding: '4rem 1rem 6rem',
                    borderBottomLeftRadius: '50px',
                    borderBottomRightRadius: '50px',
                    marginBottom: '3rem'
                }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>

                        {/* Text Column */}
                        <div style={{ flex: '1 1 500px' }}>
                            <Breadcrumbs items={[{ label: title, href: '#' }]} color={theme.accent} />
                            <span style={{
                                display: 'inline-block',
                                background: theme.accent,
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '50px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginBottom: '1.5rem',
                                letterSpacing: '1px'
                            }}>
                                {categoryKey.replace(/-/g, ' ')} Category
                            </span>
                            <h1 style={{
                                fontSize: '4rem',
                                fontWeight: '800',
                                color: '#222',
                                marginBottom: '1.5rem',
                                lineHeight: '1.1'
                            }}>
                                {title}
                            </h1>
                            <p style={{
                                fontSize: '1.3rem',
                                lineHeight: '1.6',
                                color: '#555',
                                marginBottom: '2.5rem',
                                maxWidth: '90%'
                            }}>
                                {description} {content?.intro}
                            </p>

                            {/* Stats/Action Buttons - Removed as per request */}
                        </div>

                        {/* Collage Column */}
                        <div style={{ flex: '1 1 500px', position: 'relative', height: '500px' }}>
                            {/* Main Large Image */}
                            <div style={{
                                position: 'absolute', top: '0', right: '0',
                                width: '70%', height: '85%',
                                borderRadius: '24px', overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                zIndex: 2
                            }}>
                                <Image src={collageImages[0]} alt="Main Hero" fill style={{ objectFit: 'cover' }} priority />
                            </div>

                            {/* Secondary Image (Bottom Left) */}
                            {collageImages[1] && (
                                <div style={{
                                    position: 'absolute', bottom: '0', left: '10%',
                                    width: '45%', height: '45%',
                                    borderRadius: '24px', overflow: 'hidden',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                                    zIndex: 3, border: '5px solid white'
                                }}>
                                    <Image src={collageImages[1]} alt="Secondary" fill style={{ objectFit: 'cover' }} />
                                </div>
                            )}

                            {/* Tertiary Decoration (Top Left Circle) */}
                            {collageImages[2] && (
                                <div style={{
                                    position: 'absolute', top: '10%', left: '0',
                                    width: '120px', height: '120px',
                                    borderRadius: '50%', overflow: 'hidden',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                    zIndex: 1, border: '4px solid white',
                                    display: 'block' // Show circle image if available
                                }}>
                                    <Image src={collageImages[2]} alt="Detail" fill style={{ objectFit: 'cover' }} />
                                </div>
                            )}

                            {/* Decorative Blob */}
                            <div style={{
                                position: 'absolute', top: '40%', left: '30%',
                                width: '300px', height: '300px',
                                background: theme.accent, opacity: 0.1,
                                borderRadius: '50%', filter: 'blur(40px)',
                                zIndex: 0
                            }}></div>
                        </div>
                    </div>
                </section>

                {/* 2. Advice Groups (Special for Cats, or Generic Advice) */}
                {content?.adviceGroups ? (
                    <section style={{ padding: '0 1rem 5rem', marginTop: '-3rem', position: 'relative', zIndex: 5 }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <div style={{
                                background: theme.lightAccent, // Thematic background instead of white
                                borderRadius: '24px',
                                padding: '3rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
                            }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>Expert Guide & Advice</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                                    {content.adviceGroups.map((group, idx) => (
                                        <div key={idx} style={{ padding: '1rem' }}>
                                            <h3 style={{
                                                fontSize: '1.4rem', color: theme.accent, marginBottom: '1rem',
                                                display: 'flex', alignItems: 'center', fontWeight: '700'
                                            }}>
                                                <span style={{ width: '8px', height: '8px', background: theme.accent, borderRadius: '50%', marginRight: '10px' }}></span>
                                                {group.title}
                                            </h3>
                                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                                {group.items.slice(0, 5).map((item, i) => (
                                                    <li key={i} style={{ marginBottom: '8px' }}>
                                                        <Link href={item.link} style={{
                                                            color: '#555', textDecoration: 'none', fontSize: '1.05rem',
                                                            transition: 'color 0.2s', display: 'block', padding: '5px 0'
                                                        }} className="hover:opacity-75">
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li style={{ marginTop: '10px' }}>
                                                    <Link href="#" style={{ color: theme.accent, fontWeight: 'bold', fontSize: '0.9rem', textDecoration: 'none' }}>View All &rarr;</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    /* Generic Content if no Advice Groups (e.g. Roosters/Cows base) */
                    null
                )}

                {/* 3. Popular Varieties / Breeds (Pinterest Grid) */}
                {content?.subBreeds && (
                    <section style={{ padding: '2rem 1rem 6rem', background: 'transparent' }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <span style={{ color: theme.accent, fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px' }}>Explore Diversity</span>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#222', marginTop: '0.5rem' }}>Popular Breeds & Varieties</h2>
                            </div>

                            <div style={{ columnCount: 3, columnGap: '20px' }}>
                                {content.subBreeds.map((breed, index) => (
                                    <div key={index} style={{
                                        breakInside: 'avoid', marginBottom: '20px',
                                        background: 'white', borderRadius: '16px', overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #eee'
                                    }}>
                                        <div style={{ position: 'relative', height: index % 2 === 0 ? '280px' : '200px' }}>
                                            <Image src={breed.image} alt={breed.title} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ padding: '1.5rem' }}>
                                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '700' }}>{breed.title}</h3>
                                            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>{breed.description}</p>
                                        </div>
                                    </div>
                                ))}
                                {/* Mix in generic advice cards if needed to fill grid */}
                                {content?.advice && !content.adviceGroups && content.advice.slice(0, 2).map((adv, idx) => (
                                    <div key={`adv-${idx}`} style={{
                                        breakInside: 'avoid', marginBottom: '20px',
                                        background: theme.lightAccent, borderRadius: '16px', padding: '2rem',
                                        display: 'flex', flexDirection: 'column', justifyContent: 'center'
                                    }}>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#222' }}>{adv.title}</h3>
                                        <Link href={adv.link} style={{
                                            background: 'white', color: theme.accent,
                                            textAlign: 'center', padding: '10px', borderRadius: '8px',
                                            textDecoration: 'none', fontWeight: 'bold'
                                        }}>Read Article</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 4. Gallery Section (Horizontal Scroll) */}
                {content?.gallery && (
                    <section style={{ padding: '5rem 0', background: '#fafafa', overflow: 'hidden' }}>
                        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem', color: '#333' }}>Captured Moments</h2>
                            <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px', scrollbarWidth: 'none' }}>
                                {content.gallery.map((item, idx) => (
                                    <div key={idx} style={{ flex: '0 0 300px', height: '400px', position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
                                        <Image src={item.image} alt={item.caption} fill style={{ objectFit: 'cover' }} />
                                        <div style={{
                                            position: 'absolute', bottom: 0, left: 0, right: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                            padding: '20px', color: 'white'
                                        }}>
                                            {item.caption}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQ Section */}
                {content?.faqs && (
                    <section style={{ padding: '5rem 1rem 8rem', background: theme.lightAccent }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', fontWeight: '700', color: theme.accent }}>Common Questions</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {content.faqs.map((faq, idx) => (
                                    <div key={idx} style={{
                                        background: '#fff',
                                        padding: '2rem',
                                        borderRadius: '16px',
                                        boxShadow: '0 5px 20px rgba(0,0,0,0.03)',
                                        border: `1px solid ${theme.lightAccent}`
                                    }}>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', fontWeight: '800', color: '#333' }}>{faq.question}</h3>
                                        <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}
