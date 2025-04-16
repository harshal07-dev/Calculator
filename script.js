let input = document.getElementById('inputBox'); 
let buttons = document.querySelectorAll('button'); 
let string = "";  

let arr = Array.from(buttons); 

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;  

        if (value === '=') {
            evaluateExpression();
        } 
        else if (value === 'AC') {
            clearAll();
        } 
        else if (value === 'DEL') {
            deleteLastChar();
        } 
        else {
            handleInput(value);
        }
    });
});

function evaluateExpression() {
    try {
        let formattedString = string.replace('x', '*').replace('–', '-').replace('%', '/100');
        string = new Function('return ' + formattedString)(); 
        input.value = string; 
    } catch (e) {
        input.value = "Error"; 
        string = ""; 
    }
}

function clearAll() {
    string = "";
    input.value = string; 
}

function deleteLastChar() {
    string = string.substring(0, string.length - 1);  
    input.value = string;
}

function handleInput(value) {
    if (value === '.' && string.includes('.')) return;

    if (string === "" && ["+", "x", "÷", "–"].includes(value)) return;

    if (["+", "x", "/", "–"].includes(value) && ["+", "x", "/", "–"].includes(string.slice(-1))) return;

    string += value;
    input.value = string;  
}
