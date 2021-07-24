import React from 'react'
import background from '../../../../../public/images/HeroSection/second-section-background.jpg'
import styles from './styles.module.scss'

export const SecondSection = () => {
  const backgroundUrl = background.src
  return (
    <div
      className={styles.sectionContainer}
      style={{
        backgroundImage: `linear-gradient(#00000051, #00000066), url(${backgroundUrl})`,
      }}
    >
      <h3 className={styles.firstHeading}>Conheça-nos melhor</h3>
      <h2 className={styles.secondHeading}>
        Produtores Organicos Precisam de Você
      </h2>
      <ul>
        <li>Centenas de Familias Amparadas</li>
        <li>Voluntariado Independente</li>
        <li>Sistema Quinzenal de Distribuição</li>
        <li>Economia Circular</li>
      </ul>
    </div>
  )
}
