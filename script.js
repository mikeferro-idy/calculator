function display(display_text = ''){
    if (display_text === '') display_text = '0';
    const display = document.querySelector('.display');
    display.textContent = display_text;
}

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a/b;

function operate (operator, a ,b) {
    if (operator === 'add') return add(a,b);
    if (operator === 'subtract') return subtract(a,b);
    if (operator === 'multiply') return multiply(a,b);
    if (operator === 'divide') return divide(a,b);
}

function calculator() {
    display();
    let value = '';
    let storedValue = 0;
    let storedOp ='';
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number'))
            {
                value += button.id;
                display(value);    
            }
            if (button.classList.contains('op')) 
            {   
                if( storedOp === ''){
                    if (value !== '')
                    storedValue = Number(value);
                    storedOp = button.id;
                    value = '';
                }
                else{
                    storedValue = operate(storedOp,storedValue, Number(value));
                    display(storedValue);
                    storedOp = button.id;
                    value = '';
                }
            }
            if (button.id === '=') {
                if( storedOp !== '' ) {
                    storedValue = operate(storedOp,storedValue, Number(value));
                    display(storedValue);
                    storedOp = '';
                    value = '';
                }
                
            }
            if (button.id === 'clear') {
                value = '';
                storedValue = 0;
                storedOp = '';
                display(value);
            }
            console.log('value: ',value,' stored: ',storedValue,' op: ',storedOp);
        });
    });
    
};

calculator();