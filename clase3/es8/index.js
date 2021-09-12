// * 2017
// * Nuevas caracteristicas ECMAScript8

// ? Object entries (genera una matriz)
const data = {
  frontend: 'Braian',
  backend: 'Pim',
  design: 'Lorena'
}
const entries = Object.entries(data)
console.log('entries', entries)



// ? Object values (genera arreglo de string con valores de objetos)
const data = {
  frontend: 'Braian',
  backend: 'Pim',
  design: 'Lorena'
}
const values = Object.values(data)
console.log('values', values)



// ? Padding (agrega caracteres antes o despues de un string)
const string = 'hello'
console.log('string', string.padStart(7, 'hi'))
console.log('string', string.padEnd(12, ' ----'))



// ? async - await 
const helloWorld = () => {
  return new Promise((resolve, reject) => true 
  ? setTimeout(() => resolve('Hello World'), 3000) 
  : reject(new Error('Test Error')))
}

const helloAsync = async () => {
  try {
    const hello = await helloWorld();
    console.log('response', hello)
  } catch (error) {
    console.log('error', error)    
  }
}

helloAsync();