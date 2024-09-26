import React from 'react';
import styles from './styles.module.css';

export default function Flex({children}) {
  return (
    <div className={styles.flex}>
      {React.Children.map(children, (child) => (
        <div className={styles.flex__item}>{child}</div>
      ))}
    </div>
  );
}
