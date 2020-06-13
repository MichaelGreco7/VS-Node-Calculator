function performMathOperation(num1, num2, op) {
  if (op === 'add') {
    return add(num1, num2);
  }

  if (op === 'subtract') {
    return subtract(num1, num2);
  }

  if (op === 'multiply') {
    return multiply(num1, num2);
  }

  if (op === 'divide') {
    return divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

module.exports = performMathOperation;
