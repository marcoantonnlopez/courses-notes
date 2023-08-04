//*TIPOS DE DATOS
// A día de hoy existen 9 tipos de datos distintos en JavaScript (aunque en el futuro puede que se añadan más). Lo que están divididos en 2 grandes grupos: los tipos primitivos y los no primitivos.
// numeros 1,2, 3, .., Infinity, 2.952313
// tipos de operaciones
1 + 2
6 - 4
2 / 2
4 * 5
2 % 2
3 ** 3
2 + 2 * 3;
(2 + 2) * 3;
'Esta es mi primera linea'

//* OPERADORES LÓGICOS

true || false //true
true || true //true
false || false //false
    !false //true



//*  VARIABLES
let number = 4
number + 2
number += 2


let texto
texto = "Hola"

let numero = 10
let otroNumero = numero
otroNumero

// ? camelCase, snake_case, SCREAMING_CASE
// las variables const en JS no se pueden reasignar, además solo si es una variable const siempre hay que asignar un valor a la variable


//* NULL Y UNDEFINED
// Null es que la variable no tiene un valor y undefined es que el valor no está definido
// además podemos asignar undefined a una variable
let rolloDePapel = undefined // -> undefined
    // y null
let rolloDePapel2 = null

//* Typeof
// Te dice el tipo de dato de la variable o el dato
typeof undefined // "undefined"
typeof true // "boolean"
typeof 42 // "number"
typeof "Hola mundo" // "string"
typeof null // "object"

// ? DATO INTERESANTE: si quieres comprobar si una variable es null debes usar una comparación estricta ===
const foo = null
foo === null // true

// typeof es util cuando quieres hacer una comparación:
const age = 42
typeof age === "number" // true



//* CONSOLE.___
// Conozco el console.log() pero hay otros
console.error('Error') //Imprime un mensaje de error en la consola
    // ❌ Error
console.warn('Advertencia') //Imprime un mensaje de advertencia en consola
    // ⚠️ Advertencia
console.info('Información') //Imprime un mensaje de información en la consola
    // ℹ️ Información