// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// function sRectangle(a, b) {
//     let s = a * b;
//     return s;
// }
//
// console.log(sRectangle(4, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function sCircle(r) {
//     let s = 3.14 * (r ** 2);
//     return s;
// }
//
// console.log(sCircle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sClinder(h, r) {
//     let s = 2 * 3.14 * (r * h)
//     return s;
// }
//
// console.log(sClinder(2, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrList(arr) {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// arrList([1, 4, 6, 8])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph (someText) {
//     document.write(`<p>${someText}</p>`)
// }
//
// paragraph('mother')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function liCreator(someText){
//     document.write('<ul>');
//         document.write(`<li>${someText}</li>`)
//         document.write(`<li>${someText}</li>`)
//         document.write(`<li>${someText}</li>`)
//     document.write('</ul>');
// }
//
// liCreator('someLi')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function liNumberList(someText, value){
//     document.write('<ul>')
//         for (let i = 0; i < value; i++){
//             document.write(`<li>${someText}</li>`)
//         }
//     document.write('</ul>')
// }
//
// liNumberList('one' , 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function listOfArray(arr) {
//     document.write('<ul>')
//     for (let arrElem of arr) {
//         document.write(`<li>${arrElem}</li>`)
//     }
//     document.write('</ul>')
// }
//
// listOfArray([1, 3, 5, 'wasd', true])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//
// function arrObj(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<div>${arr[i].id}</div>`)
//         document.write(`<div>${arr[i].name}</div>`)
//         document.write(`<div>${arr[i].age}</div>`)
//     }
// }
//
// arrObj([{id: 1, name: 'Evhen', age: 24}])

// - створити функцію яка повертає найменьше число з масиву

// let arr = [100, 15, 10]
//
// function minNumber(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (min >= arr[i]) {
//             min = arr[i]
//         }
//     }
//     return min;
// }
//
// console.log(minNumber(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [50, 2, 10];
//
// function summary(arr) {
//     let result = 0;
//     for (let elem of arr) {
//         result = result + elem;
//     }
//     return result;
// }
//
// console.log(summary(arr));


