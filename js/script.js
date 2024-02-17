"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false 
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = +prompt("'На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = +prompt("'На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }


// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Слишком много')
// } else {
//     console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('Error');

// const num = '51';

// switch (num) {
//     case '49':
//         console.log('Неверно');
//         break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case '50':
//         console.log('Верно');
//         break;
//     default: 
//     case '100':
//         console.log('Не в этот раз!');
//         break;
// }

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dsafsdadsfsad');

// if (hamburger === 3 && cola === 1 && fries ) {
//     console.log('Все сыты!');
// } else {
//     console.log("Мы уходим");
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все довольны!');
// } else {
//     console.log("Мы уходим");
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, 
//     alexReport,
//     samReport, 
//     mariaReport = 'done';

// console.log( johnReport || alexReport || samReport || mariaReport );

// console.log(!1);

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }



// 2 Практика //
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// first: for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--;
//         continue first;
//     }
// }

// if (personalMovieDB.count > 30) {
//     alert('Вы киноман');
// } else if (personalMovieDB.count >= 10) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count < 10) {
//     alert('Просмотренно довольно мало фильмов');
// } else {
//     alert('Произошла ошибка');
// }

// console.log(personalMovieDB);


// 25 zanatie - funtions //

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);

// function calc(a, b) {
//     return(a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);
// //////////////////////////////

// const logger = function() {
//     console.log('Hello');
// };

// logger();


// const calc = (a, b) => a + b;

// console.log(calc(4, 5));
// console.log(calc(10, 5));
// console.log(calc(7, 3));

//  26 zanatie - dop.mat., function  //

// const usdCurr = 28;
// const eurCurr = 32;

// function convert (amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// 27 zanatie - pro vajnost' return  //

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert (amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }

// test();

// function doNothing() {};
// console.log(doNothing() === undefined);


// 28 zanatie - metodi i svoistva stok i chisel  //

// const str = "teSt";

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf("q"));

// const logg = 'Hello world';

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));



// 29 zanatie - practicheskoe zanyatie #3  
// && 30 znatie - method trim //


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               b = prompt('На сколько оцените его?', '').trim();

//         if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('Error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonaLevel() {
//     if (personalMovieDB.count > 30) {
//         alert('Вы киноман');
//     } else if (personalMovieDB.count >= 10) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count < 10) {
//         alert('Просмотренно довольно мало фильмов');
//     } else {
//         alert('Произошла ошибка');
//     }
// }

// detectPersonaLevel();

// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
//     }
// }

// writeYourGenres();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// 31 zanyatie - callback funtons  //

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJs(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJs('JavaScript', done);

// 32 zanyatie - objects destructurization  //

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);
// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойствo ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойствo ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

// 33 zanyatie - massiv i psevdoMassiv  //

// const arr = [2, 13, 26, 8, 10];
// arr.sort(campareNum);
// console.log(arr);

// function campareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// 35 zanyatie - peredacha dannih  //

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Передаёт ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = (Object.assign({}, add));

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'dsasdsadsa';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

//       console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array]

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// 36 zanyatie - Osnovi OOP prototype  //

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);
// jonh.sayHello();

// 37 zanyatie - practicheskoe zanyatie №4  //

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//                   b = prompt('На сколько оцените его?', '').trim();

//             if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('Error');
//                 i--;
//             }
//         }
//     },
//     detectPersonaLevel: function () {
//         if (personalMovieDB.count > 30) {
//             alert('Вы киноман');
//         } else if (personalMovieDB.count >= 10) {
//             alert('Вы классический зритель');
//         } else if (personalMovieDB.count < 10) {
//             alert('Просмотренно довольно мало фильмов');
//         } else {
//             alert('Произошла ошибка');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 0; i < 3; i++) {
//             const genere = prompt(`Ваш любимый жанр под номером ${i + 1}`);
//             if (genere != null && genere != '') {
//                 personalMovieDB.genres[i] = genere;
//             } else {
//                 i--;
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };

// 38 zanyatie - search errors in console  //

// function hello() {
//     console.log('Hello World');
// }

