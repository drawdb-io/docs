import {createMDX} from 'fumadocs-mdx/next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

if (basePath && (!basePath.startsWith('/') || basePath.endsWith('/'))) {
  throw new Error(
    'NEXT_PUBLIC_BASE_PATH must start with "/" and must not end with "/".',
  );
}

/** @type {import('next').NextConfig} */
const config = {
  basePath,
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
  trailingSlash: false,
};

export default createMDX()(config);
