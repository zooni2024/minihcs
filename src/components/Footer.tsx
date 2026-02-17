import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="az-footer">
            <div className="footer-container">
                {/* Column 1: Core Content */}
                <div className="footer-col">
                    <h4>Explore Animals</h4>
                    <ul>
                        <li><Link href="/category/mini-highland-cows">Mini Highland Cows</Link></li>
                        <li><Link href="/category/cats">Domestic Cats</Link></li>
                        <li><Link href="/category/roosters">Roosters & Poultry</Link></li>
                        <li><Link href="/category/cows">Cattle Breeds</Link></li>
                        <li><Link href="/animals/mammals">Mammals</Link></li>
                    </ul>
                </div>

                {/* Column 2: Discover */}
                <div className="footer-col">
                    <h4>Discover</h4>
                    <ul>
                        <li><Link href="/article/newest">Newest Articles</Link></li>
                        <li><Link href="/tools/farm-calculator">Homestead Planner</Link></li>
                        <li><Link href="/fun-facts">Fun Facts</Link></li>
                        <li><Link href="/endangered">Endangered Species</Link></li>
                    </ul>
                </div>

                {/* Column 3: Company */}
                <div className="footer-col">
                    <h4>Mini HCS</h4>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/write-for-us">Write for Us</Link></li>
                        <li><Link href="/editorial-policy">Editorial Policy</Link></li>
                    </ul>
                </div>

                {/* Column 4: Legal */}
                <div className="footer-col">
                    <h4>Legal & Policy</h4>
                    <ul>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                        <li><Link href="/terms">Terms of Service</Link></li>
                        <li><Link href="/cookies">Cookie Policy</Link></li>
                        <li><Link href="/accessibility">Accessibility</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Mini HCS. All rights reserved.</p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    The trusted source for animal information. Google AdSense Approved.
                </p>
            </div>
        </footer>
    );
}
