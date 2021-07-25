/* eslint-disable @next/next/no-img-element */
import { Hidden } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import logo from '../../../../public/images/logo.png'
import { HeaderMenu } from './HeaderMenu'
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
          <Link href="/voluntario" passHref>
            <button>Seja Voluntario</button>
          </Link>
        </div>
        <Hidden smDown>
          <nav className={styles.navLinks}>
            <Link href="/">
              <a>Inicio</a>
            </Link>
            <Link href="/loja">
              <a>Loja</a>
            </Link>
            <Link href="/sobre">
              <a>Sobre Nós</a>
            </Link>
            <Link href="/perguntas-frequentes">
              <a>Perguntas Frequentes</a>
            </Link>
            <Link href="/imprensa">
              <a>Imprensa</a>
            </Link>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </nav>
        </Hidden>
        <Hidden mdUp>
          <HeaderMenu />
        </Hidden>
      </div>
    </header>
  )
}

export default Header
