let display = document.getElementById('calculatorDisplay');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculateResult();
    }
});

/* This is the calculator code for after Calculator Part 2 - Separation of Concerns */
function setupCalculatorButtons() {
    var buttons = document.getElementsByClassName("calculatorButton");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var buttonText = this.innerText;
            if (buttonText === "C") {
                clearDisplay();
            } else if (buttonText === "=") {
                calculateResult();
            } else {
                appendToDisplay(buttonText);
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setupCalculatorButtons();
});