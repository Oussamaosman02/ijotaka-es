import styles from "@s/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>
        IJotaK<span className={styles.gold}>Agency</span>
      </h1>
      <h2>
        Agencia <span className={styles.gold}>web</span> internacional
      </h2>
      <div>
        <span>&copy;2021</span>
        <a href="https://ijotaka.com" target="_blank" rel="noopener noreferrer">
          ijotak<span className={styles.gold}>a</span>.com
        </a>
      </div>
      <h4>
        <Link href="mailto:info@ijotaka.com">
          <a>Email</a>
        </Link>
      </h4>
    </footer>
  );
}
