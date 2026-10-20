import React from "react";
import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.app}>
      <aside className={styles.nav}>
        <p>Halo Infinite</p>
        <div className={styles.navItem}>Foundations</div>
        <div className={styles.navItem}>Components</div>
        <div className={styles.navItem}>Reticules</div>
        <div className={styles.navItem}>HUD</div>
      </aside>
      <main>{children}</main>
    </div>
  );
}
