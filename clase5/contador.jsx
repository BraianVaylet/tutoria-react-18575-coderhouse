/**
 * Clase5: Ejercicio hooks y state
 * Pueden agregar el componente a un proyecto de React o probarlo en https://stackblitz.com/
 * Se espera crear un contador que retorne el valor actual del mismo junto con la fecha actual del momento de la actualizacion.
 * Para este ejercicio hacemos uso del hook useState.
 */

import React, {useState} from 'react'

const contador = () => {
  const now = new Date().toLocaleString();
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>contar</button>
      <p>
        {count} - {now}
      </p>
    </div>
  )
}

export default contador
