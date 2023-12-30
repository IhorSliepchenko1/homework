{
    // Confirms
    const confArr = [];
    let weather = confirm('сьогодні йде дощ?');
    let eat = confirm('любиш піцу?');
    confArr.push(weather, eat);

    console.log(confArr);
}

{
    // Prompts
    const promptArr = [];
    promptArr[0] = prompt('Столиця України?');
    promptArr[1] = prompt('Столиця Румунії?');
    promptArr[2] = prompt('Столиця США?');
    console.log(promptArr);

}

{
    // Item access
    const arr = [1, 2, 'як справи', 3]
    let index = prompt('введіть індекс')
    let result = alert(arr[index])
}

{
    // Item change
    const arr = [];
    let index = prompt('введіть індекс');
    let value = prompt('введіть значення');
    arr[index] = value;
    console.log(arr)
}

{
    // Multiply table
    const arr = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4, 5],
        [0, 2, 4, 6, 8, 10],
        [0, 3, 6, 9, 12, 15],
        [0, 4, 8, 12, 16, 20],
        [0, 5, 10, 15, 20, 25],
    ];

    arr.forEach(arr2 => console.log(arr2))
    const indexOfZero = arr[[0]].indexOf(0);
    const newArray = arr.slice(0, indexOfZero)
        .concat(arr.slice(indexOfZero + 0));

    console.log(newArray);

}



//Multiply table
const arrMultiply = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4, 5],
    [0, 2, 4, 6, 8, 10],
    [0, 3, 6, 9, 12, 15],
    [0, 4, 8, 12, 16, 20],
    [0, 5, 10, 15, 20, 25],
];


//Multiply table slice
let newArr = arrMultiply.slice(1);
let result = [];
for (let i = 0; i < newArr.length; i++) {
    result[i] = newArr[i].slice(1);
}
console.log(result);


{
    // IndexOf Word
    const arrWord = ["банан", "слива", "абрикоса"]
    const arrWordPrompt = prompt(`Оберіть зі списку: ${arrWord}`)
    const index = arrWord.indexOf(arrWordPrompt)

    if (index >= 0) {
        alert(`Слово "${arrWordPrompt}" знаходиться на позиції № ${index + 1}`);

    } else {
        alert('Слово не знайдено')
    }

}


{
    // Reverse
    let arrPrompt = [];
    for (let j = 1; j <= 5; j++) {
        arrPrompt.push(prompt(`word/num ${j} in array'`));
    }

    let arrPush = [];
    for (let i = 0; i < arrPrompt.length; i++) {
        arrPush.push(arrPrompt[i]);
    }

    let arrPop = [];
    for (let k = 0; k < arrPrompt.length; k++) {
        let el = arrPush.pop();
        arrPop.push(el);
    }

    let shiftArr = [];
    for (let d = 0; d < arrPrompt.length; d++) {
        shiftArr.unshift(arrPop[d])
    }


    console.log("Оригінальний масив:", arrPrompt);
    console.log("Масив у зворотньому порядку:", arrPop);
    console.log("Оригінальний масив 2:", shiftArr);

}

{

    // Copy
    const copyarrMultiply = [];
    copyarrMultiply.push(arrMultiply)
    console.log(copyarrMultiply)
    // Deep Copy
    const depcopyarrMultiply = [...arrMultiply];
    console.log(depcopyarrMultiply)
}

{
    // Array Equals
    const arr = [1, 2, 3]
    const arr2 = arr
    arr2 === arr

}

{
    // Flat
    const arrMultiply = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4, 5],
        [0, 2, 4, 6, 8, 10],
        [0, 3, 6, 9, 12, 15],
        [0, 4, 8, 12, 16, 20],
        [0, 5, 10, 15, 20, 25],
    ];

    let arrFlat = [];
    for (let n = 1; n < arrMultiply.length; n++) {
        arrFlat = [...arrFlat, ...arrMultiply[n].slice(1)];
    }

    console.log(arrFlat);

}

