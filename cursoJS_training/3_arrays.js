//* ARRAYS
[1, 2, 3, 4]

//En js puedes tener varios tipos de datos dentro de un array
["hola", 2, 3, 4, [1, 2, 3], false, null, undefined]

const numbers = [1, 2, 3]
numbers[2] //la posicion 2 tiene al numero 3


//* MÉTODOS Y PROPIEDADES
const frutas = ["manzana", "pera", "plátano", "fresa"]
frutas.length //2
frutas.length = 2 //cortamos el arreglo para que tenga los primeros 2 elementos
console.log(frutas)

// Los métodos son funciones que tienen los arrays 
frutas.push('melocotón') //nos permite añadir nuevos elementos al array, al final

frutas.pop() //saca el útlimo elemento del array y lo devuelve

frutas.shift() //saca el primero y lo devuelve
pera = frutas.shift() //manzana tiene 'pera', no manzana porque ese lo sacamos arriba
console.log(frutas) //ya no tiene ni el primero ni el ultimo

frutas.unshift('fresa') //añade al inicio
console.log(frutas)

frutas.push('mango', 'aguacate', 'naranja') //puedes añadir más de uno

// concatenar arrays
const numbers1 = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers1.concat(numbers2)

console.log(allNumbers)

// Otra forma de concatenar:
const allNumbersSpread = [...numbers1, ...numbers2]
console.log(allNumbersSpread)



//* ITERACIÓN DE ARRAYS
let frutas2 = ['😎', '🚀', '🥳']

let i = 0

while (i < frutas2.length) {
    console.log(frutas2[i])
    i++
}

// con for
for (let i = 0; i < frutas2.length; i++) {
    console.log(frutas2[i])
}

// foreach
for (let i = frutas2.length - 1; i >= 0; i--) {
    console.log(frutas2[i]) // imprime el elemento en la posición i
}

// otro tipo de for 
for (const fruta of frutas2) {
    console.log(fruta)
}

// otro tipo de foreach (con una función dentro)
frutas2.forEach(function(el, index) {
    console.log('index: ' + index)
    console.log(el)
})

// foreach con arrow function
frutas2.forEach(el => {
    console.log(el)
})



//* BÚSQUEDA EN ARRAYS CON MÉTODOS
//? INDEX OF
// El método indexOf te permite encontrar la posición de un elemento dentro de un Array. Si el elemento no existe, entonces retorna -1.

const emojis = ['✨', '🥑', '😍']
const posicionCorazon = emojis.indexOf('😍')
console.log(posicionCorazon) // -> 2



//?  INCLUDES
// El método includes determina si un Array incluye un determinado elemento, devolviendo true o false según corresponda.
const tieneCorazon = emojis.includes('😍')
console.log(tieneCorazon) // -> true



//? SOME
// El método some te permite verificar si al menos uno de los elementos de un Array cumple con una condición.
const tieneCorazon2 = emojis.some(emoji => emoji === '😍')
console.log(tieneCorazon) // -> true

// Otro ejemplo, si un elemento tiene un string de más de 3 caracteres
// el método some deja de iterar cuando encuentra un elemento que cumple con la condición
const names = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false

//! Algo importante a tener en cuenta es que el método some deja de iterar sobre el Array en cuanto encuentra un elemento que cumple con la condición. Por ejemplo, si tenemos un Array de 10 elementos y el elemento número 3 cumple con la condición, el método some no va a iterar sobre los 7 elementos restantes:
const numbers10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers10.some(number_ => {
    console.log(`Estoy iterando sobre el número ${number_}`) // -> Imprime hasta el número 6
    return number_ > 5
})

console.log(tieneNumeroMayorA5) // -> true



//? EVERY
// Permite verificar si todos los elementos de un array cumplen con una condición, en lugar de verificar si al menos uno (como some), los verifica todos

