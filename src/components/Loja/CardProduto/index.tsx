/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const CardProduto = (props) => {
  const { image, name, value, size } = props
  return (
    <div>
      <div>
        <img src={image} alt="product photo" />
        <h3>{name}</h3>
        <h4>{size}</h4>
        <div>
          <div>
            <p>Cada cesta</p>
            <h5>
              R$ <span>{value}</span>
            </h5>
          </div>
        </div>
        <div>
          <a>Plano Mensal</a>
          <a>Plano Trimestral</a>
          <a>Avulso</a>
        </div>
      </div>
    </div>
  )
}
