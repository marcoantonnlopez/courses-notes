//* OBJETOS
// sirve para describir un objeto de la vida real

// Ejemplo objeto básico
const gameSystem = {
    // Propiedades. llaev: valor
    name: 'PS5',
    price: 550,
    company: 'Sony'
}

// Objeto anhidado
const gameSystem2 = {
    // Propiedades. llave: valor
    name: 'PS5',
    price: 550,
    company: 'Sony',
    games: ['God of war', 'Last of Us'], //arrays en objetos
    specs: { //objetos dentro de otros objetos
        cpu: 'AMD',
        gpu: 'AMD',
        ram: 16,
        disk: 800
    },
    runGame(game) { // métodos de los objetoss
        console.log(game)
    }
}

// ? Ejemplo objeto persona
const persona = {
    name: 'Dani',
    'nombre completo': 'Daniela Ramírez Hernandez', //la propiedad se pone entre comillas porque tiene un espacio
    isWorking: true,
    family: ['Miguel', 'Maria'],
    address: {
        street: 'Calle de la piruleta',
        number: 13,
        city: 'Barcelona'
    },
    walk: function() { // <- método
        console.log('Estoy caminando')
    }
}

//? Acceder a la propiedad
console.log(gameSystem.name)
console.log(gameSystem.price * 2)
console.log(gameSystem2.games[1])
console.log(gameSystem2.specs.ram)
gameSystem2.specs.ram
gameSystem2.runGame('Elden Ring')

// Otra notación sería
const propertyName = 'company'
gameSystem2[propertyName] //llamas a la propiedad company
persona['nombre completo'] //evita usar los espacios

const key = 'nombre completo'
persona[key]

// Si intentamos acceder a una propiedad o método que no existe, nos devolverá undefined
console.log(persona.fullName) // -> undefined

//? Añadir propiedades desde afuera
persona.age = 25
console.log(persona) // {name: 'Dani}, ... age: 25

//? Sobreescribir
persona.age = 30 //es lo mismo que añadir, solo que nada más lo modifica
console.log(persona.age)

//? Eliminar
delete persona.age
console.log(persona)




//* ATAJOS PARA OBJETOS
const name = 'Spidey'
const universe = 42

const spiderman = {
    name, //el atajo aquí es que se asocia name con el nombre de arriba sin tener que pponerle "name: name", esto solo si se llaman igual 
    universe, //<- automáticamente asigna el valor de la variable universe
    powers: ['net', 'invisibility', 'spider sense'],
    color: 'red',
    group: 'avengers',
    partner: {
        nameP: 'Mary Jane',
        universe: 42,
        powers: ['red hair', 'blue eyes']
    }
}

console.log(spiderman.name) //'Spidey'


//? DES ESTRUCTURACIÓN
const { powers, color, group } = spiderman //extrae 3 propiedades en las variables siempre y cuando se llamen igual

console.log(powers) //['net', 'invisibility', 'spider sense']

const { powerScore = 100 } = spiderman //aqui dices que si el objeto no tiene un powerScore, ponlo de 100. Esto no se guarda en el objeto, solo en la variable

console.log(powerScore) //100
console.log(spiderman.powerScore) //undefined

const { name: spideyName } = spiderman //aqui decimos que quieres guardar el name en una variable que se llama spideyname

console.log(spideyName) //'Spidey'

//? Acceder a Objetos anhidados
console.log(spiderman.partner.nameP) // 'Mary Jane'
console.log(spiderman['partner']['nameP']) // 'Mary Jane'

const { partner } = spiderman
const { nameP } = partner
console.log(nameP) // 'Mary Jane'



//* ITERANDO OBJETOS EN JS (RECORRIDO)
for (const property in spiderman) {
    console.log(`${property}: ${spiderman[property]}`);
}
// 'name: Spidey'
// 'universe: 42'
// 'powers: net,invisibility,spider sense'
// 'color: red'
// 'group: avengers'
// 'partner: [object Object]'

//? Transformar un objeto en un array
//  podemos utilizar el método Object.keys(), Object.values() o Object.entries().

//? Object.Key()
const properties = Object.keys(spiderman)

console.log(properties.length) // 6

// Imprime las propiedades xd
properties.forEach(property => {
    console.log(property)
})

// 'name'
// 'universe'
// 'powers'
// 'color'
// 'group'
// 'partner'


//? Iterando con Object.values()
// El método Object.values() retorna un array con los valores correspondientes a las propiedades enumerables de un objeto.

const values = Object.values(spiderman)

values.forEach(value => {
    console.log(value)
})

// 'Spidey'
// 42
// [ 'net', 'invisibility', 'spider sense' ]
// 'red'
// 'avengers'
// {
//   nameP: 'Mary Jane',
//   universe: 42,
//   powers: [ 'red hair', 'blue eyes' ]
// }


//? Object.entries()
// retorna un array de arrays donde cada subarray es un par [propiedad, valor] correspondiente a las propiedades enumerables de un objeto.
const entries = Object.entries(spiderman)

entries.forEach(entry => {
    console.log(entry)
})

// [ 'name', 'Spidey' ]
// [ 'universe', 42 ]
// [
//   'powers',
//   [ 'net', 'invisibility', 'spider sense' ]
// ]
// [ 'color', 'red' ]
// [ 'group', 'avengers' ]
// [
//   'partner',
//   {
//     nameP: 'Mary Jane',
//     universe: 42,
//     powers: [ 'red hair', 'blue eyes' ]
//   }
// ]




//? Operador de Encadenamiento Opcional
const gamesystem = {
    name: 'PS5',
    price: 550,
    specs: {
        cpu: 'AMD Ryzen Zen 2',
        gpu: 'AMD Radeon RDNA 2'
    }
}

gamesystem.specs.cpu //esto sí sirve

if (typeof gamesystem.specifications === 'object') { //esto es para comprobar si el objeto tiene esa propiedad
    console.log(gameSystem.specifications.cpu)
}

// Otra forma de verificación:

if (typeof gamesystem.specifications !== undefined && gamesystem.specifications !== null) { //esto es para comprobar si el objeto tiene esa propiedad
    console.log(gameSystem.specifications.cpu)
}