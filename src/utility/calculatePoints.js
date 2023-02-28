export default function calculatePoints(amount, points = 0) {
  const dblPoints = amount - 100;
  if(dblPoints > 0) {
    return calculatePoints(amount - dblPoints, points + dblPoints * 2);
  }

  const snglPoints = amount - 50;
  if(snglPoints > 0) {
    return calculatePoints(amount - snglPoints, points + snglPoints);
  }

  return points;
}