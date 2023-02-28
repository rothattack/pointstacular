export default function getTransactionByMonthAndTotal(transactionsWithPoints) {
    const transactionByMonth = new Map();
    let total = 0;

    for(const transaction of transactionsWithPoints) {
      const monthValues = transactionByMonth.get(transaction.month) || [];
      monthValues.push(transaction);
      total += transaction.points;
      transactionByMonth.set(transaction.month, monthValues)
    }

    return { total, transactionByMonth };
}