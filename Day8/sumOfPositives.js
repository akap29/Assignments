let numbers = [-2, 3, 7, -1, 5, -8];
let positiveSum = 0;
for (let n of numbers) {
  if (n > 0) positiveSum += n;
}
console.log("Sum of positive numbers:", positiveSum);