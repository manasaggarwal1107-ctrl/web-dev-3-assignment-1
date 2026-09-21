const args = process.argv;

const operation = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);

function calculate(op, a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Invalid numbers provided";
  }

  switch (op) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      if (b === 0) {
        return "Cannot divide by zero";
      }
      return a / b;
    default:
      return "Invalid operation. Use add, sub, mul or div";
  }
}

const result = calculate(operation, num1, num2);
console.log("Result:", result);
