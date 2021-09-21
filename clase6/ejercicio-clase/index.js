// Crea en JSBIN una promesa que resuelva en tres segundos un array de objetos de tipo producto. 
// Al resolver, imprímelos en consola { id: string, name: string, description: string, stock: number }

const data = {
  id: '1',
  name: 'Esteban Quito',
  description: 'Es de madera',
  stock: 10
}

function testPromise(status) {
  return new Promise((resolve, reject) => {
      setTimeout(() => status 
        ? resolve(data)
        : reject('Reject')   
      , 3000)        
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

testPromise(true)