import React from 'react'
import styles from './styles.module.css'

const Product = ({name, stock, img, description, price}) => {
  return (
    <div className={styles.product}>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <span>{description}</span>
        <h5>${price}</h5>
        <h6>stock: {stock}</h6>
      </div>      
    </div>
  )
}

export default Product
