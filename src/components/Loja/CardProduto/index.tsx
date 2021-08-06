/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ProductContent } from '../../../lib/products'
import styles from './styles.module.scss'

export const CardProduto = (props: ProductContent) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <img src={props?.image} alt="product photo" />
      </div>
      <div className={styles.description}>
        <h3>{props.title}</h3>
        <h4>{props?.basket_size}</h4>
        <h5>{props?.basket_type}</h5>
        <h5>{props?.invoice_type}</h5>
      </div>
      <div className={styles.price}>
        <p>Cada cesta</p>
        <h4>
          R$ <span>{props?.price}</span>
        </h4>
      </div>
      <button
        className={styles.buyButton}
        onClick={() => {
          window.open(props?.url, 'newwindow', 'width=1000,height=600')
          return false
        }}
      >
        Comprar
      </button>
    </div>
  )
}
