const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Starting the app");

const numbers = [3, 8, 15, 22, 41, 50];

numbers.forEach((num) => {
  if (isEven(num)) {
    log(`${num} is Even`);
  } else {
    log(`${num} is Odd`);
  }
});

log("App finished running");
