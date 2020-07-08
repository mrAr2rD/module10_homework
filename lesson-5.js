//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

const Numbers = [1,2,3,4,5,6,7,8,9,0]
console.log(Numbers.length)
console.log(Object.keys(Numbers));

// код не совсем верно решает поставленную задачу. Кол-во элементов выводится верно, но последняя строка выводит индексы массива (ключи), а нужно выводить сами элементы (значения)
// верный вариант решения:

const arr = [0, null, NaN, 0, 1, 2, 4, "str"]
console.log("количество элементов: ", arr.length)

for (let i = 0; i < arr.length; i++) {
	console.log(`элемент arr[${i}] = ${arr[i]}`)
}
