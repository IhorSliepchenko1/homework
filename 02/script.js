{// String: greeting
    let name = prompt('Як вас звати?');
    let hello = alert(`Привіт ${name}`);
}


{// String: gopni4ek
    let listWords = prompt('Введіть через кому декілька слів');
    let splitJoin = alert(listWords.split(',').join(' блін'))
}


{// String: capitalize
    let str = "cANBerRa"
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase()
    console.log(result)
}


{// String: word count
    const words = `'${prompt('введіть слова через пробіл')}'`;
    console.log(words.split(' ').length)
}


{// String: credentials
    let surname = (prompt("Введіть призвище")).trim();
    let firstName = (prompt("Введіть ім'я")).trim();
    let patronymic = (prompt("Введіть по-батькові")).trim();
    let fullName = `${surname[0].toUpperCase() + surname.slice(1).toLowerCase()} ${firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()} ${patronymic[0].toUpperCase() + patronymic.slice(1).toLowerCase()}`
    console.log(fullName)
}


{// String: beer
    let str = "Було жарко. Василь пив пиво вприкуску з креветками";
    let result = str.replace(/пиво/g, "чай").replace(/вприкуску/g, "уприкуску");
    console.log(result);
}


{// String: no tag
    let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
    let ind_Of_First = str.indexOf("<");
    let ind_Of_Last = str.indexOf(">");
    let result = str.slice(0, ind_Of_First - 1) + str.slice(ind_Of_Last + 1);
    console.log(result);
}


{// String: big tag
    let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
    let ind_Of_First = str.indexOf("<");

    let ind_Of_Last = str.indexOf(">");
    let result = str.slice(0, ind_Of_First) +
        str.slice(ind_Of_First, ind_Of_Last + 1).toUpperCase()
        + str.slice(ind_Of_Last + 1);

    console.log(result);
}


{
    // String: new line
    let newLine = prompt("Введіть текст, для переходу на новий рядок напишіть \\n")
    let result_newLine = console.log(newLine.split('\\n').join('\n'));
}


{
    // String: youtube

    const linkYoutube = prompt('Введіть посилання на відео з YouTube:');
    const regularExpression = /[a-zA-Z0-9_-]{11}/;
    const matchArray = linkYoutube.match(regularExpression);
    const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${matchArray}" frameborder="0" allowfullscreen></iframe>`;

    document.write(embedCode);
}
