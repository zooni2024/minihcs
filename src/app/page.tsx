import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { azList, featuredArticles, quizzes, slideshows } from '@/data';

export default function Home() {
    // Images for the hero collage (matching the 4 main categories)
    const heroCollageImages = [
        { src: "/cat_portrait.png", alt: "Cats", color: "#fff3e0", rotate: '-6deg' },
        { src: "/rooster_vibrant_hd.png", alt: "Roosters", color: "#ffebee", rotate: '4deg', size: '1.2' },
        { src: "/mini_highland_cow_card.png", alt: "Mini Cows", color: "#e8f5e9", rotate: '-3deg' },
        { src: "/cow_grazing_pasture.png", alt: "Cattle", color: "#e0f2f1", rotate: '5deg' }
    ];

    const homeFaqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What is the best animal for a small homestead?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'For small homesteads, Mini Highland cows, chickens, and dwarf goats are excellent choices. They require significantly less land than standard breeds and are generally easier to manage.'
                }
            },
            {
                '@type': 'Question',
                name: 'How many acres does a Mini Highland cow need?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A Mini Highland cow typically needs about 0.5 to 1 acre of quality pasture. However, this varies based on your local climate and grass growth rates.'
                }
            }
        ]
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'linear-gradient(135deg, #fff8e1 0%, #e8f5e9 100%)', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
            />
            <Header />

            <main style={{ flex: 1 }}>

                {/* 1. New Hero Section: Text + 4 Animal Collage */}
                <section style={{
                    padding: '4rem 1rem 6rem',
                    background: 'linear-gradient(135deg, #1b5e20 0%, #43a047 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative Organic Shapes Background */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
                        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                    </div>

                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative', zIndex: 2 }}>

                        {/* Left Column: Text & Search */}
                        <div style={{ flex: '1 1 500px', color: 'white', paddingRight: '2rem', marginBottom: '3rem' }}>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                fontWeight: '800',
                                lineHeight: '1.2',
                                marginBottom: '1.5rem',
                                textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}>
                                Discover, Appreciate & Understand the Animal Kingdom
                            </h1>
                            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.95, lineHeight: '1.6', maxWidth: '90%' }}>
                                Join thousands of animal lovers exploring expert advice, detailed guides, and beautiful galleries of your favorite creatures.
                            </p>

                            {/* Search Bar Removed as per request */}
                        </div>

                        {/* Right Column: 4-Animal Collage */}
                        <div style={{ flex: '1 1 450px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '450px' }}>
                            <div style={{
                                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px',
                                transform: 'rotate(0deg)',
                                background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                {heroCollageImages.map((img, idx) => (
                                    <Link key={idx} href={`/category/${img.alt === 'Mini Cows' ? 'mini-highland-cows' : img.alt.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                                        <div style={{
                                            position: 'relative', width: '200px', height: '220px',
                                            background: img.color, borderRadius: '20px',
                                            overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                                            transform: `scale(${idx === 1 ? '1.05' : '1'})`,
                                            transition: 'transform 0.3s ease', cursor: 'pointer'
                                        }} className="hover:scale-105">
                                            <Image
                                                src={img.src} alt={img.alt} fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="(max-width: 768px) 150px, 200px"
                                                priority
                                            />
                                            <div style={{
                                                position: 'absolute', bottom: 0, left: 0, right: 0,
                                                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                                padding: '10px', color: 'white', textAlign: 'center', fontWeight: 'bold'
                                            }}>
                                                {img.alt}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                    {/* Curve to transition to body */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50px', background: '#fff8e1', borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' }}></div>
                </section>

                {/* Ad Banner Leaderboard */}
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    <div className="ad-banner">
                        <span>Advertisement</span>
                    </div>
                </div>

                {/* 2. Discover Your Favorite Animal Today */}
                <section className="content-section">
                    <div className="grid-title">Discover Your Favorite Animal Today</div>
                    <div className="az-grid">
                        {/* Custom Card: Mini Highland Cow */}
                        <Link href="/category/mini-highland-cows" className="az-card">
                            <div className="az-card-img">
                                <Image
                                    src="/mini_highland_cow_card.png"
                                    alt="Mini Highland Cow"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="az-card-content">
                                <h3 className="az-card-title">Mini Highland Cows</h3>
                                <p className="az-card-text">Discover the fluffy, friendly cattle of the Scottish Highlands.</p>
                                <span className="az-read-more">Read More &raquo;</span>
                            </div>
                        </Link>

                        {/* Custom Card: Cats */}
                        <Link href="/category/cats" className="az-card">
                            <div className="az-card-img">
                                <Image
                                    src="/cat_portrait.png"
                                    alt="Domestic Cats"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover', filter: 'brightness(1.1)' }}
                                />
                            </div>
                            <div className="az-card-content">
                                <h3 className="az-card-title">Domestic Cats</h3>
                                <p className="az-card-text">Explore breeds, behavior, and care for your feline friends.</p>
                                <span className="az-read-more">Read More &raquo;</span>
                            </div>
                        </Link>

                        {/* Custom Card: Roosters */}
                        <Link href="/category/roosters" className="az-card">
                            <div className="az-card-img">
                                <Image
                                    src="/rooster_vibrant_hd.png"
                                    alt="Roosters"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="az-card-content">
                                <h3 className="az-card-title">Roosters</h3>
                                <p className="az-card-text">The kings of the flock: breeds, care, and integration.</p>
                                <span className="az-read-more">Read More &raquo;</span>
                            </div>
                        </Link>

                        {/* Custom Card: Cattle */}
                        <Link href="/category/cows" className="az-card">
                            <div className="az-card-img">
                                <Image
                                    src="/cow_grazing_pasture.png"
                                    alt="Cattle"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="az-card-content">
                                <h3 className="az-card-title">Cows & Cattle</h3>
                                <p className="az-card-text">Comprehensive guide to dairy and beef cattle breeds.</p>
                                <span className="az-read-more">Read More &raquo;</span>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* 3. Reference Guides (Mammals, etc) */}
                <section className="content-section" style={{ background: 'transparent', padding: '4rem 1rem', marginTop: '2rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#222', marginBottom: '0.5rem' }}>The 7 Main Types of Animals</h2>
                            <p style={{ color: '#666', fontSize: '1.1rem' }}>Explore the characteristics that define the animal kingdom.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '20px', textAlign: 'center' }}>
                            {[
                                { name: 'Mammals', img: '/thumb_mammal.png' },
                                { name: 'Reptiles', img: '/thumb_reptile.png' },
                                { name: 'Fish', img: '/thumb_fish.png' },
                                { name: 'Birds', img: '/thumb_bird.png' },
                                { name: 'Amphibians', img: '/thumb_amphibian.png' },
                                { name: 'Invertebrates', img: '/thumb_invertebrate.png' },
                                { name: 'Insects', img: '/thumb_insect.png' }
                            ].map((type) => (
                                <Link href={`/animals/${type.name.toLowerCase()}`} key={type.name} style={{ display: 'block', textDecoration: 'none' }}>
                                    <div style={{
                                        height: '130px',
                                        width: '130px',
                                        margin: '0 auto 1rem',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        border: '4px solid white',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.2s',
                                        position: 'relative'
                                    }} className="hover:scale-105">
                                        <Image
                                            src={type.img}
                                            alt={type.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#444' }}>{type.name}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Slideshows Section (New) */}
                <section className="content-section" style={{ marginTop: '2rem', background: 'var(--az-light-green)', padding: '3rem 1rem', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '3px solid #d84315', paddingBottom: '0.5rem' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#222', margin: 0 }}>Slideshows</h2>
                        <Link href="/slideshows" style={{ color: '#d84315', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>See All &raquo;</Link>
                    </div>

                    <div className="az-grid">
                        {slideshows.map((slide, index) => (
                            <Link href={slide.link} key={index} className="az-card">
                                <div className="az-card-img">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div style={{
                                        position: 'absolute', bottom: '10px', right: '10px',
                                        background: 'rgba(0,0,0,0.7)', color: 'white',
                                        padding: '4px 8px', borderRadius: '4px',
                                        fontSize: '0.8rem'
                                    }}>📷 Gallery</div>
                                </div>
                                <div className="az-card-content">
                                    <h3 className="az-card-title">{slide.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Ad Banner Leaderboard */}
                <div className="container" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
                    <div className="ad-banner">
                        <span>Advertisement</span>
                    </div>
                </div>

                {/* New: Homestead Planner Tool CTA */}
                <section className="container" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1rem' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
                        borderRadius: '24px',
                        padding: '3rem',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        boxShadow: '0 20px 40px rgba(27, 94, 32, 0.2)'
                    }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem' }}>Planning Your Small Farm?</h2>
                            <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
                                Use our free <strong>Homestead Planner Tool</strong> to calculate exactly how much land, water, and budget you need for your Mini Cows, Chickens, and more.
                            </p>
                            <Link href="/tools/farm-calculator" style={{
                                display: 'inline-block',
                                background: 'white',
                                color: '#1b5e20',
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                fontWeight: '800',
                                textDecoration: 'none',
                                transition: 'transform 0.2s'
                            }} className="hover:scale-105">
                                Try the Tool for Free &raquo;
                            </Link>
                        </div>
                        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
                            <div style={{ fontSize: '5rem' }}>🚜</div>
                        </div>
                    </div>
                </section>

                {/* 5. Latest Articles (Updated) */}
                <section className="content-section">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '3px solid #2e7d32', paddingBottom: '0.5rem' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#222', margin: 0 }}>Latest Articles from Mini HCS</h2>
                        <Link href="/article/newest" style={{ color: '#2e7d32', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>See All &raquo;</Link>
                    </div>

                    <div className="az-grid">
                        {featuredArticles.map((article, index) => (
                            <Link href={article.link} key={index} className="az-card">
                                <div className="az-card-img">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="az-card-content">
                                    <h3 className="az-card-title">{article.title}</h3>
                                    <p className="az-card-text">{article.excerpt}</p>
                                    <span className="az-read-more">Read More &raquo;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 6. Quizzes Section */}
                <section className="content-section" style={{ marginTop: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '3px solid #d84315', paddingBottom: '0.5rem' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#222', margin: 0 }}>Quizzes for Fun</h2>
                        <Link href="/quizzes" style={{ color: '#d84315', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>See All &raquo;</Link>
                    </div>

                    <div className="az-grid">
                        {quizzes.map((quiz, index) => (
                            <Link href={quiz.link} key={index} className="az-card">
                                <div className="az-card-img">
                                    <Image
                                        src={quiz.image}
                                        alt={quiz.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div style={{
                                        position: 'absolute', top: '10px', left: '10px',
                                        background: '#d84315', color: 'white',
                                        padding: '4px 10px', borderRadius: '4px',
                                        fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase'
                                    }}>Quiz</div>
                                </div>
                                <div className="az-card-content">
                                    <h3 className="az-card-title">{quiz.title}</h3>
                                    <span className="az-read-more" style={{ color: '#d84315' }}>Play Now &raquo;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 7. FAQ / People Also Ask Section (SEO Boost) */}
                <section className="content-section" style={{ background: '#fff', padding: '5rem 1rem', borderTop: '1px solid #eee' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111' }}>Common Questions About Animals</h2>
                            <p style={{ color: '#666', fontSize: '1.2rem', marginTop: '0.5rem' }}>Helping you understand the animal kingdom, one question at a time.</p>
                        </div>

                        <div style={{ display: 'grid', gap: '30px' }}>
                            {[
                                {
                                    q: "What is the best animal for a small homestead?",
                                    a: "For small homesteads, Mini Highland cows, chickens, and dwarf goats are excellent choices. They require significantly less land than standard breeds and are generally easier to manage."
                                },
                                {
                                    q: "How many acres does a Mini Highland cow need?",
                                    a: "A Mini Highland cow typically needs about 0.5 to 1 acre of quality pasture. However, this varies based on your local climate and grass growth rates."
                                },
                                {
                                    q: "Are Mini Highland cows good pets?",
                                    a: "Yes! They are world-renowned for their docile, friendly, and social nature. They often develop strong bonds with their owners and are great for families with children."
                                },
                                {
                                    q: "What's the difference between a Cat and a Kitten?",
                                    a: "A kitten is a juvenile cat (usually under 1 year old). Kittens require more frequent feeding and social training, while adult cats are more independent and established in their behavior."
                                }
                            ].map((faq, idx) => (
                                <div key={idx} style={{ padding: '2rem', borderRadius: '16px', background: '#f9f9f9', borderLeft: '5px solid #2e7d32' }}>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '1rem', color: '#2e7d32' }}>{faq.q}</h3>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444', margin: 0 }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. A-Z Index Panel */}
                <section className="content-section" style={{
                    background: 'linear-gradient(135deg, #2e7d32 0%, #00c853 100%)',
                    padding: '4rem 2rem',
                    marginTop: '4rem',
                    color: 'white',
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(46, 125, 50, 0.25)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: 'white', fontWeight: '800' }}>Browse Animals A-Z</h2>
                        <p style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.2rem', opacity: 0.9 }}>Find your favorite animal by its first letter.</p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '1000px', margin: '0 auto' }}>
                            {azList.map((letter) => (
                                <Link href={`/az/${letter.toLowerCase()}`} key={letter} style={{
                                    width: '50px', height: '50px',
                                    background: 'rgba(255,255,255,0.15)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: '700', borderRadius: '12px', fontSize: '1.2rem',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                                }} className="hover:bg-white hover:text-green-800 hover:scale-110">
                                    {letter}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', bottom: '-20%', right: '-5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
