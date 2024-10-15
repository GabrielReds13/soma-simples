export async function sum(num1, num2) {
    try {
        // verify value
        if(num1 === null && num2 === null) {
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