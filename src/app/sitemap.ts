import { MetadataRoute } from 'next'
import { featuredArticles, animalClasses, slideshows, quizzes } from '@/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://minihcs.com'

    // Standard pages
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/accessibility',
        '/cookies',
        '/editorial-policy',
        '/tools/farm-calculator',
        '/az',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Category pages
    const categoryPages = animalClasses.map((cat) => ({
        url: `${baseUrl}${cat.link}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Article pages
    const articlePages = featuredArticles.map((article) => ({
        url: `${baseUrl}${article.link}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Slideshow pages
    const slideshowPages = slideshows.map((slide) => ({
        url: `${baseUrl}${slide.link}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Quiz pages
    const quizPages = quizzes.map((quiz) => ({
        url: `${baseUrl}${quiz.link}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [
        ...staticPages,
        ...categoryPages,
        ...articlePages,
        ...slideshowPages,
        ...quizPages,
    ]
}
