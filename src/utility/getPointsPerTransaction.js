import calculatePoints from "./calculatePoints";

export default function getPointsPerTransaction(transactions) {
  for(const transaction of transactions) {
    const points = calculatePoints(transaction.amount)
    transaction.points = points;
  }

  return transactions;
}