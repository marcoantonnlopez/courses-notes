//* FUNCIONES NORMALES

function saludar(usuario) {
    console.log("Hola, " + usuario)
}

saludar("Marco");


// * FUNCTION EXPRESS
// Se dclara primero la variable

function sum(a, b) {
    return a + b;
}

sum(1, 2) //3

// La principal diferencia entre una declaración de función y una función de expresión en JavaScript es cómo se tratan durante la fase de compilación del código, y cómo se asignan en memoria durante la fase de ejecución del código. La declaración de función se eleva (hoisted) al principio del ámbito, mientras que la función de expresión no.
// El hoisting solo se aplica a las declaraciones de función. Las funciones de expresión no se elevan (hoisted) al principio del ámbito, por lo que no se pueden usar antes de ser declaradas.

// * FUNCIONES FLECHA
// Es otra forma de declarar una función
const sumar = (a, b) => a + b

const saludar = nombre => {
        console.log("Hola" + nombre)
    }
    // ! las funciones flecha tienen un return implícito pero este solo funciona si no usas las llaves (ej: const sum = (a, b) => { a + b } ), en el ejemplo anterior regresaría undefined. Al usar llaves, debes usar el return para indicar lo que quieres devolver

// ?a continuación vamos a pasar una función regular a una función flecha:

// Declaración de función regular
function sumar(a, b) {
    return a + b
}

// Función flecha
const sumarFlecha = (a, b) => {
    return a + b
}

// Función flecha con return implícito
const sumarFlecha_ = (a, b) => a + b

//* RECURSIVIDAD  -> Es que una función se llame a sí misma

function cuentaAtras(numero) {
    if (numero < 0) { return } //si numero es menor que cero se acaba, sino, continua

    console.log(numero)
}

cuentaAtras(3) //al final imprimiría 3, 2, 1, 0

// función para factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

const resultao = factorial(5)
console.log(resultao)