// hello();

// function hi() {
//     console.log('Say hi!');
// }

// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = ar.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sorted);

// 39 zanyatie - dynamic tipization  //


///////////////////////////////////////////////////////////////////////
// To String

// 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// 2)
// console.log(typeof(5 + ''));
// console.log(typeof(null + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';
///////////////////////////////////////////////////////////////////////
// To Number

// 1) 
// console.log(typeof(Number('4')));

// // 2)
// console.log(typeof(+'5'));

// 3)
// console.log(typeof(parseInt('15px', 10)));

// let answer = +prompt('Hello', '');

///////////////////////////////////////////////////////////////////////

// To boolean

// 0, '', null, undefined, NaN === false

// 1)
// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
// console.log('Working...');
// }

// 2)
// console.log(typeof(Boolean(1)));

// 3)
// console.log(typeof(!!'444'));

// 40 zanyatie - zamikanie functions i lecksicheskoe okruzjenie  //

// let number = 5; debugger

// function logNumber() {
//     console.log(number);debugger
// }

// number = 6;

// logNumber();debugger

// number = 8;

// logNumber();debugger

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {debugger
//         counter = counter + 1;debugger
//         return counter;debugger
//     }

//     return myFunction;
// }
// debugger
// const increment = createCounter();debugger
// const c1 = increment();debugger
// const c2 = increment();debugger
// const c3 = increment();debugger

// console.log(c1, c2, c3);

// {
//     let msg = 'hello';
// }

// console.log(msg);

// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//         let num = 3;
//     }

//     console.log(num);
// }

// 41 zanyatie - zadachi iz sobesedovaniya  //

// 1) Какое будет выведено значение: let x = 5; alert( x++ ); ? === 5 ибо сделано постфиксный инкремент

// 2) Чему равно такое выражение: [ ] + false - null + true ? === NaN

// 3) Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? === 2

// 4) Чему равна сумма [ ] + 1 + 2? === "12"

// 5) Что выведет этот код: alert( "1"[0] )? === "1"

// 6) Чему равно 2 && 1 && null && 0 && undefined ? === null

// 7) Есть ли разница между выражениями? !!( a && b ) и (a && b)? === da

// 8) Что выведет этот код: alert( null || 2 && 3 || 4 ); ? === 3

// 9) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? === net

// 10) Что выведет этот код: alert( +"Infinity" ); ? === infinity

// 11) Верно ли сравнение: "Ёжик" > "яблоко"? === false

// 12) Чему равно 0 || "" || 2 || undefined || true || falsе ? === 2


// 42 zanyatie - poluchenie elementov  //


// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns[0]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles[0]);

// const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart')

// console.log(oneHeart);


// 43 zanyatie - deistvie s elementami  //

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart'),
//       num = 500;
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = `background-color: blue; width: ${num}px`;

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

// div.classList.add('black');

// wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello";

// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');


// 44 zanyatie - practika na deistvie s elementami  //
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) ---

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const promoBlocks = document.querySelectorAll('.promo__adv img'), // 1
//       promoBg = document.querySelector('.promo__bg'), // 3
//       promoGenre = promoBg.querySelector('.promo__genre'), // 2
//       promoInteractiveTitle = document.querySelector('.promo__interactive-list'); // 4

// promoBlocks.forEach((item) => {
//     item.remove();
// }); // 1

// promoGenre.textContent = 'драма'; // 2

// promoBg.style.background = 'url(../img/bg.jpg)'; // 3

// movieDB.movies.sort(); // 4

// promoInteractiveTitle.innerHTML = ''; // 4

// movieDB.movies.forEach((film, i) => {
//     promoInteractiveTitle.innerHTML += `
//         <li class="promo__interactive-item">${i + 1}. ${film}
//             <div class="delete"></div>
//         </li>
//     `
// }); // 4

// 45 zanyatie - sobitiya i ih obrabotka  //

// Было выполнено с другим HTML и CSS, здесь
// только чтобы можно было вспомнить урок

