import type { MetadataRoute } from 'next'
import { urlSite } from '@/content/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${urlSite}/sitemap.xml`,
  }
}
