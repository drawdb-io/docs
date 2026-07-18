import {docs} from 'collections/server';
import {loader} from 'fumadocs-core/source';
import {absoluteUrl} from './site';

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  url(slugs) {
    return slugs.length === 0 ? '/' : '/' + slugs.join('/');
  },
});

export async function getLLMText(
  page: (typeof source)['$inferPage'],
): Promise<string> {
  const processed = await page.data.getText('processed');
  return (
    '# ' +
    page.data.title +
    ' (' +
    absoluteUrl(page.url) +
    ')\n\n' +
    processed
  );
}
