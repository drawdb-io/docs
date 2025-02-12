import React from 'react';
import styles from './styles.module.css';

export default function Card({title, link, children}) {
  return (
    <a className={styles.card} href={link}>
      <div className={styles.card__title}>{title}</div>
      <div className={styles.card__body}>{children}</div>
    </a>
  );
}