// const btns = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
// i++
// if (i == 1) {
//     btn.removeEventListener('click', deleteElement);
// }
// }

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement);
// });

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);
// });


// 46 zanyatie - navigaziya po DOM derevu  //




// 47 zanyatie - rekursiya  //

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n-1);
//     }
// }

// console.log(pow(2, 1)) // 2
// console.log(pow(2, 2)) // 4
// console.log(pow(2, 3)) // 8
// console.log(pow(2, 4)) // 16
// console.log(pow(2, 10)) // 1024

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],

//         semi: {
//             students: [{
//                 name: 'test',
//                 progress: 100
//             }]
//         }
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let  i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let  i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));


// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let  i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0] / result[1]);


// 48 zanyatie - practika #5 //



// document.addEventListener('DOMContentLoaded', () => {

//     const personalMovieDB = {
//           count: 0,
//           movies: {},
//           actors: {},
//           genres: [],
//           privat: false,
//           start: function () {
//           personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//             while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//                 personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//             }
//         },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//                   b = prompt('На сколько оцените его?', '').trim();

//             if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('Error');
//                 i--;
//             }
//         }
//     },
//     detectPersonaLevel: function () {
//         if (personalMovieDB.count > 30) {
//             alert('Вы киноман');
//         } else if (personalMovieDB.count >= 10) {
//             alert('Вы классический зритель');
//         } else if (personalMovieDB.count < 10) {
//             alert('Просмотренно довольно мало фильмов');
//         } else {
//             alert('Произошла ошибка');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 0; i < 3; i++) {
//             const genere = prompt(`Ваш любимый жанр под номером ${i + 1}`);
//             if (genere != null && genere != '') {
//                 personalMovieDB.genres[i] = genere;
//             } else {
//                 i--;
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
//     };

//     const movieDB = {
//          movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };

//     const promoBlocks = document.querySelectorAll('.promo__adv img'), // 1
//           promoBg = document.querySelector('.promo__bg'), // 3
//           promoGenre = promoBg.querySelector('.promo__genre'), // 2
//           promoInteractiveTitle = document.querySelector('.promo__interactive-list'),
//           buttonAddFilm = document.querySelector('form.add'), 
//           formAddFilm = document.querySelector('.adding__input'),
//           inputArrElements = document.querySelectorAll('input'),
//           formCheckboxClick = inputArrElements[2],
//           deleteAdv = (arr) => {
//             arr.forEach(item => {
//                 item.remove();
//             });
//           },
//           makeChanges = () => {
//             promoGenre.textContent = 'драма'; 

//             promoBg.style.backgroundImage = 'url(../img/bg.jpg)'; 
//           },
//           sortArr = (arr) => {
//             arr.sort();
//           },
//           createMovieList = (films, parent) => {
//             parent.innerHTML = '';
//             sortArr(movieDB.movies);                 

//             films.forEach((film, i) => {
//                 parent.innerHTML += `
//                     <li class="promo__interactive-item">${i + 1}. ${film}
//                         <div class="delete"></div>
//                     </li>
//                  `
//             }); 

//             document.querySelectorAll('.delete').forEach((btn, i) => {
//                 btn.addEventListener('click', () => {         
//                     console.log(btn.parentElement);
//                     btn.parentElement.remove();
//                     movieDB.movies.splice(i, 1);

//                     createMovieList(movieDB.movies, promoInteractiveTitle);
//                 });
//             });
//           };

//     buttonAddFilm.addEventListener('submit', (event) => {

//         event.preventDefault();

//         const formAddFilmText = formAddFilm.value.trim();


//         if (formAddFilmText.length < 21 && formAddFilmText != '') {
//             movieDB.movies.push(formAddFilmText);
//         } else if (formAddFilmText != '') {
//             movieDB.movies.push(formAddFilmText.slice(0, 21) + '...');
//         } else {
//             return;
//         }

//         createMovieList(movieDB.movies, promoInteractiveTitle);


//         if (formCheckboxClick.checked) {
//             console.log('Добавляем любимый фильм');
//         };


//         event.target.reset();
//     });


