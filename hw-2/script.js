let number1;
let number2;
let sum = 0;
do{
    number1 = Number(prompt("Введіть перше число"))
}while(!(number1===Math.round(number1)));

do{
    number2 = Number(prompt("Введіть друге число"))
}while(!(number2===Math.round(number2)));
let even = confirm('Чи пропускати парні числа?')


for (let i = number1;  i <= number2; i++){
    if(even){
        if (i % 2 == 0){
            continue
        }
    }
    sum = sum+ i;
}
if (sum==0){
    document.writeln("Суму не вдалося визначити")
} else document.writeln(sum);