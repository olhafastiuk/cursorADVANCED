function res(num1, num2){
    let sum = 0;
    let even = document.getElementById('even');
    for (let i = num1;  i <= num2; i++){
        if(even.checked){
            if (i % 2 == 0){
                continue
            }
        }
        sum = sum+ i;
    }
    if (sum==0){
        document.querySelector(".result").innerHTML = `<p>Суму не вдалося визначити</p>`;
    } else document.querySelector(".result").innerHTML = `<p> Сума чисел від ${num1} до ${num2}: <p class="sum"> ${sum}</p>`;
    return sum;
}

document.forms.publish.onsubmit = function() {
    let number1 = Number(document.getElementById('number1').value);
    let number2 = +document.getElementById('number2').value;
    console.log(number1, number2);
    console.log(res(number1, number2));
    return false;
};
// do{
//     number1 = Number(prompt("Введіть перше число"))
// }while(!(number1===Math.round(number1)));

// do{
//     number2 = Number(prompt("Введіть друге число"))
// }while(!(number2===Math.round(number2)));
// let even = confirm('Чи пропускати парні числа?')


