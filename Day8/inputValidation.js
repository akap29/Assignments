let input;
do {
  input = prompt("Enter a number between 1 and 10:");
  input = parseInt(input);
} while (isNaN(input) || input < 1 || input > 10);
console.log("You entered a valid number:", input);