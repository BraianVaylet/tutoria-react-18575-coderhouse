// * 2015
// * Nuevas caracteristicas ECMAScript6

// ? valor por defecto
// es5
function newFunc(name, age) {
  var name = name || 'oscar'
  var age = age || 32
  console.log(name, age)
}
// es6
function newFuncEs6(name='oscar', age=32) {
  console.log(name, age)
}
newFunc();
newFuncEs6();



// ? templates literales
let hello = 'hello'
let world = 'world'
// es5
let epicPhrase = hello + ' ' + world
console.log('epicPhrase', epicPhrase)
// es6
let epicPhrase2 = `${hello} ${world}`
console.log('epicPhrase2', epicPhrase2)



// ? multiline string
// es5
let lorem = 'quiero escribir una frase epica! \n' + 'otra frase epica que necesitamos'
console.log('lorem', lorem)
// es6
let lorem2 = `quiero escribir una frase epica!
otra frase epica que necesitamos`
console.log('lorem2', lorem2)



// ? destructuring
let person = {
  'name': 'braian',
  'age': 29,
  'contry': 'Arg'
}
// es6
console.log(person.name, person.age, person.country)
// es6
let {name, age, country} = person
console.log(name, age, country)



// ? operador de propagación
// es6
let team1 = ['Braian', 'Mica', 'Pim']
let team2 = ['Zeus', 'Odin', 'Rah']
let teamMix = ['Luke', ...team1, ...team2]
console.log('team3', team3)



// ? asignaciones
// es5
var hola = 'hola'
// es6
let hola2 = 'hola2'
const hola3 = 'hola3'
// test
{
  var globalVar = 'global var'
}
{
  let globalLet = 'global let'
}
{
  const globalConst = 'global const'
}
console.log('globalVar', globalVar)
console.log('globalConst', globalConst) // ! err
console.log('globalLet', globalLet)     // ! err



// ? propiedad de objetos mejorada
let name = 'braoan'
let age = 29
// es5
obj = {name: name, age: age}
// esg
obj2 = {name, age}



// ? arrow function
const names = [{name: 'Braian', age: 29}, {name: 'Pim', age: 0.4}]
// es5
let listOfNames = names.map(function(item) {
  console.log('item.name', item.name)
})
// es6
let listOfNames2 = names.map(item => console.log('item.name', item.name))
const square = num => num * num


 
// ? promesas
// es6
const helloPromise = () => new Promise((resolve, reject) => true ? resolve('todo ok') : reject('todo mal'))
helloPromise()
  .then(res => console.log('res', res))
  .catch(err => console.log('err', err))



// ? clases
// es6
class Calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }

  suma(valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }

  resta(valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA - this.valueB
  }
}
const calc = new Calculator()
console.log('Calculator->Suma', calc.suma(1,2))
console.log('Calculator->Resta', calc.resta(3,2))



// ? export & import
// es6
import hello from './module'
hello();



// ? generadores
// es6
function* helloWorld() {
  if(true) {
    yield 'Hello, '
    yield 'World'
  }
}
const generatorHello = helloWorld()
console.log('next1', generatorHello.next().value)
console.log('next2', generatorHello.next().value)
console.log('next3', generatorHello.next().value)