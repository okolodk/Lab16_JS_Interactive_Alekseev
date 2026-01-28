const display = document.getElementById("dispaly");
const buttons = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === "C") {
            expression = "";
            display.value = "";
            return;
        }
        if (value === "=") {
            try {
                expression = eval(expression);
                display.value = expression;

            }catch {
                display.value = "Erorr";
                expression = "";
            }
            return;
        }
        expression += value;
        display.value = expression;
    });
});