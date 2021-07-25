/* eslint-disable @next/next/no-img-element */
import React from 'react'
import banner from '../../../../public/images/banner.jpeg'
import styles from './styles.module.scss'

export const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div>
        <img src={banner.src} alt="banner of site" />
      </div>
    </div>
  )
}
