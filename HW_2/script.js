
// 1
var a = 5;
var b, c;

b = (a * 5);

b = (c = b / 2);

// Дужка після с чи взгалі без них, відповтдь буде незмінна

// b = c = (b / 2);
// b = c = b / 2;

console.log(a, b, c)

// 2
let dateOfBirth = prompt('Скільки вам років?');
dateOfBirth = parseFloat(dateOfBirth)
let yearOfBirth = alert(`Ваш рік народження ${new Date().getFullYear() - dateOfBirth}`)



// 3
let celsius = prompt('Скільки теимпература в Цельсіях?');
celsius = parseFloat(celsius)

let fahrenheit = alert(`Температура в Цельсіях ${celsius} ℃
Температура у Фаренгейтах ${celsius * 1.8000 + 32.00} ℉`)



// 4


function returnMathFloor() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let divideElement = document.getElementById("divide");
    const result = Math.floor(num1 / num2);
    divideElement.value = result;
}



// 5
const rate = 36.7;
const UAH = prompt('Курс USD/UAH 36,7');
let currency = alert(`${(UAH * rate).toFixed(2)} ₴`)