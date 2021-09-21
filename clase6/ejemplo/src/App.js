import React, { useEffect, useState } from 'react';
import PRODUTCS_MOCK from './mocks/products';
import Product from './components/Product';
import styles from './app.module.css'

function App() {

  const [misProductos, setMisProductos] = useState(null)

  useEffect(() => {
    // * Opcion 1: con promesas
    // setProductsPromise()

    // * Opcion 2: con async-await
    getProductAsyncAwait()
  }, [])

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => PRODUTCS_MOCK 
        ? resolve(PRODUTCS_MOCK)
        : reject(new Error('getProducts Error'))   
      , 1000)        
    })
  }

  // DATO: El uso de promesas se incorporo en el ES6 y su sintaxis es la siguiente:
  /**
   * EJ:
   * const helloPromise = () => new Promise((resolve, reject) => true ? resolve('todo ok') : reject('todo mal'))
   *
   * helloPromise()
   *   .then(res => console.log('res', res))
   *   .catch(err => console.log('err', err))
   */
  const setProductsPromise = () => {
    getProducts()
      .then(response => setMisProductos(response))
      .catch(error => console.log(`ERROR`, 'Algo malio sal', error))
  }

  // DATO: El uso de Async/Await se incorporo en el ES8 y su sintaxis es la siguiente:
  /**
   * EJ:
   * const helloPromise = () => new Promise((resolve, reject) => true ? resolve('todo ok') : reject('todo mal'))
   *
   * const helloAsync = async () => {
   *   try {
   *     const hello = await helloPromise();
   *     console.log('response', hello)
   *   } catch (error) {
   *     console.log('error', error)    
   *   }
   * }
   */
  const getProductAsyncAwait = async () => {
    try {
      const products = await getProducts()
      setMisProductos(products)
    } catch (error) {
      console.log(`ERROR`, 'Algo malio sal', error)
    }
  }

  return (
    <div className={styles.App}>
      {misProductos ? misProductos.map(producto => <Product {...producto} />) : <span className={styles.loading}>Cargando productos...</span>}
    </div>
  );
}

export default App;
