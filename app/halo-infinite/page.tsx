import Link from "next/link";
import styles from "./page.module.css";

export default function HaloInfinitePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Halo Infinite</h1>
      <Link href="/" className={styles.link}>
        Back home
      </Link>
    </main>
  );
}
