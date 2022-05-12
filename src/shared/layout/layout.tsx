import React from 'react';

import { Header } from '../components/Header';
import styles from './layout.module.scss';

export const Layout: React.FC<any> = ({ children }): any => {
  return (
    <>
      <Header />
      <main className={styles.root}>{children}</main>
    </>
  );
};
