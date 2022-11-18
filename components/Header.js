import styles from '@s/header.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header () {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>IJKA</title>
        <meta name='description' content='Agencia de creación digital' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='viewport-fit=cover' />
        <meta name='viewport' content='width=device-width' />
      </Head>
      <header className={styles.header}>
        <h1>
          IJK<span>A</span>
        </h1>
        <div>
          <h3
            className={
              router.pathname === '/tecnologias' ? styles.active : styles.inactive
            }
          >
            <Link href='/tecnologias'>
              <a>Tools</a>
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
              router.pathname === '/clientes' ? styles.active : styles.inactive
            }
          >
            <Link href='/clientes'>
              <a>Clientes</a>
            </Link>
          </h3>
        </div>
      </header>
    </>
  )
}
