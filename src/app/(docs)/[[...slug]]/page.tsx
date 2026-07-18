import {getMDXComponents} from '@/components/mdx';
import {absoluteUrl, appName} from '@/lib/site';
import {source} from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import {createRelativeLink} from 'fumadocs-ui/mdx';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

type PageProperties = {
  params: Promise<{slug?: string[]}>;
};

function breadcrumbJsonLd(
  page: NonNullable<ReturnType<typeof source.getPage>>,
) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: appName,
      item: absoluteUrl('/'),
    },
    ...page.slugs.map((slug, index) => {
      const isCurrent = index === page.slugs.length - 1;
      const name = isCurrent
        ? page.data.title
        : slug
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');

      return {
        '@type': 'ListItem',
        position: index + 2,
        name,
        item: absoluteUrl('/' + page.slugs.slice(0, index + 1).join('/')),
      };
    }),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export default async function Page({params}: PageProperties) {
  const {slug} = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(page)).replace(
            /</g,
            '\\u003c',
          ),
        }}
      />
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description ? (
        <DocsDescription>{page.data.description}</DocsDescription>
      ) : null}
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: PageProperties): Promise<Metadata> {
  const {slug} = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const description = page.data.description ?? 'drawDB documentation';
  const url = absoluteUrl(page.url);
  const image = absoluteUrl('/og-pro.png');

  return {
    title: page.data.title,
    description,
    alternates: {canonical: url},
    openGraph: {
      type: 'article',
      title: page.data.title,
      description,
      url,
      siteName: appName,
      images: [{url: image, width: 1200, height: 630}],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description,
      images: [image],
    },
  };
}
