import styles from "./Points.module.css";

export default function Points({ value = 0 }) {
  return <section className={`${styles.container} vertical`}>
    <span>{value.toLocaleString()}</span>
    <span className={styles.points}>Points</span>
  </section>
}