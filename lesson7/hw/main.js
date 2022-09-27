// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
//
// let arr = [];
// arr.push(new User(1, 'vika', 'harbuz', 'harbuz8', 8800),
//     new User(2, 'oleg', 'akson', 'aksjonvre.ua@gmail.com', 380936410622),
//     new User(5, 'wfewdaagfew', 'whrtvasvdvhw00', 'gerdsvasvgwhwhw', 054342124),
//     new User(4, 'wfewwrgfew', 'whrtwcewfahw00', 'gergsdvsadvwhwhw', 051432124),
//     new User(6, 'wfegerwgaswfew', 'whrthw00', 'gergwvdsvhvasvsdwhw', 053432124),
//     new User(3, 'evhen', 'antonov', 'fwfewfew', 24516584),
//     new User(7, 'wfewasdgasdfew', 'whrtfbhw00', 'gerasdvasdvgwhwhw', 054232124),
//     new User(9, 'wfewcasdcfew', 'whrthbdfbaw00', 'gergsadvvwhwhw', 054326124),
//     new User(8, 'wfeadsgsdcwfew', 'whrafbavthw00', 'gdvasergwhwhw', 054532124),
//     new User(10, 'wfecdsacsadfew', 'whrtbfdhw00', 'gertrsdvsvbfwhwhw', 057432124)
// )
// console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


// let filter = arr.filter(user => user.id % 2 === 0);
// console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = arr.sort((a, b) => a - b)
// console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arr = [new Client(1, 'vika', 'harbuz', 'mail1', 4313421311512, ['t', 'a', 'c']),
//     new Client(2, 'vika', 'harbuz', 'mail2', 4342133411512, ['t', 'a']),
//     new Client(3, 'vika', 'harbuz', 'mail3', 434566213115112, ['t', 'a']),
//     new Client(4, 'vika', 'harbuz', 'mail4', 434821311512, ['t', 'a', 'b']),
//     new Client(5, 'vika', 'harbuz', 'mail5', 434271311512, ['t', 'a']),
//     new Client(6, 'vika', 'harbuz', 'mail6', 434201311512, ['t', 'a']),
//     new Client(7, 'vika', 'harbuz', 'mail7', 43498551311512, ['t', 'a']),
//     new Client(9, 'vika', 'harbuz', 'mail9', 4342177311512, ['t', 'a']),
//     new Client(10, 'vika', 'harbuz', 'mail0', 4342138811512, ['t', 'a']),
// ]
// console.log(arr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = arr.sort((a,b)=>{
//     return a.order.length - b.order.length
// })
//
// console.log(sort)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car(model, vurobnuk, year, maxSpeed, objem) {
//     this.model = model;
//     this.vurobnuk = vurobnuk;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.objem = objem;
//
//     this.drive = function () {
//         console.log(`їдемо зі шкидкістю ${this.maxSpeed} км на годину`)
//     }
//     this.info = function () {
//         console.log(`model - ${this.model}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed = maxSpeed + newSpeed
//     }
//     this.changeYear = (newValue) => this.year = newValue
//     this.addDriver = (...driver) => {
//         return car.driver = driver;
//     }
// }
//
// let car = new Car('tesla', 'gb', 1998, 100, 2);
// console.log(car)
// car.drive()
// car.info()
// console.log(car.increaseMaxSpeed(35));
// console.log(car.changeYear(2000))
// car.addDriver('jenia', 'anton');
// console.log(car)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {

    constructor(popelushkaName, year, footSize) {
        this.popelushkaName = popelushkaName;
        this.year = year;
        this.footSize = footSize;
    }

}

class Prince {
    constructor(princeName, year, boot) {
        this.princeName = princeName;
        this.year = year;
        this.boot = boot;
    }
}

let popel1 = new Popelushka('princess 1', 2000, 33);
let popel2 = new Popelushka('princess 2', 2001, 34);
let popel3 = new Popelushka('princess 3', 2002, 35);
let popel4 = new Popelushka('princess 4', 2003, 36);
let popel5 = new Popelushka('princess 5', 2004, 37);
let popel6 = new Popelushka('princess 6', 2005, 38);
let popel7 = new Popelushka('princess 7', 2006, 39);
let popel8 = new Popelushka('princess 8', 2007, 40);
let popel9 = new Popelushka('princess 9', 2008, 41);
let popel10 = new Popelushka('princess 10', 2009, 42);

let arr = [popel1, popel2, popel3, popel4, popel5, popel6, popel7, popel8, popel9, popel10];

let prince = new Prince('Prince', 1995, 35);
console.log(prince)
// for (let arrElement of arr) {
//     if (arrElement.footSize === prince.boot){
//         console.log(arrElement)
//     }
// }

// let truePrincess = function (arr) {
//     for (let arrElement of arr) {
//         if (arrElement.footSize === prince.boot) {
//             console.log(arrElement)
//         }
//     }
// }
//     truePrincess(arr);

// let find = arr.find(value => value.footSize === prince.boot);
//
// console.log(find.popelushkaName)