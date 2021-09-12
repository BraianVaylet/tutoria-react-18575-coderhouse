// * 2018
// * Nuevas caracteristicas ECMAScript9

// ? encapsular sin destructurar todo
const obj = {
  name: 'braian',
  age: 30,
  country: 'Arg'
}
let {name, ...all} = obj
console.log(name, all)



// ? propagacion-unión
const obj = {
  name: 'braian',
}
const obj1 = {
  ...obj,
  country: 'Arg',
}
console.log('obj1', obj1)



// ? promise finally
const helloWorld = () => {
  return new Promise((resolve, reject) => true ? resolve('Hello World') : reject(new Error('Test error')))
}

const helloWorldAsync = () => {
  return new Promise((resolve, reject) => true ? setTimeout(() => resolve('Hello World'), 3000) : reject(new Error('Test error')))
}

helloWorld()
  .then(response => console.log('response', response))
  .catch(error => console.log('error', error))
  .finally(() => console.log('finally', 'Finalizo')) // * new

helloWorldAsync()
  .then(response => console.log('response', response))
  .catch(error => console.log('error', error))
  .finally(() => console.log('finally', 'Finalizo')) // * new



// ? mejoras en regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ // creo regex para manejar la fecha
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day)