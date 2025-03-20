console.log("Debugging");

function calculateSum(arr) {
  debugger;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const total = calculateSum(numbers);
console.log("Total", total);

const x = 10;
if (x == 5) {
  console.log("x is equal to 5");
} else {
  console.log("x is not equal to 5");
}
