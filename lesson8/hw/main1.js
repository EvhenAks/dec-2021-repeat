// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let id = document.getElementById('main_header');
// id.className = 'name_of_group'


// b) робить шириниу елементу ul 400px

// let getUl = document.body.getElementsByTagName('ul');
// for (let ulElement of getUl) {
//     ulElement.style.width = '400px'
// }
// console.log(getUl)


// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let getClasslist = document.getElementsByClassName('linkList');
// console.log(getClasslist)
// for (let classlistElement of getClasslist) {
//     classlistElement.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let textClass = document.getElementsByClassName('listElement2');
// for (let textClass1 of textClass) {
//     console.log(textClass1.textContent);
// }



// e) отримує всі елементи li та змінює ім колір фону на сірий

// let liList = document.getElementsByTagName('li');
// for (let liListElement of liList) {
//     liListElement.style.backgroundColor = 'grey'
// }


// f) отримує всі елементи 'a' та додає їм клас anchor

// let aList = document.getElementsByTagName('a');
// for (let aListElement of aList) {
//     aListElement.classList.add('anchor')
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aList = document.getElementsByTagName('a');
// for (let aListElement of aList) {
//     if (aListElement.textContent === 'link3'){
//         aListElement.style.fontSize = '40px'
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let listOfA = document.getElementsByTagName('a');
// for (let listOfAElement of listOfA) {
//     listOfAElement.classList.add(`element_${listOfAElement.textContent}`)
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let classSubHeader = document.getElementsByClassName('sub-header');
// for (let classSubHeaderElement of classSubHeader) {
//     classSubHeaderElement.style.backgroundColor = prompt('color?')
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let ClassSubHeader = document.getElementsByClassName('sub-header');
// for (let classSubHeaderElement of ClassSubHeader) {
//     if (classSubHeaderElement.textContent === 'content 2 segment'){
//         classSubHeaderElement.style.backgroundColor = prompt('color?')
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let classContent1 = document.getElementsByClassName('content_1');
// for (let classContent1Element of classContent1) {
//     classContent1Element.textContent = prompt('text?')
// }


// l) отримати елементи p та змінити їм padding на 20px

// let ElementP = document.getElementsByTagName('p');
// for (let elementPElement of ElementP) {
//     elementPElement.style.padding = '20px'
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let ClassText2 = document.getElementsByClassName('text2');
// for (let classText2Element of ClassText2) {
//     classText2Element.textContent = 'dec-2021'
// }