//     deleteAdv(promoBlocks);    
//     makeChanges();
//     createMovieList(movieDB.movies, promoInteractiveTitle);

// });


// 49 zanyatie - Sobitiya na telephone //

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     // box.addEventListener('touchstart', (e) => {
//     //   e.preventDefault();

//     //   console.log('Start');
//     //   console.log(e.targetTouches);
//     // });

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         console.log(e.targetTouches[0].pageX);
//     }); 


//     //   box.addEventListener('touchend', (e) => {
//     //     e.preventDefault();

//     //     console.log('End');
//     //   }); 

//     // box.addEventListener('touchend', (e) => {
//     //   e.preventDefault();

//     //   console.log('End');
//     // }); 
// });


// 53 zanyatie - Operatori nuilivogo sliyaniya //




// const box = document.querySelector('.box');

// const newHeight = 100;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
//     elem.innerHTML = (h ?? 200) * (w ?? 200);
// }

// changeParams(box, newHeight, newWidth);

// let userName;
// let userKey;

// console.log(userName ?? userKey ?? 'User');                    




// 54 zanyatie - Operator opcionalnoi cepochki //



// const box = document.querySelector('.box');
// const block = document.querySelector('.block');

// console.log(block)

// if (block) {
//     console.log(block.textContent);
// }

// block?.textContent = '123';

// console.log(1 + 2);

// const userData = {
//     name: 'Ivan',
//     age: null,
//     say: function() {
//         console.log('Hello');
//     }
// };

// userData.say();
// userData.hey?.();

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

// console.log(userData?.skills?.js);




// 63 zanyatie - ClassList and deligirovanie sobitiy //



// const btns = document.querySelectorAll('button'),
//   wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//   console.log('Класс присутствует')
// };

// btns[0].addEventListener('click', () => {
//   btns[1].classList.toggle('red');
// if (!btns[1].classList.contains('red')) {
//   btns[1].classList.add('red');
// } else {
//   btns[1].classList.remove('red');
// }

// });

// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.matches('button.red')) {
//     console.log('Hello');
//   }
// });


// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//           console.log('Hello');
//   });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);


// 65 zanyatie - setTimeout i setInterval //

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//   const elem = document.querySelector('.box');
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);




// function logger () {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log('text');
//   i++;
// }

// let id = setTimeout(function log(){
//   console.log('Hello');
//   id = setTimeout(log, 500);
// }, 500);


// 67 sborshik musora i utechka pamyati //



// function func() {
//     smth = 'string';
//     window.smth = 'string'; --> Создаёт засоряющую переменную
// }

// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function() {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);

// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('hello');
//         console.log('hello!!');
//     }
// }

// const sayHello = outer();

// function createElement() {
//     const div = document.createElement('div');
//     div.id = 'test';
//     return div;
// }

// const testDiv = createElement();

// document.body.append(testDiv);

// function deleteElement() {
//     document.body.removeChild(document.getElementById('test'));
// }

// deleteElement();



// 68 - job for a date //


// const now = new Date();

// console.log(now); == 2024-02-09T23:17:25

// const now = new Date('2024-02-09');

// console.log(now); == 2024-02-09T00:00:00

// const now = new Date(0);

// console.log(now); == 1970-01-01T00:00:00.000Z

// const now = new Date(-5000);

// console.log(now); == 1969-12-31T23:59:55.000Z


// const now = new Date('2024-02-09');
// new Date.parse('2024-02-09'); == new Date('2024-02-09');

// console.log(now.setHours(18));
// console.log(now);


// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// let start = new Date();

// for (let i = 0; i < 10000000000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// alert(`Цикл отработал за - ${(end - start) / 1000} секунд`);




// 69,70 - create a countdown timer //



// const deadline = '2024-02-11';

// function getTimeRemaining(endtime) {
//     let days, hours, minutes, seconds;
//     const t = Date.parse(endtime) - Date.parse(new Date());

