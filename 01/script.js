
// assign: evaluation
var a = 5;
var b, c;

b = (a * 5);

b = (c = b / 2);

// Дужка після с чи взгалі без них, відповтдь буде незмінна

// b = c = (b / 2);
// b = c = b / 2;

console.log(a, b, c)

// Number: age
let dateOfBirth = prompt('Скільки вам років?');
dateOfBirth = parseFloat(dateOfBirth)
let yearOfBirth = alert(`Ваш рік народження ${new Date().getFullYear() - dateOfBirth}`)

// Number: temperature
let celsius = prompt('Скільки теимпература в Цельсіях?');
celsius = parseFloat(celsius)

let fahrenheit = alert(`Температура в Цельсіях ${celsius} ℃
Температура у Фаренгейтах ${celsius * 1.8000 + 32.00} ℉`)


// Number: divide

function returnMathFloor() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let divideElement = document.getElementById("divide");
    const result = Math.floor(num1 / num2);
    divideElement.value = result;
}


// Number: currency
const rate = 36.7;
const UAH = prompt('Курс USD/UAH 36,7');
let currency = alert(`${(UAH * rate).toFixed(2)} ₴`)


// Number: RGB
const rgbString = prompt('Введіть rgb колір (r, g, b)');
const rgbArray = rgbString.split(',');  

const r_1 = parseInt(rgbArray[0]);
const g_2 = parseInt(rgbArray[1]);
const b_3 = parseInt(rgbArray[2]);

const hex = alert(`Колір у форматі HEX #${r_1.toString(16).padStart(2, '0')}${g_2.toString(16).padStart(2, '0')}${b_3.toString(16).padStart(2, '0')}`)

// Number: flats

const houseData = prompt('кiлькiсть поверхiв, кiлькiсть квартир на поверсi та номер квартири (через кому!)');
const houseDataArray = houseData.split(',');

const numberFloors = parseInt(houseDataArray[0]);
const apartmentsFloor = parseInt(houseDataArray[1]);
const apartmentNumber = parseInt(houseDataArray[2]);

let apartmentsEntrance = numberFloors * apartmentsFloor;

function roundUpIfDecimal(number) {
    let integerPart = Math.floor(number);
    let decimalPart = number - integerPart;

    if (decimalPart > 0) {
        integerPart += 1;
    }
    return integerPart;
}

// № ПІД'ЇЗДУ
let entranceNumber = roundUpIfDecimal(apartmentNumber / apartmentsEntrance);

// № КВАРТИРИ
let floorNumber = roundUpIfDecimal(((apartmentsEntrance - ((entranceNumber * apartmentsEntrance) - apartmentNumber)) / apartmentsFloor));

const flats = alert(`Пiд'їзд № ${entranceNumber}, № поверху ${floorNumber} `)

