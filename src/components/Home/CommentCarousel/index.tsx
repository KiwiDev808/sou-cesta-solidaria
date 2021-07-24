import React from 'react'
import styles from './styles.module.scss'

const comments = [
  {
    phrase: '“Dei fim à sujeira no meu corpo”',
    description:
      'Consumo mais orgânicos e emagreci sem esforço, sem mal-estar e o mais importante, com muita saúde.',
    person: 'Beatriz',
  },
  {
    phrase: '“Pratico a energia de ajudar os outros”',
    description:
      'Foi uma experiência muito boa, mudou minha visão de vida, enriqueceu minha luz. Gostei de participar.',
    person: 'Elisângela',
  },
  {
    phrase: '“Sabor e qualidade excelentes”',
    description:
      'Seleção de produtos muito boa, ótimo equilíbrio entre o preço e as propostas do projeto, virei um mantenedor.',
    person: 'Maurício',
  },
]

export const CommentCarousel = () => {
  return (
    <div className={styles.commentCarouselContainer}>
      {comments.map((comment, index) => {
        return (
          <article key={index} className={styles.comment}>
            <h3>{comment.phrase}</h3>
            <p>{comment.description}</p>
            <h4>{comment.person}</h4>
          </article>
        )
      })}
    </div>
  )
}
