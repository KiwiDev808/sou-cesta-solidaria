/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import imagem1 from '../../../../public/images/Banner/imagem1.png'
import imagem2 from '../../../../public/images/Banner/imagem2.png'
import imagem3 from '../../../../public/images/Banner/imagem3.png'
import styles from './styles.module.scss'

const images = [imagem1.src, imagem2.src, imagem3.src]
export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const previousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const nextSlide = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.leftArrow} onClick={previousSlide}>
        &#10094;
      </div>
      <div className={styles.rightArrow} onClick={nextSlide}>
        &#10095;
      </div>
      <div>
        {images
          .filter((img, index) => {
            return index === currentSlide
          })
          .map((img, index) => {
            return <img key={index} src={img} alt="banner" />
          })}
      </div>
      <div className={styles.slideBadges}>
        {images.map((img, index) => {
          return (
            <span key={index} onClick={() => setCurrentSlide(index)}></span>
          )
        })}
      </div>
    </div>
  )
}
