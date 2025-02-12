import React from 'react';
import styles from './styles.module.css';

export default function FAQ({header, children}) {
  return (
    <div className={styles.faq}>
      <div className={styles.faq__header}>
        <div className={styles.faq__char}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={24}
            height={24}
            fill="currentColor">
            <path d="M64 256c0 88.4 71.6 160 160 160c28.9 0 56-7.7 79.4-21.1l-72-86.4c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l70.9 85.1C371.9 325.8 384 292.3 384 256c0-88.4-71.6-160-160-160S64 167.6 64 256zM344.9 444.6C310 467 268.5 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 56.1-20.6 107.4-54.7 146.7l47.3 56.8c11.3 13.6 9.5 33.8-4.1 45.1s-33.8 9.5-45.1-4.1l-46.6-55.9z" />
          </svg>
          :
        </div>
        <div className={styles.faq__header__text}>{header}</div>
      </div>
      <div className={styles.faq__body}>
        <div className={styles.faq__char}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width={24}
            height={24}
            fill="currentColor">
            <path d="M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384l197.3 0 31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM264 320l-144 0 72-172.8L264 320z" />
          </svg>
          :
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
