
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

import { MainLayout } from '../components/layout/MainLayout';

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <h1 className={styles.title}>
          Ir a <Link href="/about">About</Link>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '};
          <code className={styles.code}>src/pages/index.jsx</code>
        </p>

      </MainLayout>
    </>
  )
}
