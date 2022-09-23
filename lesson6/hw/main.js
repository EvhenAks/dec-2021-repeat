// - Знайти та вивести довижину настипних стрінгових значень
// let hel = 'hello world'
// let lorem ='lorem ipsum'
// let js = 'javascript is cool'
//
// console.log(hel.length);
// console.log(lorem.length);
// console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hel = 'hello world'
// let lorem ='lorem ipsum'
// let js = 'javascript is cool'
//
// console.log(hel.toUpperCase());
// console.log(lorem.toUpperCase());
// console.log(js.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hel = 'HELLO WORLD'
// let lorem ='LOREM IPSUM'
// let js = 'JAVASCRIPT IS COOL'
//
// console.log(hel.toLocaleLowerCase());
// console.log(lorem.toLocaleLowerCase());
// console.log(js.toLocaleLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
//
//
// let clearStr = str.trim();
// console.log(clearStr)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні'
// stringToarray = (str) => {
//    return str.split(' ')
// }
//
// let arr = stringToarray(str);
// console.log(arr)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];


//
// let arrToString = arr.map(function (arr){
//    return arr.toString()
// })
//
// console.log(arrToString);

// let arrToString = arr.map(arr => (arr.toString()))
// console.log(arrToString)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3];
//
// let sortNums = function (nums, direction) {
//     if (direction === 'ascending') {
//         nums.sort(function (a, b) {
//             return a - b
//         })
//     } else if (direction === 'descending'){
//         nums.sort((a, b) => {
//            return b - a
//         })
//     }
// }
//
// sortNums(nums, 'descending')
//
// console.log(nums)

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sort = coursesAndDurationArray.sort((curent, next) =>{
//     return curent.monthDuration - next.monthDuration
// })
// console.log(sort)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter(courses => courses.monthDuration >= 5);
// console.log(filter)
//

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