{
    // Destruct
    const descWordPrompt = [prompt('введіть слово')];

    const [firstLetter, , , , fifthLetter, , , , ninthLetter] = descWordPrompt;

    console.log(`
    Перша літера: ${firstLetter},
    П'ята літера: ${fifthLetter},
    Дев'ята літера: ${ninthLetter}
    `);

}


{
    {
        // Destruct default
        const descWordPrompt = prompt('Введіть слово');
        const [, , secondLetter = '!', , fourthLetter = '!', fifthLetter = '!'] = descWordPrompt;

        console.log(`
        Друга літера: ${secondLetter},
        Четверта літера: ${fourthLetter},
        П'ята літера: ${fifthLetter}
        `);
    }


}

{
    // Multiply table rest
    const resultMultiply = [...result];
    const flattenedResult = resultMultiply.flat();

    console.log(flattenedResult);

}


{
    // For Alert

    let forOf = ["John", "Paul", "George", "Ringo"];

    for (const name of forOf) {
        alert(`Hello, ${name}`)
    }

}

{
    // For Select Option
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";
    for (const currency of currencies) {
        str += `<option>${currency}</option>`;
    }
    str += "</select>";
    document.write(str);

}

{
    // For Table Horizontal

    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table>"
    for (const name of names) {
        str += `<td>${name}</td>`
    }
    str += "</table>"
    document.write(str)
}


{
    // For Table Vertical
    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table>"
    for (const name of names) {
        str += `
        <tr>
        <td>${name}</td>
      </tr>`
    }
    str += "</table>"
    document.write(str)
}

{
    // For Table Letters
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<table>";

    for (const currency of currencies) {
        str += "<tr>";
        for (const letter of currency) {
            str += `<td>${letter}</td>`
        }
        str += "</tr>";
    }

    str += "</table>";
    document.write(str);

}



{
    // For Multiply Table
    let str = "<table>";

    for (const num of arrMultiply) {
        str += "<tr>";
        for (const letter of num) {
            str += `<td>${letter}</td>`
        }
        str += "</tr>";
    }

    str += "</table>";
    document.write(str);

}


{
    // Function capitalize
    const capitalize = str => {
        const result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        return result;
    };

    console.log(capitalize("cANBerRa"));

    // Map Capitalize
    const arrPromptString = prompt('введіть щось');
    const wordsArray = arrPromptString.split(' ');
    const wordRes = wordsArray.map(word => capitalize(word));
    const capitalizedString = wordRes.join(' ');
    console.log(capitalizedString);
}

{
    //Filter Lexics
    let str = prompt('введіть рядок');
    let lexicsWords = ['блін', 'спалахуйка', 'альо'];
    let strSplit = str.split(' ');
    const strFilter = strSplit.filter((x) => !lexicsWords.includes(x));
    const result = strFilter.join(', ')
    console.log(result)

    // Beep Lexics
    let arrBeep = strSplit.map(x => !lexicsWords.includes(x) ? x : lexicsWords = 'beep');
    console.log(arrBeep)
}



{// Reduce HTML
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";
    str += currencies.reduce((a, b) => a + `<option>${b}</option>`, "");
    str += "</select>";

    document.write(str);
}

{

    // For Brackets Hell Check
    const line = prompt();
    const bracketsStack = [];
    let i = 0;

    for (const character of line) {
        if (character === '(' || character === '[' || character === '{') {
            bracketsStack.push({ character, position: i })
        }


        else if (character === ')' || character === ']' || character === '}') {
            const lastOpenBracket = bracketsStack.pop();

            if (!lastOpenBracket ||
                (character === ')' && lastOpenBracket.character !== '(') ||
                (character === ']' && lastOpenBracket.character !== '[') ||
                (character === '}' && lastOpenBracket.character !== '{')
            ) {
                console.log(`Помилка: Невідповідні дужки на позиції ${i}`);
                break;
            }
        }
        i++;
    }

    if (bracketsStack.length === 0) {
        console.log("Всі дужки парні");
    }
    else {
        console.log(`Помилка: Невідповідні дужки на позиції ${bracketsStack[0].position}`);
    }
}