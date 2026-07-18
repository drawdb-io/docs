export const appName = 'drawDB Docs';
export const appDescription =
  'Learn drawDB database diagramming, cloud workspaces, sharing, collaboration, AI assistance, API keys, and MCP integration.';

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://drawdb-io.github.io/docs'
).replace(/\/$/, '');

export const gitConfig = {
  branch: 'main',
  repo: 'docs',
  user: 'drawdb-io',
};

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.startsWith('/') ? path : '/' + path;
}

export function withBasePath(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return basePath + normalizePath(path);
}

export function absoluteUrl(path = '/'): string {
  const normalized = normalizePath(path);
  return normalized === '/' ? siteUrl + '/' : siteUrl + normalized;
}
