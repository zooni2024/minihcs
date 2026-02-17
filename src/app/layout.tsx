import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'MiniHCS - Animal Encyclopedia, Fun Facts & Pet Care Guides',
        template: '%s | MiniHCS'
    },
    description: 'Explore MiniHCS, your ultimate animal encyclopedia. Discover fun facts, detailed breed guides for Mini Highland Cows, Cats, Roosters, and professional pet care advice.',
    keywords: ['animal encyclopedia', 'mini highland cows', 'pet care guides', 'animal fun facts', 'homestead animals', 'animal breeds'],
    icons: {
        icon: '/icon_v3.svg',
    },
    openGraph: {
        title: 'MiniHCS - Animal Encyclopedia & Professional Care Guides',
        description: 'Explore the amazing world of animals! From mini highland cows to domestic cats, get expert advice and fun facts.',
        url: 'https://minihcs.com',
        siteName: 'MiniHCS',
        images: [
            {
                url: '/mini_highland_cow_card.png',
                width: 1200,
                height: 630,
                alt: 'Mini Highland Cow - MiniHCS',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MiniHCS - Animal Encyclopedia & Guide',
        description: 'Explore the amazing world of animals! From mini highland cows to domestic cats.',
        images: ['/mini_highland_cow_card.png'],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MiniHCS',
    url: 'https://minihcs.com',
    logo: 'https://minihcs.com/logo.png',
    description: 'Explore the amazing world of animals! From mini highland cows to domestic cats, find habitats, characteristics, and care guides for various species.',
    sameAs: [
        'https://pinterest.com/minihcs', // Placeholder for actual socials
        'https://quora.com/profile/MiniHCS'
    ]
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
