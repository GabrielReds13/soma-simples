// import
import { sum } from "./script/sum";

// elements
const resultSum = document.getElementById("result-sum");

const inputNum1 = document.getElementById("input-num1");
const inputNum2 = document.getElementById("input-num2");

const btnSubmit1 = document.getElementById("submit-1");
const btnSubmit2 = document.getElementById("submit-2");

async function sumNums() {
    alert("Oi")
    // resultSum.innerText = await sum(inputNum1.value, inputNum2.value);
}

btnSubmit1.addEventListener("click", () => {
    sumNums()
})