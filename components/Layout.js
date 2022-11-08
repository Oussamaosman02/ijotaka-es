import Footer from "./Footer";
import Header from "./Header";
import styles from "@s/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <div className={styles.kali}>
        <h1>Nos importa tú página</h1>
        <h2>No la nuestra</h2>
      </div>
      <Footer />
    </>
  );
}
