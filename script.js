const display = document.querySelector(".display"); 
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

            if (value === "AC") {
            currentInput = "";
            display.innerText = "0";
            return;
        }

            if (value === "DEL") {
            currentInput = currentInput.slice(0, -1);
            display.innerText = currentInput || "0";
            return;
        }

        if (value === "=") {
            try {
                currentInput = eval(
                    currentInput
                        .replace("×", "*")
                        .replace("÷", "/")
                        .replace("−", "-")
                ).toString();

                display.innerText = currentInput;
                resultDisplayed = true;
            } catch {
                display.innerText = "Error";
                currentInput = "";
            }
            return;
        }

        const operators = ["+", "-", "*", "/", "×", "÷", "−"];
        const lastChar = currentInput.slice(-1);

        if (operators.includes(value) && operators.includes(lastChar)) {
            return;
        }

        if (value === "×") currentInput += "*";
        else if (value === "÷") currentInput += "/";
        else if (value === "−") currentInput += "-";
        else currentInput += value;

        display.innerText = currentInput;
    });
});
