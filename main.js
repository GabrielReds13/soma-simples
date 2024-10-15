// elements
const resultSum = document.getElementById("result-sum");

const inputNum1 = document.getElementById("input-num1");
const inputNum2 = document.getElementById("input-num2");

// code
async function sum(num1, num2) {
    try {
        // verify value
        if(num1 && num2) {
            // convert to num
            num1 = Number(num1);
            num2 = Number(num2);

            // verify if num is not a number
            if (isNaN(num1) === false && isNaN(num2) === false) {
                // result
                return `Resultado: ${num1 + num2}`;
            } return "Só é possível somar números."
        } else return "Verifique se os campos estão preenchidos."
    } catch (error) {
        // error message
        return "Erro ao somar os números.";
    }
}

// set result
async function sumNums() {
    resultSum.innerText = await sum(inputNum1.value, inputNum2.value);
}

// clear all fields
async function clearFields() {
    resultSum.innerText = "Escolha e some números.";
    inputNum1.value = ""; 
    inputNum2.value = "";
}

