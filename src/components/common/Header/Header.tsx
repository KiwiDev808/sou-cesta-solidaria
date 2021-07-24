/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import logo from '../../../../public/images/logo.png'
import styles from './styles.module.scss'

const Header = () => {
  const router = useRouter()
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src={logo.src} alt="site logo" />
      </div>
      <div className={styles.navigationArea}>
        <div className={styles.userArea}>
          <button>Doe agora</button>
          <i className="fas fa-user-circle"></i>
        </div>
        <nav className={styles.navLinks}>
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/loja">
            <a>Loja</a>
          </Link>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
          <Link href="/">
            <a>Contato</a>
          </Link>
          <Link href="/voluntario" passHref>
            <button>Seja Voluntario</button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
