// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = prompt('???');
//
// if (x !== 0){
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }

// let x = +prompt('???') !== 0 ? 'Вірно' : 'Невірно';
// console.log(x)


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = Math.floor(Math.random()*60);
// console.log(time)
// if (time >= 0 && time <= 15) {
//     console.log('persha')
// } else if (time >= 16 && time <= 30){
//     console.log('druga')
// } else if (time >=31 && time <= 45){
//     console.log('tretia')
// } else {
//     console.log('chetverta')
// }

// let time = Math.floor(Math.random()*60);
// console.log(time)
// let square = time >= 0 && time <= 15 ? 'persha' :
//     time >=16 && time <= 30 ? 'druga' :
//         time >= 31 && time <= 45 ? 'tretia' :
//             'chetverta';
// console.log(square)


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

// let day = Math.floor(Math.random()*32);
// console.log(day)
//
// let decada = day <= 9 ? 'persha' :
//     day >= 11 && day <= 19 ? 'druga' : 'treia';
// console.log(decada)

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//

// let day = Math.floor(Math.random() * (8 - 1) + 1);
// console.log(day)
// switch (day) {
//     case 1 :
//         console.log('monday');
//     break;
//     case 2 :
//         console.log('tuesday');
//     break;
//     case 3 :
//         console.log('wednesday');
//         break;
//     case 4 :
//         console.log('Thursday');
//         break;
//     case 5 :
//         console.log('Friday');
//         break;
//     case 6 :
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
// }
//



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = Math.floor(Math.random()*100);
let b = Math.floor(Math.random()*100);
console.log(a);
console.log(b);
//
// if (a > b){
//     console.log(a)
// }   else {
//     console.log(b)
// }

let max = a > b ? console.log(a) : console.log(b);