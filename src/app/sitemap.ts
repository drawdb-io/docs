import {absoluteUrl} from '@/lib/site';
import {source} from '@/lib/source';
import type {MetadataRoute} from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => ({
    url: absoluteUrl(page.url),
    changeFrequency: 'monthly',
    priority: page.url === '/' ? 1 : 0.8,
  }));
}
