import React from 'react';
import styles from './styles.module.css';

export default function Card({title, link, children}) {
  return (
    <a className={styles.card} href={link}>
      <div className={styles.card__title}>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          width={18}
          height={18}
          fill="currentColor">
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </div>
      <div className={styles.card__body}>{children}</div>
    </a>
  );
}
