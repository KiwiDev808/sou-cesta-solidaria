import React from 'react'
import background from '../../../../../public/images/HeroSection/thid-section-image.jpg'
import styles from './styles.module.scss'

export const ThirdSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      ></div>
      <div className={styles.text}>
        <h2>Participe deste movimento e ganhe mais saúde e bem-estar</h2>
        <p>
          Este é um bom momento para o consumo de orgânicos. Orgânico significa
          trabalhar com a terra, com a natureza. Estamos no melhor período para
          apoio e o consumo dos produtores das hortas.
        </p>
        <ul>
          <li>Muito mais sabor</li>
          <li>Ética de cultivo</li>
          <li>Produtividade sustentável</li>
          <li>Colheita planejada</li>
        </ul>
      </div>
    </div>
  )
}
