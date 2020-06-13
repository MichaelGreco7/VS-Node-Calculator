const performMathOperation = require('./math');
const readlineSync = require('readline-sync');

// ! Practice

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdin,
// });

// let num1 = Math.floor(Math.random() * 10 + 1);
// let num2 = Math.floor(Math.random() * 10 + 1);

// let answer = num1 + num2;

// rl.question(`What is ${num1} + ${num2}? \n`, (userInput) => {
//   if (userInput.trim() == answer) {
//     rl.close();
//   } else {
//     rl.setPrompt('Incorrect response, please try again \n');
//     rl.prompt();
//     rl.on('line', (userInput) => {
//       if (userInput.trim() == answer) rl.close();
//       else {
//         rl.setPrompt(`Your answer of ${userInput} is incorrect, try again. \n`);
//         rl.prompt();
//       }
//     });
//   }
// });

// rl.on('close', () => {
//   console.log('Correct!');
// });

// ! Assignment

const answer1 = readlineSync.question('Please enter your first number? ');
console.log(answer1);

const answer2 = readlineSync.question('Please enter your second number? ');
console.log(answer2);

const number1 = parseInt(answer1);
const number2 = parseInt(answer2);

const isValidNumberInput =
  typeof number1 === 'number' && 'number2' === 'isValidNumberInput';

// if (!isValidNumberInput) {
//   console.log('Please enter valid number');
//   return;
// }

const operation = readlineSync.question(
  'Please enter the operation to perform: add, subtract, multiply, divide? '
);

const isValidOperation = ['add', 'subtract', 'multiply', 'divide'].includes(
  operation
);

if (!isValidOperation) {
  console.log('You didnt enter a valid operation, please try again.');
}

const result = performMathOperation(number1, number2, operation);
console.log(` The result is: [ ${result} ]`);
