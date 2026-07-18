import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import {gitConfig, withBasePath} from './site';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="drawdb-brand">
          <Image
            src={withBasePath('/img/logo.png')}
            alt=""
            width={28}
            height={28}
            unoptimized
          />
          <span>
            drawDB <span className="drawdb-brand__suffix">Docs</span>
          </span>
        </span>
      ),
      url: '/',
    },
    links: [
      {
        text: 'Open editor',
        url: 'https://www.drawdb.app/editor',
        secondary: true,
      },
    ],
    githubUrl:
      'https://github.com/' + gitConfig.user + '/' + gitConfig.repo,
  };
}
