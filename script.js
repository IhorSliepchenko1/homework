let notification = alert('Введіть по черзі з/п кожного місяця кварталу (у $)')

let first = prompt('з/п за 1й місяць');
let second = prompt('з/п за 2й місяць');
let third = prompt('з/п за 3й місяць');
let fourth = prompt('з/п за 4й місяць');

first = parseFloat(first);
second = parseFloat(second);
third = parseFloat(third);
fourth = parseFloat(fourth);

let total = first + second + third + fourth;

let data = alert(`Квартальні виплати: ${total} $ 
Середня з/п: ${total / 4} $`)


const credentials = {
    login: 'admin',
    password: 'qwerty',
}

function checkCredentials() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('pass').value;
    const resultDiv = document.getElementById('result');

    if (enteredUsername === credentials.login && enteredPassword === credentials.password) {
        resultDiv.innerHTML = '<div class="success">Welcome, ' + enteredUsername + '!</div>';
    } else {
        resultDiv.innerHTML = '<div class="error">Please try again.</div>';
    }
}