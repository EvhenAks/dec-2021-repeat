// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [10, 20, 30, 40, 50]
//
// let middle = (arr) => {
//     let num = 0
//     for (let elem of arr) {
//         num = num + elem;
//     } return num / arr.length
// }
//
// console.log(middle(arr));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if (max < arg[i]) {
//             max = arg[i]
//         }
//     }
//     for (let i = 0; i < arg.length; i++) {
//         if (min > arg[i]) {
//             min = arg[i]
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// minMax(1, 5, 6, 123, 51, 32)

// - створити функцію яка заповнює масив рандомними числами

// let arr = []
// let random = (array) => array.push(Math.floor(Math.random()*10))
// random(arr);
// console.log(arr)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let array = [];
//
// let arrPushLimit = (arr, limit) => {
//     for (let i = 0; i < limit; i++) {
//         arr.push(Math.floor(Math.random() * 10))
//     }
// }
//
// arrPushLimit(array, 5)
// console.log(array)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1, 2, 3];
//
// let reverse = (arr) => {
//     let emptyArr = [];
//     let ri = arr.length - 1;
//     for (let elem of arr) {
//         emptyArr[ri] = elem
//         ri--
//     }
//     return emptyArr;
// }
//
// console.log(reverse(arr));

//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let sRectangle = (a, b) => a * b;
//
// console.log(sRectangle(4, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let sCircle = (r) => 3.14 * (r ** 2);
//
//
// console.log(sCircle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arrList = (arr) => {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// arrList([1, 4, 6, 8])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// - створити функцію яка повертає найменьше число з масиву


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


//
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let arr = [{name: 'artur'}, {id: 3}];
//
// let reverObj = (arr) => {
//     // let temp = arr[1];
//     // arr[1] = arr[0];
//     // arr[0] = temp;
//     [arr[0], arr[1] = arr [1], arr[0]];
// }
// reverObj(arr);
// console.log(arr);