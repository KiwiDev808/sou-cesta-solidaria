/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import imagem1 from '../../../../public/images/Banner/imagem1.png'
import imagem1mobile from '../../../../public/images/Banner/imagem1mobile.jpeg'
import imagem2 from '../../../../public/images/Banner/imagem2.png'
import imagem2mobile from '../../../../public/images/Banner/imagem2mobile.jpeg'
import imagem3 from '../../../../public/images/Banner/imagem3.png'
import imagem3mobile from '../../../../public/images/Banner/imagem3mobile.jpeg'
import styles from './styles.module.scss'

const images = [
  { desktop: imagem1.src, mobile: imagem1mobile.src },
  { desktop: imagem2.src, mobile: imagem2mobile.src },
  { desktop: imagem3.src, mobile: imagem3mobile.src },
]

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timeoutRef = React.useRef(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

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

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    )

    return () => {
      resetTimeout()
    }
  })

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
            return (
              <picture key={index}>
                <source srcSet={img.mobile} media="(max-width: 768px)" />
                <img src={img.desktop} alt="MDN" />
              </picture>
            )
          })}
      </div>
      <div className={styles.slideBadges}>
        {images.map((img, index) => {
          return (
            <span
              key={index}
              className={index === currentSlide ? styles.active : ''}
              onClick={() => setCurrentSlide(index)}
            ></span>
          )
        })}
      </div>
    </div>
  )
}
