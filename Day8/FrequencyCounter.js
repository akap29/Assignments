let nums = [1, 2, 2, 3, 4, 4, 4, 5];
let freq = {};
for (let num of nums) {
  freq[num] = (freq[num] || 0) + 1;
}
console.log("Frequency count:", freq);