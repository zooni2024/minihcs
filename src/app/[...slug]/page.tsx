import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GenericPage({ params }: { params: { slug: string[] } }) {
    const title = params.slug[params.slug.length - 1];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1, padding: '4rem 1rem' }} className="container">
                <h1 style={{ textTransform: 'capitalize' }}>{title.replace(/-/g, ' ')}</h1>
                <p>Content for {title} goes here.</p>
            </main>
            <Footer />
        </div>
    );
}
