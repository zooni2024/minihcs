import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header>


            {/* Main Header */}
            <div className="main-header">
                <div className="header-container">
                    {/* Logo Section */}
                    <Link href="/" className="logo-section">
                        <Image src="/logo_cute.svg" alt="Mini HCS Logo" width={180} height={60} style={{ objectFit: 'contain' }} />
                    </Link>

                    {/* Navigation - Desktop */}
                    <nav className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
                        <Link href="/category/mini-highland-cows">Mini Cows</Link>
                        <Link href="/category/cats">Cats</Link>
                        <Link href="/category/roosters">Roosters</Link>
                        <Link href="/category/cows">Cattle</Link>
                        <Link href="/animal-index" style={{ background: '#2e7d32', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none' }}>Animal Index</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
