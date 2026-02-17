import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href: string;
}

export default function Breadcrumbs({ items, color = '#666' }: { items: BreadcrumbItem[], color?: string }) {
    return (
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px', color }}>
                <li>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:underline">Home</Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span>/</span>
                        {index === items.length - 1 ? (
                            <span style={{ fontWeight: 'bold' }}>{item.label}</span>
                        ) : (
                            <Link href={item.href} style={{ color: 'inherit', textDecoration: 'none' }} className="hover:underline">
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
