/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './styles.module.scss'

type CardProps = {
  url: string
  alt: string
  description: string
}

export const Card = (props: CardProps) => {
  const { url, alt, description } = props
  return (
    <div className={styles.cardContainer}>
      <div>
        <img src={url} alt={alt} />
      </div>
      <p>{description}</p>
    </div>
  )
}
