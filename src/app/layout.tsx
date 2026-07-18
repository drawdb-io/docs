import {Provider} from '@/components/provider';
import {
  absoluteUrl,
  appDescription,
  appName,
  siteUrl,
  withBasePath,
} from '@/lib/site';
import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl + '/'),
  title: {
    default: appName,
    template: '%s | drawDB Docs',
  },
  description: appDescription,
  applicationName: appName,
  authors: [{name: 'drawDB'}],
  creator: 'drawDB',
  keywords: [
    'database diagram',
    'ER diagram',
    'database schema',
    'SQL diagram',
    'drawDB',
    'drawDB Pro',
    'database collaboration',
    'AI schema assistant',
    'Model Context Protocol',
    'database MCP server',
  ],
  alternates: {
    canonical: siteUrl + '/',
  },
  icons: {
    icon: withBasePath('/img/favicon.ico'),
  },
  openGraph: {
    type: 'website',
    title: appName,
    description: appDescription,
    url: siteUrl + '/',
    siteName: appName,
    images: [
      {
        url: absoluteUrl('/og-pro.png'),
        width: 1200,
        height: 630,
        alt: 'drawDB documentation for the editor, Pro, and MCP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: appName,
    description: appDescription,
    images: [absoluteUrl('/og-pro.png')],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: appName,
  description: appDescription,
  url: siteUrl + '/',
  publisher: {
    '@type': 'Organization',
    name: 'drawDB',
    url: 'https://www.drawdb.app',
    logo: absoluteUrl('/img/logo.png'),
  },
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
