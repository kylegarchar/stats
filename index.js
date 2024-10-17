let userInput = prompt(`input numbers separated by comma`);
let stringArray = userInput.split(",");
let numArray = stringArray.map(Number);

function getLength(arr) {
  return arr.length;
}
function getSum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
} numMean = function getMean(arr) {
  return getSum(arr) / getLength(arr);
}
function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function getRange(arr) {
  return getMax(arr) - getMin(arr);
}
function getEvens(arr) {
  return arr.filter(num => num % 2 === 0);
}

function getOdds(arr) {
  return arr.filter(num => num % 2 !== 0);
}

const numLength = getLength(numArray);
const numSum = getSum(numArray);
const numMin = getMin(numArray);
const numMax = getMax(numArray);
const numRange = getRange(numArray);
const numEvens = getEvens(numArray);
const numOdds = getOdds(numArray);

console.log("Length:", numLength);
console.log("Sum:", numSum);
console.log("Min:", numMin);
console.log("Max:", numMax);
console.log("Range:", numRange);
console.log("Evens:", numEvens);
console.log("Odds:", numOdds);