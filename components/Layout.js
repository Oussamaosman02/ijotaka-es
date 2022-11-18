import Footer from './Footer'
import Header from './Header'
import styles from '@s/layout.module.css'

export default function Layout ({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
