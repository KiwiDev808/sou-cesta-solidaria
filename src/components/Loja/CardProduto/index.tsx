/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './styles.module.scss'

export const CardProduto = (props) => {
  const { image, name, value, size, link } = props
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="product photo" />
      </div>
      <div className={styles.description}>
        <h3>{name}</h3>
        <h4>{size}</h4>
      </div>
      <div className={styles.price}>
        <p>Cada cesta</p>
        <h4>
          R$ <span>{value}</span>
        </h4>
      </div>
      <button
        className={styles.buyButton}
        onClick={() => {
          window.open(link, 'newwindow', 'width=1000,height=600')
          return false
        }}
      >
        Comprar
      </button>
    </div>
  )
}
