// {
//     // Literals && Literals expand
//     const cat = {
//         color: 'black',
//         name: 'Barsik',
//         age: 5,
//     }
//     const newKey = prompt('key');
//     const newValue = prompt('value');
//     cat[newKey] = newValue;
//     console.log(cat);

//     // Literals copy
//     const catCopy = { ...cat }
//     const catCopyNewKey = prompt('key');
//     const catCopyNewValue = prompt('value');
//     catCopy[catCopyNewKey] = catCopyNewValue;
//     console.log(catCopy);
// }

// {
//     //Html tree

//     const obj = {
//         tagName: 'body',
//         children: [
//             {
//                 tagName: 'div',
//                 children: [
//                     {
//                         tagName: 'span',
//                         children: ["Enter a data please:"],
//                     },

//                     {
//                         tagName: 'br',
//                     },

//                     {
//                         tagName: 'input',
//                         attrs:
//                         {
//                             type: 'text',
//                             id: 'name'
//                         }
//                     },

//                     {
//                         tagName: 'input',
//                         attrs:
//                         {
//                             type: 'text',
//                             id: ['surname']
//                         }
//                     }
//                 ]
//             },

//             {
//                 tagName: 'div',
//                 children: [

//                     {
//                         tagName: 'button ',
//                         children: 'OK',
//                         attrs:
//                         {
//                             id: 'ok'
//                         },

//                     },

//                     {
//                         tagName: 'button ',
//                         children: ['Cancel'],
//                         attrs:
//                         {
//                             id: 'cancel'
//                         },

//                     },
//                 ]
//             }
//         ]
//     }
//     // Parent

//     obj.children[0].parent = obj;
//     obj.children[1].parent = obj;
//     obj.children[0].children[0].parent = obj.children[0];
//     obj.children[0].children[1].parent = obj.children[0];
//     obj.children[0].children[2].parent = obj.children[0];
//     obj.children[0].children[3].parent = obj.children[0];
//     obj.children[1].children[0].parent = obj.children[1];
//     obj.children[1].children[1].parent = obj.children[1];

//     // Зміна OK

//     const attributeName = prompt("Введіть ім'я атрибута");
//     const attributeValue = prompt('Введіть значення атрибута');
//     obj.children[1].children[0].setAttribute(attributeName, attributeValue);



//     // Destructure

//     const spanTxt = obj.children[0].children[0].children[0];
//     console.log(spanTxt);

//     const secondButtonValue = obj.children[1].children[1].children[0];
//     console.log(secondButtonValue);

//     const secondInputId = obj.children[0].children[3].attrs.id;
//     console.log(secondInputId);

// }

// {

//     // Destruct array

//     let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

//     let [odd1, even1, odd2, even2, odd3, ...letters] = arr;

//     console.log("Odd:", odd1, odd2, odd3);
//     console.log("Even:", even1, even2);
//     console.log("Letters:", letters);

// }

// {
//     // Destruct string
//     let arr = [1, "abc"];

//     let [number, [s1, s2, s3]] = arr;
//     console.log(number);
//     console.log(s1);
//     console.log(s2);
//     console.log(s3);

// }

// {
//     // Destruct 2
//     let obj = {
//         name: 'Ivan',
//         surname: 'Petrov',
//         children: [{ name: 'Maria' }, { name: 'Nikolay' }]
//     }

//     const { children: [{ name: name1 }, { name: name2 }] } = obj;

//     console.log(name1, name2);

// }

// {
//     // Destruct 3
//     let arr = [1, 2, 3, 4, 5, 6, 7, 10];
//     const { 0: a, 1: b, length } = arr;
//     console.log(a, b, length)
// }


// {

//     const cat = {
//         color: 'black',
//         name: 'Barsik',
//         age: 5,
//     }
//     // Copy delete
//     let dellKey = prompt('введіть ключ для видалення: age/color/name');
//     const { [dellKey]: _, ...rest } = cat;
//     console.log(rest);


//     // альтернатива
//     // function removeFromObjectByKey(object, key) {
//     //     delete object[key];
//     // }
//     // removeFromObjectByKey(cat, dellKey)
//     // console.log(cat);
// }


// {
//     // Currency real rate

//     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//         .then(data => {
//             let inputCurrency = prompt('введіть вхідну валюту');
//             let currencyConversion = prompt('введіть валюту, в яку відбувається конвертація');
//             let sumInputCurrency = prompt('введіть суму у вхідній валюті');
//             const sumInputCurrencyNumber = parseFloat(sumInputCurrency);

//             const result = data.rates[currencyConversion] * sumInputCurrencyNumber;
//             console.log(`вхідна валюта: ${inputCurrency} / сумма ${sumInputCurrencyNumber}; валюта для конвертації: ${currencyConversion} / сумма ${result}`)


//         })



// }



{
    // Currency drop down
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            const currencies = Object.keys(data.rates);
            const list = document.getElementById('list');

            const select = document.createElement('select');

            currencies.forEach(currency => {
                const option = document.createElement('option');
                option.value = currency;
                option.text = currency;
                select.appendChild(option);
            });

            list.appendChild(select);
        })



}



// {
//     // Currency table
//     fetch('https://open.er-api.com/v6/latest/USD')
//         .then(res => res.json())
//         .then(data => {
//             const currencies = Object.keys(data.rates);

//             // створюємо елементи на сторінку
//             const table = document.createElement('table');
//             const thead = document.createElement('thead');
//             const tbody = document.createElement('tbody');
//             const headerRow = document.createElement('tr');
//             // створюємо елементи на сторінку

//             const tableCurr = document.getElementById('table-currency')
//             // у headerRow вкладаємо нгзви валют та перебираємо їх мапом
//             headerRow.innerHTML =
//                 '<th></th>' + currencies.map(currency => `<th>${currency}</th>`).join('');


//             // tr вставляємо у thead
//             thead.appendChild(headerRow);

//             // перебіраємо методом forEach у рядок
//             currencies.forEach(baseCurrency => {
//                 // створюємо бітьківський елемент tr
//                 const row = document.createElement('tr');
//                 // вкладаємо у tr елемент th з назвою валюти
//                 row.innerHTML = `<th>${baseCurrency}</th>` +


//                     //  перебираємо по черзі верх та ліво, та ділимо один на одного
//                     currencies.map(targetCurrency => `<td>${data.rates[targetCurrency] / data.rates[baseCurrency]}</td>`).join('');

//                 // tr вставляємо у tbody
//                 tbody.appendChild(row);
//             });

//             // thead вставляємо у table
//             table.appendChild(thead);

//             // tbody вставляємо у tableCurr
//             table.appendChild(tbody);
//             tableCurr.appendChild(table);
//         })
// }