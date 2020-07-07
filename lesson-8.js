//Создайте произвольный массив Map.
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.

let myMap = new Map([
    ("apple", "green"),
    ("strawberry", "red"),
    ("blueberry", "blue")
]);

for (let key of myMap.keys()) {
    console.log(key);
}

for (let value of myMap.values()) {
    console.log(value);
}

alert("Ключ" key, "Значение" value)
