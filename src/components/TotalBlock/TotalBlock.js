import Points from "../Points/Points";
import styles from "./TotalBlock.module.css"

export default function TotalRewards({ total = 0 }) {
  return <div className="container horizontal align center space-between">
      <h2 className={styles.brand}>Total Rewards</h2>
      <Points value={total} />
    </div>
}