import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Halo © Microsoft Corporation. Installation 00 was created under Microsoft’s{" "}
        <a href="https://www.xbox.com/en-US/developers/rules" className={styles.link}>
          “Game Content Usage Rules”
        </a>{" "}
        using assets from Halo Infinite, and it is not endorsed by or affiliated with Microsoft.
      </p>
    </footer>
  );
}
