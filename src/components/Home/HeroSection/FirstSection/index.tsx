import React from 'react'
import img1 from '../../../../../public/images/HeroSection/first-section-img1.jpg'
import img2 from '../../../../../public/images/HeroSection/first-section-img2.jpg'
import img3 from '../../../../../public/images/HeroSection/first-section-img3.jpg'
import { Card } from './Card'
import styles from './styles.module.scss'

export const FirstSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <h3 className={styles.firstHeading}>NOSSAS AÇÕES</h3>
      <h2 className={styles.secondHeading}>Ações Que Transformam o Mundo</h2>
      <div className={styles.cardsWrapper}>
        <Card
          {...{
            url: img1.src,
            alt: 'some cocoas on a box',
            description:
              'É uma iniciativa sem fins lucrativos, que visa oferecer alimentação natural, variada e de qualidade aos apoiadores por um valor acessível',
          }}
        />
        <Card
          {...{
            url: img2.src,
            alt: 'fruits in a box',
            description:
              'Desta forma gerando renda direta para os agricultores familiares e quilombolas através da aquisição de seus cultivos',
          }}
        />
        <Card
          {...{
            url: img3.src,
            alt: 'someone holding a  box with fruits',
            description:
              'Fazemos isso com uma rede de voluntários e mantenedores, pessoas que absorvem o projeto com sua participação ativa',
          }}
        />
      </div>
    </div>
  )
}
