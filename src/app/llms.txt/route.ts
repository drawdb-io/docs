import {absoluteUrl} from '@/lib/site';
import {source} from '@/lib/source';

export const revalidate = false;

export function GET() {
  const pages = source
    .getPages()
    .map(
      (page) =>
        '- [' +
        page.data.title +
        '](' +
        absoluteUrl(page.url) +
        '): ' +
        (page.data.description ?? ''),
    )
    .join('\n');

  return new Response(
    '# drawDB Documentation\n\n' +
      'Documentation for the drawDB database diagram editor, drawDB Pro cloud workflows, and the read-only drawDB MCP integration.\n\n' +
      pages +
      '\n',
    {headers: {'Content-Type': 'text/plain; charset=utf-8'}},
  );
}
