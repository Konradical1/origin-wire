import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://originwire.com'
  
  // Define all your static routes with their priorities
  const routes = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/services',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/portfolio',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/about',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/contact',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/book',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/portfolio/gh-cardetailing',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/portfolio/peaceful-path-massage',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/portfolio/jewels-and-jigsaws',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/portfolio/iec-studios',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
  ]

  // Generate sitemap entries for each route
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
} 