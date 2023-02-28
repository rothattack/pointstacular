export default async function fetchTransactions() {
  const response = await fetch("/data.json");
  
  return await response.json();
}