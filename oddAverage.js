function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  console.log(odds);
  let sum = 0;
  // @ts-ignore
  for (number of odds) {
    // @ts-ignore
    sum = sum + number;
  }
  const count = odds.length;
  console.log(sum);
  const average = sum / count;
  return average;
}
const numbers = [2, 8.3, 5, 8, 4, 9, 11, 12, 23, 16, 9, 3];
const avg = oddAverage(numbers);
console.log(avg);
