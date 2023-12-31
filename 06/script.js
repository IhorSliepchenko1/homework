// Чи потрібен блок коду функції для вирішення цього завдання?
//  -Ні, не потрібен

// Temperature
function calcTemperature() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = document.getElementById('fahrenheit')

    return fahrenheit.value = (celsius * 1.8000 + 32.00).toFixed(1);
}

// RGB

function convertHEX() {
    const RGB = document.getElementById('rgb').value.split(',');
    const hex = document.getElementById('hex');
    const backgroundColor = document.querySelector('body');
    const r_1 = parseInt(RGB[0]);
    const g_2 = parseInt(RGB[1]);
    const b_3 = parseInt(RGB[2]);
    hex.value = `#${r_1.toString(16).padStart(2, '0')}${g_2.toString(16).padStart(2, '0')}${b_3.toString(16).padStart(2, '0')}`;
    let newBG =
        `<style>
        body {
            background-color: ${hex.value};
        }
        </style>`;

    backgroundColor.insertAdjacentHTML('beforeend', newBG);
    return newBG;
}

// Flats

function countEntranceApartment() {
    const numberFloors = parseInt(document.getElementById('floor').value)
    const apartmentsFloor = parseInt(document.getElementById('apartments').value)
    const apartmentNumber = parseInt(document.getElementById('num-apart').value)
    const entranceNumber = document.getElementById('entrance')
    const floorNumber = document.getElementById('floor-number')

    let apartmentsEntrance = numberFloors * apartmentsFloor;
    function roundUpIfDecimal(number) {
        let integerPart = Math.floor(number);
        let decimalPart = number - integerPart;

        if (decimalPart > 0) {
            integerPart += 1;
        }
        return integerPart;
    }
    const obj = {
        entrance: entranceNumber.value = roundUpIfDecimal(apartmentNumber / apartmentsEntrance),
        floor: floorNumber.value = roundUpIfDecimal(((apartmentsEntrance - ((entranceNumber.value * apartmentsEntrance) - apartmentNumber)) / apartmentsFloor))
    }

    return console.log(obj)

}

// Credentials

function enterCredentials() {
    const name = prompt('name').trim();
    const surname = prompt('surname').trim();
    const fatherName = prompt('fatherName').trim();


    const objCredentials = {
        name: document.getElementById('name').value = name,
        surname: document.getElementById('surname').value = surname,
        fatherName: document.getElementById('fatherName').value = fatherName,
        fullName: document.getElementById('fullName').value = `${name} ${surname} ${fatherName}`
    }

    return console.log(objCredentials)
}

// New line
function formatMultilineString() {
    const newLine = document.getElementById('newLine')
    const userInput = prompt("Введіть рядок з можливістю \\n як маркера нового рядка:");
    const stringWithRealNewlines = userInput.split('\\n').join('\n');
    return newLine.value = stringWithRealNewlines;
}


// Prompt: or

function askAge() {
    let age = prompt('How old are you?');
    const ageInp = document.getElementById('age')
    return ((age === null || age === undefined || age === '' || isNaN(age)) ? alert('Відповідь некоректна') : ageInp.value = (`Вам ${age} роки(ів)`)) && alert(ageInp.value)

}

// Login And Password

function logIn() {
    const credentials = {
        login: 'admin',
        password: 'qwerty',
    };

    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    switch (true) {
        case login === credentials.login:
            alert('Логін коректний');
            break;
        default:
            alert('Помилка введення логіна');
    }

    switch (true) {
        case password === credentials.password:
            alert('Пароль вірний');
            break;
        default:
            alert('Помилка введення пароля');
    }


}

// For Table


function createTable() {

    const table = document.getElementById('table')
    let str = "<table>";
    let conf = confirm('введіть без пробілив');
    const arrMultiply =

        [
            prompt('рядок 1'),
            prompt('рядок 2'),
            prompt('рядок 3'),
            prompt('рядок 4'),
            prompt('рядок 5'),
        ];

    for (const num of arrMultiply) {
        str += "<tr>";
        for (const letter of num) {
            str += `<td>${letter}</td>`
        }
        str += "</tr>";
    }

    str += "</table>";
    console.log(arrMultiply)
    return table.innerHTML = str

}

// Filter Lexics

function filterLexics() {
    let str = document.getElementById('words').value;
    console.log(str)
    let newStr = document.getElementById('words_new');
    let lexicsWords = ['бляха', 'муха', "пляшка", "шабля"];
    let strSplit = str.split(' ');
    console.log(strSplit)
    const strFilter = strSplit.filter((x) => !lexicsWords.includes(x));
    const result = strFilter.join(', ')
    console.log(result)

    return newStr.value = result
}


// Currency Table


// Form

const car = {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA",
    "in_production": false
};


function displayInfoCar() {
    const form = document.getElementById('form');
    form.innerHTML = '';

    for (const key in car) {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.textContent = `${key}:`;
        label.setAttribute('for', key);

        input.name = key;
        input.id = key;

        if (typeof car[key] === 'number') {
            input.type = 'number';
            input.value = car[key];
        } else if (typeof car[key] === 'boolean') {
            input.type = 'checkbox';
            input.checked = car[key];
        } else {
            input.type = 'text';
            input.value = car[key];
        }

        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
    }
}


const persons = [
    { name: "Іван", age: 17 },
    { name: "Марія", age: 35 },
    { name: "Олексій", age: 73 },
    { name: "Яків", age: 12 },
];

const persContainer = document.getElementById("persContainer");
const tableBody = persContainer.querySelector("tbody");

function renderTable() {
    tableBody.innerHTML = "";
    for (const person of persons) {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdAge = document.createElement("td");

        tdName.textContent = person.name;
        tdAge.textContent = person.age;

        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tableBody.appendChild(tr);
    }
}
let sortBool = true;

function sortByName() {
    if (sortBool) {
        persons.sort((a, b) => a.name.localeCompare(b.name))
    } else {
        persons.sort((a, b) => b.name.localeCompare(a.name))
    }
    sortBool = !sortBool
    renderTable();
}


function sortByAge() {
    if (sortBool) {
        persons.sort((a, b) => a.age - b.age);
    } else {
        persons.sort((a, b) => b.age - a.age);
    }
    sortBool = !sortBool;
    renderTable();
}

renderTable();