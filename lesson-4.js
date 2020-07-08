//Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

// let getRandom = Math.floor(Math.random() * Math.floor(100));
// console.log(getRandom)

// Не совсем верно, т.к. код выше будет возвращать рандомные числа в диапазоне от 0 до 99 (100 включено не будет). Верный вариант:

const random = Math.floor(Math.random() * 101);
console.log(random);