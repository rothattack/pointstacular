import styles from "./LoadBar.module.css";

export default function LoadBar({ show = false }) {
  return <>{show && <div className={styles.loadbar} />}</>
}