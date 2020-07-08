//Создайте произвольный массив Map.
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.

let myMap = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
]);

for (let key of myMap.keys()) {
    console.log(key);
}

for (let value of myMap.values()) {
    console.log(value);
}

// alert("Ключ" key, "Значение" value)

// В коде была синтаксическая ошибка при объявлении Map с использованием массива (исправила выше). Также по заданию значения должны выводиться в консоль в виде «Ключ — Х, значение — Y». Правильный вариант решения:

let map = new Map();
map.set("key1", "prop1");
map.set("key2", "prop2");

const keys = map.keys();

for (let key of keys) {
  console.log(`Ключ - ${key}, значение - ${map.get(key)}`);
}
