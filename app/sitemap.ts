import type { MetadataRoute } from 'next';
import { tours } from '@/lib/data';
import { destinations } from '@/lib/places';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const publicPaths = [
    '', '/destinations', '/ramayana-trail', '/packages', '/about', '/contact', '/photo-credits',
    ...destinations.map((place) => `/destinations/${place.id}`),
    ...tours.map((tour) => `/packages/${tour.slug}`),
  ];
  return publicPaths.map((path) => ({ url: siteUrl + path, priority: path ? 0.7 : 1 }));
}
