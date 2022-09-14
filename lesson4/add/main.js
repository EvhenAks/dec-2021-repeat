// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let a = 3;
// let b = 1;
// let c = 5;
//
// function min(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
//
// min(a, b, c)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let a = 3;
// let b = 1;
// let c = 5;
//
// function max(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
//
// max(a, b, c)

// - створити функцію яка повертає найбільше число з масиву

// let array = [4, 8, 2, 16, 6];
//
// function maxNumb(arr){
//     let number = arr[0]
//     for (let elem of arr){
//         if (number > elem){
//             number = elem
//         }
//     }
//     return number
// }
//
// console.log(maxNumb(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [10, 20, 30, 40, 50]
//
// function middleArithmetic(arr) {
//     let number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         number = number + arr[i]
//     }
//     let result = number / arr.length;
//     return result;
// }
//
// console.log(middleArithmetic(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMax(...numb) {
//     let maxNumber = numb[0];
//     let minNumber = numb[0];
//     for (let elem of numb) {
//         if (maxNumber < elem) {
//             maxNumber = elem
//         }
//         if (minNumber > elem) {
//             minNumber = elem
//         }
//     }
//     console.log(maxNumber)
//     return minNumber
//
// }
//
// minMax(1, 4, 6, 3, 5, 7, 19, 4, 9)


// - створити функцію яка заповнює масив рандомними числами

// let array = [];
// function arrPush(value, arr) {
//     for (let i = 0; i < value; i++){
//         arr.push(Math.round(Math.random()*20))
//     }
// }
//
// arrPush(10, array)
// console.log(array)

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = [];
//
// function arrPushLimit(value, limit, arr) {
//     for (let i = 0; i < value; i++){
//         arr.push(Math.round(Math.random()*limit))
//     }
// }
//
// arrPushLimit(5,5, arr)
// console.log(arr)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1, 2, 3];
//
// function arrReverse(arr) {
//     let newArr = []
//     for (let i = arr.length - 1; i >= 0; i--){
//         newArr.push(arr[i])
//     }
//     return newArr
// }
//
// console.log(arrReverse(arr));


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function element() {
//     if (arguments.length === 1) {
//         return arguments[0]
//     } else if (arguments.length === 2){
//         return arguments[0] + arguments[1]
//     }
// }
//
// console.log(element(5,'itar'));


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
//
// function arrSumm (arr1, arr2) {
//     let arrSumm = []
//     for (let i = 0; i < arr1.length; i++){
//         arrSumm.push(arr1[i] + arr2[i])
//     }
//     return arrSumm
// }
//
// console.log(arrSumm(arr1, arr2));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//
//
// function nameOfKey(arr){
//     let nameKey = []
//     for (let arrElement of arr) {
//         for (let arrKey in arrElement) {
//             nameKey.push(arrKey)
//         }
//     }
//     return nameKey
// }
//
// console.log(nameOfKey(arr));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function arrElementName(arr) {
//     let newArr = []
//     for (let arrElement of arr) {
//         for (let arrElementKey in arrElement) {
//             newArr.push(`${arrElement[arrElementKey]}`)
//         }
//     }
//     return newArr
// }
//
// console.log(arrElementName(arr));

