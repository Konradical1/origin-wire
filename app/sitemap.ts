import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://originwire.com'
  
  // Define all your static routes
  const routes = [
    '',
    '/services',
    '/portfolio',
    '/about',
    '/contact',
    '/book',
    '/portfolio/gh-cardetailing',
    '/portfolio/peaceful-path-massage',
    '/portfolio/jewels-and-jigsaws',
    '/portfolio/iec-studios',
  ]

  // Generate sitemap entries for each route
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
} 