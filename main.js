const buttons = document.querySelectorAll('.button');
const display = document.getElementById('display');


buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        const buttonText = button.textContent;

        display.value += buttonText;
       
        });
} );


const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
});


