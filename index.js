let firstNumber = +prompt('Enter first number');
let operation = prompt('What operation should be performed?');
let secNumber = +prompt('Enter second number');

if (operation === '+' || operation === 'plus' || operation === 'PLUS') {
    alert(firstNumber + secNumber);
} else if (operation === '-' || operation === 'minus' || operation === 'MINUS') {
    alert(firstNumber - secNumber);
} else if (operation === '*' || operation === 'multiplication' || operation === 'MULTIPLICATION') {
    alert( firstNumber * secNumber);
} else if (operation === '/' || operation === 'division' || operation === 'DIVISION') {
    alert(firstNumber / secNumber);
} else if (operation === '**' || operation === 'exponentiation') {
    alert(firstNumber ** secNumber);
} else {
    alert('ERROR')
}