//     if (t <= 0) {
//         days = 0;
//         hours = 0;
//         minutes = 0;
//         seconds = 0;
//     } else {
//         days = Math.floor(t / (1000 * 60 * 60 * 24)),
//         hours = Math.floor((t / (1000 * 60 * 60)) % 24),
//         minutes = Math.floor((t / (1000 * 60)) % 60),
//         seconds = Math.floor((t / 1000) % 60);
//     }
        

//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minustes': minutes,
//         'seconds': seconds
//     };
// }

// function getZero(num) {
//     if (num >= 0 && num < 10) {
//         return `0${num}`;
//     } else {
//         return num;
//     }
// }

// function setClock(selector, endtime) {
//     const timer = document.querySelector(selector),
//         days = timer.querySelector('#days'),
//         hours = timer.querySelector('#hours'),
//         minutes = timer.querySelector('#minutes'),
//         seconds = timer.querySelector('#seconds'),
//         timeInterval = setInterval(updateClock, 1000);

//     updateClock();

//     function updateClock() {
//         const t = getTimeRemaining(endtime);

//         days.innerHTML = getZero(t.days);
//         hours.innerHTML = getZero(t.hours);
//         minutes.innerHTML = getZero(t.minustes);
//         seconds.innerHTML = getZero(t.seconds);

//         console.log(t.total);

//         if (t.total <= 0) {
//             clearInterval(timeInterval);
//         }
//     }
// }

// setClock('.timer', deadline);
  



// 71 settings document window job to him//


// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

//  const width = box.clientWidth;
//  const height = box.clientHeight;

//  const width = box.offsetWidth;
//  const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);

// console.log(style.display);

// console.log(document.documentElement.scrollTop);



// 72 - create modal window //


// const modalTrigger = document.querySelectorAll('[data-modal]'),
//           modalClose = document.querySelector('[data-close]'),
//           modal = document.querySelector('.modal');

//     closeModal();
    
//     function closeModal() {
//         modal.classList.remove('show');
//         modal.classList.add('hide');
//         document.body.style.overflow = '';
//     }

//     function showModal() {
//         modal.classList.remove('hide');
//         modal.classList.add('show');
//         modal.classList.add('fade');
//         document.body.style.overflow = 'hidden';
//     }

//     modalTrigger.forEach(e => {
//         e.addEventListener('click', () => {
//             showModal();
//         });
//     });

//     modalClose.addEventListener('click', () => {
//             closeModal();
//     });

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             closeModal();
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     })



// 73 - modification modal window //


// const modalTimerId = setTimeout(showModal, 15000)

//     function showModalByScroll() {
        
//         if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
//             showModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }

//     window.addEventListener('scroll', showModalByScroll);



// 75 - Function construction //


// const num = new Function(3);

// console.log(num);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`)
//     };
// }

// User.prototype.exit = function(name) {
//     console.log(`Пользователь ${this.name} ушел`)
// }

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);



// 76 - The context of callign this //

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }


//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a : 20,
//     b : 15, 
//     sum : function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }

// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`)
//     };
// }
// let ivan = new User('Ivan', 23);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// const btn = document.querySelector('button');

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const double = (a, b) => a * 2;

// console.log(double(4));



// 77 - Class of ES6 //

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this. width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());


// 79 - Using class for real job //

// class MenuCard {
//     constructor(src, alt, title, descr, price, parentSelector) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = descr;
//         this.price = price;
//         this.parent = document.querySelector(parentSelector);
//         this.transfer = 27;
//         this.changeToUAH();
//     }

//     changeToUAH() {
//         return this.price = this.price * this.transfer;
//     }

//     render() {
//         const element = document.createElement('div');
//         element.innerHTML = `<div class="menu__item">
//                         <img src="${this.src}" alt="${this.alt}">
//                         <h3 class="menu__item-subtitle">${this.title}</h3>
//                         <div class="menu__item-descr">${this.descr}</div>
//                         <div class="menu__item-divider"></div>
//                         <div class="menu__item-price">
//                             <div class="menu__item-cost">Цена:</div>
//                             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                         </div>
//                     </div>
//                         `;
//                         this.parent.append(element);

//         return element;

//     }
// }

