import styles from '@s/header.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>IJotaKa</title>
        <meta name='description' content='Agencia de creación digital' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <h1>
          IJK<span>A</span>
        </h1>
        <div>
          <h3
            className={
              router.pathname === '/us' ? styles.active : styles.inactive
            }
          >
            <Link href='/us'>
              <a>Nosotros</a>
            </Link>
          </h3>
          <h3
            className={
              router.pathname === '/' ? styles.active : styles.inactive
            }
          >
            <Link href='/'>
              <a>
                Tu agencia
                <span> web</span>
              </a>
            </Link>
          </h3>
          <h3
            className={
              router.pathname === '/made' ? styles.active : styles.inactive
            }
          >
            <Link href='/made'>
              <a>Clientes</a>
            </Link>
          </h3>
        </div>
      </header>
    </>
  );
}
