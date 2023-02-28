import { useEffect, useState } from "react";
import TotalRewards from "./components/TotalBlock/TotalBlock";
import fetchTransactions from "./services/fetchTransactions";
import MonthBlock from "./components/MonthBlock/MonthBlock";
import LoadBar from "./components/LoadBar/LoadBar";
import getPointsPerTransaction from "./utility/getPointsPerTransaction";
import getTransactionByMonthAndTotal from "./utility/getTransactionByMonthAndTotal";

function App() {
  const [monthBlocks, setMonthBlock] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    // simulate latency with setTimeout
    setTimeout(() => {
      fetchTransactions()
        .then(getPointsPerTransaction)
        .then(getTransactionByMonthAndTotal)
        .then(({ total, transactionByMonth }) => {
          const blocks = Array.from(transactionByMonth).map(([month, transactions]) => (
            <MonthBlock key={month} month={month} transactions={transactions} />
          ));

          setMonthBlock(blocks);
          setTotalPoints(total);
        });
    }, 1000);
  }, []);

  return (
    <div className="vertical align center">
      <TotalRewards total={totalPoints} />
      <section className="container">
        {monthBlocks}
        <LoadBar show={!monthBlocks.length} />
        <LoadBar show={!monthBlocks.length} />
        <LoadBar show={!monthBlocks.length} />
      </section>
    </div>
  );
}

export default App;
