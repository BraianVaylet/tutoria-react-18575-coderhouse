// * 2019
// * Nuevas caracteristicas ECMAScript10

// ? profundidad de un elemento
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
console.log('array', array.flat())
console.log('array', array.flat(2))



// ? flat map
let array = [1 , 2, 3, 4, 5]
console.log('array', array.flatMap(value => [value, value * 2]))



// ? trim (elimina espacios en blanco)
let hello = '                  hello world           '
console.log('hello', hello)
console.log('hello', hello.trimStart())
console.log('hello', hello.trimEnd())
console.log('hello', hello.trim()) // ambos



// ? opcional catch binding
try {
  console.log('true', true)
} catch { // ya no es necesario pasarle el error al catch ej catch(error)
  console.log('error', error)
}


// ? Object from entries (Convierte array de arrays a objeto con sus valors)
let entries = [["name", "braian"], ["age", 30]]
console.log('object', Object.fromEntries(entries))



// ? symbol
let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log('symbol', symbol.description)