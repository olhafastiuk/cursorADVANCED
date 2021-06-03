function calculateSum(firstNumber, secondNumber, oddOnly)
{
    let sum = null;
    let num1 = Math.min(firstNumber, secondNumber);
    let num2 = Math.max(firstNumber, secondNumber);

    for (let i = num1;  i <= num2; i++) {
        if (oddOnly.checked && (i % 2 == 0)) {
            continue
        }
        sum = sum + i;
    }

    return sum;
}

document.forms.publish.onsubmit = function()
{
    const number1 = Number(document.getElementById('number1').value);
    const number2 = Number(document.getElementById('number2').value);
    const oddOnly = document.getElementById('checkbox');
    let resultContainer = document.querySelector(".result");
    let sum = calculateSum(number1, number2, oddOnly);
    
    if (sum === null) {
        resultContainer.innerHTML = `<p>Суму не вдалося визначити</p>`;
    } else {
        resultContainer.innerHTML = `<p> Сума чисел в заданому проміжку: <p class="sum"> ${sum}</p>`;
    }
    
    return false;
}   