// new MenuCard(
//     "img/tabs/vegy.jpg", 
//     'vegy', 
//     'Меню "Фитнес"', 
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
//     9,
//     '.menu .container',
//     ).render();
    
// new MenuCard(
//     "img/tabs/elite.jpg", 
//     'elite', 
//     'Меню “Премиум”"', 
//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
//     21,
//     '.menu .container',
//     ).render();
    
// new MenuCard(
//     "img/tabs/post.jpg", 
//     'post', 
//     'Меню "Постное"', 
//     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
//     16,
//     '.menu .container',
//     ).render();



// 80 - Rest operator and default parameters //


// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basis = 2) {
//     console.log(number * basis);
// }

// calcOrDouble(3);

// if (this.classes.length === 0) {
//     this.element = 'menu__item';
//     element.classList.add(this.element);
// } else {
//     this.classes.forEach(className => element.classList.add(className));
// }


// 82 - JSON format //

// const persone = {
//     name: 'Alex',
//     tel: '+78161401477'
// };

// console.log(JSON.stringify(persone)); === {"name":"Alex","tel":"+78161401477"}

// const persone = {
//     name: 'Alex',
//     tel: '+78161401477'
// };

// console.log(JSON.parse(JSON.stringify(persone))); === { name: 'Alex', tel: '+78161401477' }



// const persone = {
//     name: 'Alex',
//     tel: '+78161401477',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };

// const clone = JSON.parse(JSON.stringify(persone));

// clone.parents.mom = 'Ann';
// console.log(persone);
// console.log(clone);



// 83 - Ajax and using server//


// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = "Что-то пошло не так";
//         }
//     });

// });

// inputUsd.addEventListener('input', () => {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             const data = JSON.parse(request.response);
//             inputRub.value = (+inputUsd.value * data.current.usd).toFixed(2);
//         } else {
//             inputRub.value = "Что-то пошло не так";
//         }
//     });

// });


// 84 - implementation of the script for sending data to the server //

// const forms = document.querySelectorAll('form'),
//           message = {
//             loading: 'Загрузка',
//             success: 'Спасибо! Скоро мы с вами свяжемся', 
//             fail: 'Что-то пошло не так...'
//           };

//     forms.forEach(item => {
//         postData(item);
//     });

//     function postData(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();

//             const statusMessage = document.createElement('div');
//             statusMessage.classList.add('status');
//             statusMessage.textContent = message.loading;
//             form.append(statusMessage);

//             const request = new XMLHttpRequest();
//             request.open('POST', 'server.php');
            
//             request.setRequestHeader('Content-type', 'application/json');
//             const formData = new FormData(form);

//             const object = {};
//             formData.forEach(function(value, key){
//                 object[key] = value;
//             });
            
//             const json = JSON.stringify(object);

//             request.send(json);

//             request.addEventListener('load', () => {
//                 if (request.status === 200) {
//                     console.log(request.response);
//                     statusMessage.textContent = message.success;
//                     form.reset();
//                     setTimeout(() => {
//                         statusMessage.remove();
//                     }, 2000);
//                 } else {
//                     statusMessage.textContent = message.fail;
//                 }
//             });


//         });
//     }



// 85 - beautiful user notification //

// function showThanksModal(message) {
    //     const prevModalDialog = document.querySelector('.modal__dialog');
    
    //     prevModalDialog.classList.add('hide');
    //     showModal();
    
    //     const thanksModal = document.createElement('div');
    //     thanksModal.classList.add('modal__dialog');
    //     thanksModal.innerHTML = `
    //         <div class="modal__content"> 
    //             <div class="modal__close" data-close>×</div>
    //             <div class="modal__title">${message}</div>
    //         </div>
    //     `;
    
    //     document.querySelector('.modal').append(thanksModal);
    //     setTimeout(() => {
        //         thanksModal.remove();
        //         prevModalDialog.classList.add('show');
        //         prevModalDialog.classList.remove('hide');
        //         closeModal();
        
        //     }, 4000);
        // }

        

// 86 - Promise ES6 //