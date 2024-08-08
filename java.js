const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentOperand = '';
let previousOperand = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentOperand = '';
      previousOperand = '';
      operator = '';
      display.value = '';
    } else if (value === '=') {
      calculate();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      operator = value;
      previousOperand = currentOperand;
      currentOperand = '';
    } else if (value === '.') {
      if (!currentOperand.includes('.')) {
        currentOperand += value;
        display.value = currentOperand;
      }
    } else {
      currentOperand += value;
      display.value = currentOperand;
    }
  });
});

function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator)   
 {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;   

  }

  currentOperand = result.toString();   

  display.value = currentOperand;
  previousOperand = '';
  operator = '';
}