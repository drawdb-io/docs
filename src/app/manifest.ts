import {absoluteUrl} from '@/lib/site';
import type {MetadataRoute} from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'drawDB Documentation',
    short_name: 'drawDB Docs',
    description:
      'Documentation for drawDB diagrams, Pro cloud collaboration, AI, API keys, and MCP.',
    start_url: absoluteUrl('/'),
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#0a83c0',
    icons: [
      {
        src: absoluteUrl('/img/logo.png'),
        sizes: '240x235',
        type: 'image/png',
      },
    ],
  };
}
