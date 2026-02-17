import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { featuredArticles, categoryData } from '@/data';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ArticlePage({ params }: { params: { slug: string } }) {
    // 1. Try to find in featured articles
    let article = featuredArticles.find(a => a.link.includes(params.slug));
    let isAdvice = false;

    // 2. If not found, search in category advice sections
    if (!article) {
        for (const catKey in categoryData) {
            const cat = categoryData[catKey];
            if (cat.advice) {
                const foundAdvice = cat.advice.find(a => a.link.includes(params.slug));
                if (foundAdvice) {
                    article = {
                        title: foundAdvice.title,
                        link: foundAdvice.link,
                        image: '/cat_nature_hd.png', // Generic fallback for advice
                        excerpt: 'Expert veterinary advice for your feline friend.'
                    };
                    isAdvice = true;
                    break;
                }
            }
        }
    }

    // 3. Fallback
    if (!article) {
        article = featuredArticles[0];
    }

    // Simulating generated content for the article body
    const content = isAdvice ? [
        "This is a comprehensive guide on this health topic. We are currently updating our database with the latest veterinary protocols.",
        "Please check back soon for detailed symptoms, treatments, and prevention strategies.",
        "Always consult your veterinarian for specific medical advice."
    ] : [
        "Animals are fascinating creatures that inhabit every corner of our planet. From the deepest oceans to the highest mountains, life thrives in diverse forms.",
        "Understanding their behaviors, habitats, and distinct characteristics helps us appreciate the complexity of nature and the importance of conservation.",
        "In this article, we explore the unique traits that define this species and how they survive in the wild.",
        "Stay tuned for more in-depth facts, scientific classifications, and amazing pictures."
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>
                <article className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                    <Breadcrumbs items={[
                        { label: 'Articles', href: '/article/newest' },
                        { label: article.title, href: '#' }
                    ]} />
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{article.title}</h1>
                    <div style={{ display: 'flex', gap: '1rem', color: '#666', marginBottom: '2rem' }}>
                        <span>Published: Jan 12, 2026</span>
                        <span>•</span>
                        <span>By MiniHCS Team</span>
                    </div>

                    <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: '16px', overflow: 'hidden' }}>
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>

                    <div className="article-body" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>{article.excerpt}</p>
                        {content.map((paragraph, index) => (
                            <p key={index} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Read Next</h3>
                        <div className="featured-grid">
                            {featuredArticles.filter(a => a !== article).slice(0, 2).map((nextArticle, idx) => (
                                <Link href={nextArticle.link} key={idx} className="article-card">
                                    <div style={{ position: 'relative', height: '180px' }}>
                                        <Image src={nextArticle.image} alt={nextArticle.title} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="article-content">
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{nextArticle.title}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
