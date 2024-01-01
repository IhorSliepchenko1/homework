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
    const arrMultiply =

        [
            prompt('рядок 1'),
            prompt('рядок 2'),
            prompt('рядок 3'),
            prompt('рядок 4'),
            prompt('рядок 5'),
        ];
    const table = document.getElementById('table')
    let str = "<table>";
    let conf = confirm('введіть без пробілив');

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


//Currency Table


const table1 = () => {
    return fetch("https://open.er-api.com/v6/latest/USD")
        .then((res) => res.json())
        .then((data) => {
            const { rates: exchangeRate } = data;
            const keys = Object.keys(exchangeRate);
            const exchangeArray = [];
            for (const currency1 of Object.keys(exchangeRate)) {
                const currency = [currency1];
                for (const currency2 of Object.keys(exchangeRate)) {
                    const rate = exchangeRate[currency2] / exchangeRate[currency1];
                    currency.push(rate.toFixed(2));
                }
                exchangeArray.push(currency);
            }
            return table2(exchangeArray, keys);
        });
};

const table2 = (arr, keys) => {
    const curTable = document.getElementById('curTable');
    let str = "<table>";
    str += "<tr>";
    str += "<th></th>";
    for (let key of keys) {
        str += "<th>" + key + "</th>";
    }

    str += "</tr>";
    for (let row of arr) {
        str += "<tr>";
        for (let number of row) {
            str += "<td>" + number + "</td>";
        }
        str += "</tr>";
    }
    str += "</table>";
    curTable.innerHTML = str;
};




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

// Array of objects sort
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




// Table
const users = [
    {
        name: 'Марія',
        fatherName: 'Іванівна',
        surname: 'Іванова',
        sex: 'female'
    },
    {
        name: 'Миколай',
        fatherName: 'Іванович',
        surname: 'Іванов',
        age: 15
    },
    {
        name: 'Петро',
        fatherName: 'Іванович',
        surname: 'Іванов',
        married: true
    },
]

const usersContainer = document.getElementById("usersContainer");
const tableUsers = usersContainer.querySelector("tbody");

function renderTableUsers() {
    tableUsers.innerHTML = "";
    for (const user of users) {
        const trUsers = document.createElement("tr");
        const tdNameUsers = document.createElement("td");
        const tdFatherName = document.createElement("td");
        const tdSurname = document.createElement("td");
        const tdAgeUsersSex = document.createElement("td");
        const tdAgeUsersAge = document.createElement("td");
        const tdAgeUsersMarried = document.createElement("td");

        tdNameUsers.textContent = user.name;
        tdFatherName.textContent = user.fatherName;
        tdSurname.textContent = user.surname;
        tdAgeUsersSex.textContent = user.sex;
        tdAgeUsersAge.textContent = user.age;
        tdAgeUsersMarried.textContent = user.married;

        trUsers.appendChild(tdNameUsers);
        trUsers.appendChild(tdFatherName);
        trUsers.appendChild(tdSurname);
        trUsers.appendChild(tdAgeUsersSex);
        trUsers.appendChild(tdAgeUsersAge);
        trUsers.appendChild(tdAgeUsersMarried);

        tableUsers.appendChild(trUsers);
    }
}

renderTableUsers()

function sortByTextUsers() {
    if (sortBool) {
        users.sort((a, b) => a.name.localeCompare(b.name))
    } else {
        users.sort((a, b) => b.name.localeCompare(a.name))
    }
    sortBool = !sortBool
    renderTableUsers()
}

function sortByAgeUsers() {
    if (sortBool) {
        users.sort((a, b) => (a.age || 0) - (b.age || 0));
    } else {
        users.sort((a, b) => (b.age || 0) - (a.age || 0));
    }
    sortBool = !sortBool;
    renderTableUsers();
}


// Divide
function returnMathFloor() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let divideElement = document.getElementById("divide");
    const result = Math.floor(num1 / num2);
    divideElement.value = result;
}

// Calc Func
function calcFunc() {

    const objPay = {
        first: (document.getElementById('1').value),
        second: (document.getElementById('2').value),
        third: (document.getElementById('3').value),
        fourth: (document.getElementById('4').value)
    }

    const payments = document.getElementById('payments');
    const average = document.getElementById('average');

    payments.value = Object.values(objPay).reduce((acc, value) => acc + parseFloat(value) || 0, 0)

    average.value = (payments.value) / Object.keys(objPay).length


}




// Calc Live

const calcTaxes = () => {
    const paymentsForTax = document.getElementById('paymentsForTax');
    paymentsForTax.value = payments.value
    const taxes = document.getElementById('taxes')
    taxes.value = (paymentsForTax.value / 19.5).toFixed(2)
    return calcFunc()
}
