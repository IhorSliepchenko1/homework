// Number: odd
const promptValue = prompt('Введіть число');

if (isNaN(promptValue)) {
    alert('Ви ввели не число!')
}

if (promptValue % 2 === 0) {
    alert('введено парне число')
} else {
    alert('введено рядок або число не парне')
}

// String: lexics

const arrayRandomWord = prompt('введіть будь-що')
    .includes('a') === true
    ? alert('літеру "a" знайдено') : alert('літеру "a" НЕ знайдено');


// Boolean + Boolean: if

const isMale = confirm('Ви чоловік?');
const likesPizza = confirm('Вам подобається піца?');

let genderInfo, pizzaInfo;

if (isMale) {
    genderInfo = "Ви чоловік";
} else {
    genderInfo = "Ви жінка";
}

if (likesPizza) {
    pizzaInfo = "і ви любите піцу";
} else {
    pizzaInfo = "і ви НЕ любите піцу";
}

const answer = alert(`${genderInfo}, ${pizzaInfo}`);



// Comparison: sizes

const sizeUSA = prompt('Введіть ваш розмір(США)');

let internationalSize;

if (sizeUSA <= 2) {
    internationalSize = "XS"

} else if (sizeUSA > 2 && sizeUSA <= 6) {
    internationalSize = "S"

} else if (sizeUSA > 6 && sizeUSA <= 10) {
    internationalSize = "M"

} else if (sizeUSA > 10 && sizeUSA <= 14) {
    internationalSize = "L"

} else if (sizeUSA > 14 && sizeUSA <= 17) {
    internationalSize = "XL"

} else {
    internationalSize = "XL+"
}

const UAH = alert(`
Ваш розмір USA: ${sizeUSA}
Ваш розмір UAH: ${Number(sizeUSA) + 38}
Ваш розмір international: ${internationalSize}
`)


// Ternary
const male = confirm('Ви чоловік?');
male === true ? alert('Ви чоловік') : alert('Ви жінка');

// Prompt: or
let age = prompt('How old are you?');

if (age === null || age === undefined || age === '' || isNaN(age)) {
    alert('Відповідь некоректна');
} else {
    alert(`Вам ${age} років`);
}


// Confirm: or this days

confirm("Шопінг?") || alert("ти бяка");


//Confirm: if this days
let shoping = confirm('Шопінг?');

if (shoping === false) {
    alert('ти бяка');
}

