import { useEffect, useState } from "react";
import Points from "../Points/Points";
import styles from "./MonthBlock.module.css";

export default function MonthBlock({month = "January", transactions = []}) {
  const [totalPoints, setTotalPoints] = useState(0);
  const [transactBlocks, setTransactionBlocks] = useState([]);
  
  useEffect(() => {
    let total = 0;
    const blocks = transactions.map(({id, amount, points}) => {
      total += points;
      return <div className={`${styles.amount} container horizontal align center space-between`} key={id}>
        $ {amount.toLocaleString()}
        <Points value={points} />
      </div>
    });

    setTransactionBlocks(blocks);
    setTotalPoints(total);
  }, [transactions])
  

  return <div className={`${styles.block} vertical align center`}>
    <div className={`${styles.month} container horizontal space-between`}>
      <h3>{month}</h3>
      <Points value={totalPoints} />
    </div>
    <div className="container vertical">
      {transactBlocks}
    </div>
  </div>
}