import Link from "next/link";
import styles from "./page.module.css";

const GOALS = [
  "Preserve every Halo game’s interface, from menus and HUDs to colors, type and references, for future players and game designers.",
  "Understand why gamers fall in love with specific game menu designs and have such divisive opinions on others.",
  "Explore how to recreate these designs in React.",
];

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Installation 00</h1>
        <p className={styles.tagline}>An unofficial foundry and archive of Halo interfaces.</p>
      </header>
      <section aria-labelledby="goals-heading" className={styles.goals}>
        <h2 id="goals-heading" className={styles.goalsHeading}>
          Goals
        </h2>
        <ol className={styles.goalList}>
          {GOALS.map((goal, index) => (
            <li key={goal} className={styles.goal}>
              <span className={styles.goalNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span>{goal}</span>
            </li>
          ))}
        </ol>
        <p className={styles.note}>
          Starting with{" "}
          <Link href="/halo-infinite" className={styles.link}>
            Halo Infinite
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
