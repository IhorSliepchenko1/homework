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