// Si todos los elementos retornan true, entonces el método every retorna true, si al menos uno retorna false, el método retorna false
// ¿Todos los emojis son felices?
const emojisEvery = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojisEvery.every(emojiEvery => emojiEvery === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbersEvery = [2, 4, 7, 10, 12]
const todosSonPares = numbersEvery.every(numberEvery => numberEvery % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const namesEvery = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = namesEvery.every(nameEvery => nameEvery.length > 3)
console.log(todosLosNombresSonLargos) // -> true



//? FIND
// El método find te permite encontrar el primer elemento que cumple con una condición.
// FIND te devuelve un elemento en sí, no un bolenano como some y every
const numbersFind = [13, 27, 44, -10, 81]
    // encuentra el primer número negativo
const firstNegativeNumber = numbersFind.find(numberFind => numberFind < 0)

console.log(firstNegativeNumber) // -> -

//! Si no encuentra nada regresa un undefined, no regresa null
const numbersFind2 = [13, 27, 44, 81]
    // encuentra el primer número negativo
const firstNegativeNumber2 = numbersFind2.find(numberFind2 => numberFind2 < 0)

console.log(firstNegativeNumber2) // -> undefined


//? FIND INDEX 
// similar a find, pero en lugar de devolver el elemento que cumple con la condición devuelve el índice
const numbersFIndex = [13, 27, 44, -10, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbersFIndex.findIndex(numberFIndex => numberFIndex < 0)

console.log(firstNegativeNumberIndex) // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbersFIndex[firstNegativeNumberIndex]) // -> -10

// Si no encuentra ningún elemento retorna -1




//* ORDENAMIENTO DE ARRAYS EN JS

// ? sort()
// sirve para ordenar un arreglo por caracteres
const numsSort = [5, 10, 2, 25, 7]
numsSort.sort() //!ordena caracteres, NO ints por lo que el resultado es conforme el valor que tiene como caracter (supongo que en ASCI)
console.log(numsSort) // [10, 2, 25, 5, 7]


//? Sort numérico
numsSort.sort(function(a, b) { //otra forma de poner la función es con arrow function: nums.sort((a, b) => a - b)
    return a - b
        // return de un valor negativo significa que a va delante de b
        // return de un valor positivo significa que b va delante de a
        // return 0 significa que están en la misma posición
})

console.log(numsSort) //ahora sí xd, [2, 5, 7, 10, 25]

// ? toSorted()
//Si quieres obtener un array ordenado sin modificar el original, puedes usar el método .toSorted(). Sólo ten en cuenta que, ahora mismo, su soporte en navegadores es limitado .
let numsToSorted = [5, 10, 2, 25, 7]

let numerosOrdenados = numsToSorted.toSorted((a, b) => {
    return a - b
})

console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numsToSorted) // [5, 10, 2, 25, 7]

// ? operador de propagación ...
// También podrías usar el operador de propagación (...) para crear una copia del array original y ordenarla:
let numsProp = [5, 10, 2, 25, 7]

const copiaNumeros = [...numsProp]
    // ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b)

console.log(copiaNumeros) // [2, 5, 7, 10, 25]
console.log(numsProp) // [5, 10, 2, 25, 7]




//* TRANSFORMACIÓN DE ARRAYS EN JS

//? FILTER
// Crea un nuevo array con todos los elementos que devuelven true al ejecutar una función que le pasamos como parámetro

const numsfilter = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numsfilter.filter(function(number) {
    return number % 2 === 0
})

console.log(evenNumbers) // [2, 4, 6]

//? INCLUDE
// usamos este para saber si una cadena contiene otra
const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'))

console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']

//? MAP
// Crea un nuevo array de la misma longitud que el original, pero con los elementos transformados por una función que le pasamos como parámetro
const numbersMap = [1, 2, 3]

const doubleNumbers = numbersMap.map((numbersMap) => {
    return numbersMap * 2
})

console.log(doubleNumbers) //[2, 4, 6]

//! el map también sirve para crear arrays de ints derivados de arrays de cadenas, ejemplo abajo
// O podríamos crear un array con la longitud de cada cadena de texto de un array de cadenas:
const stringsMap = ['hola', 'javascript', 'midu', 'programación']

const stringsLength = stringsMap.map((string) => string.length)

console.log(stringsLength) // [4, 10, 4, 12]



//? MAP + FILTER
// De esta forma podemos crear un encadenamiento de métodos; si un método devuelve un array, podemos llamar a otro sobre ese array sin necesidad de guardarlo en una variable.

const nuums = [1, 2, 3, 4, 5, 6, 7]

const numsGreaterThanFive = nuums
    .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
    .filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]


//? REDUCE
// Permite crear un unico valor a partir de un Array
// Recibe 2 parámetros: una función que se ejecutará por cada elemento y un valor inicial

//! El primer parámetro de reduce, que es la función que se ejecutará por cada elemento, recibe tres parámetros:
//! El acumulador: el valor que se va a ir acumulando en cada iteración
//! El elemento actual: el elemento del Array que estamos iterando en ese momento.
//! El índice: la posición del elemento actual en el Array.
//! Y debe devolver el valor que se va a acumular en cada iteración.

const numsRed = [1, 2, 3]

const sum = numsRed.reduce((accumulator, currentNumber) => {
        return accumulator + currentNumber
    }, 0) // <- el 0 es el valor inicial

console.log(sum) // 6

// Vamos a ver qué está pasando en cada iteración:

// Iteración 1: el acumulador vale 0 (ya que 0 es el valor inicial) y el elemento actual vale 1. Así que devolvemos 0 + 1 = 1
// Iteración 2: el acumulador vale 1 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 2. Así que devolvemos 1 + 2 = 3
// Iteración 3: el acumulador vale 3 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 3. Así que devolvemos 3 + 3 = 6


//? MATRICES
// Tiene filas y columnas

const matriz = [
    [1, 2, 3],
    [4, 5, 6]
]

//   Para acceder a un elemento
let numero = matriz[1][2]
console.log(numero) // -> 6

// Iterar en matrices
for (let i = 0; i < matriz.length; i++) { // {1}
    for (let j = 0; j < matriz[i].length; j++) { // {2}
        console.log(matriz[i][j])
    }
}



//*ALGORITMOS CON ARRAYS
// Serie de pasos que se realizan para resolver un problema

//? Encontrar el número mayor
function findMaxAlgorithm(array) {
    let max = array[0] // recuperamos el primer elemento del array

    // recorremos el array desde el segundo elemento
    for (let i = 1; i < array.length; i++) {
        // ¿es el elemento actual mayor que el máximo?
        if (array[i] > max) {
            // si es así, lo guardamos como nuevo máximo
            max = array[i]
        }
    }

    // devolvemos el máximo número que hemos encontrado
    return max;
}

//? Calcular complejidad algorítmica
// En programación se usa la notación O(n) para indicar que el número de operaciones que se realizan es igual al número de elementos del array.

//? Búsqueda normal en un array
function findNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true
        }
    }

    return false
}

//? Búsqueda binaria
function busquedaBinaria(array, elemento) {
    let index = 0 // primer elemento del array
    let final = array.length - 1 // último elemento del array a buscar

    // mientras el índice sea menor o igual que el final
    // seguiremos buscando
    while (index <= final) {
        // calculamos la mitad del array
        // como puede ser impar, usamos Math.floor para redondear hacia abajo
        const mitad = Math.floor((index + final) / 2)

        // si el elemento de la mitad es igual al elemento que estamos buscando
        // entonces hemos encontrado el elemento
        if (array[mitad] === elemento) {
            return mitad
        } else if (array[mitad] < elemento) {
            // si el elemento de la mitad es menor que
            // el elemento que estamos buscando
            // entonces tenemos que buscar en la mitad derecha
            index = mitad + 1
        } else {
            // si el elemento de la mitad es mayor que
            // el elemento que estamos buscando
            // entonces tenemos que buscar en la mitad izquierda
            final = mitad - 1
        }
    }

    // si llegamos hasta aquí, es que no hemos encontrado el elemento
    // devolvemos -1, para indicar que no se ha encontrado
    return -1
}