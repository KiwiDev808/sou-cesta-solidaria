/* eslint-disable @next/next/no-img-element */
import { Hidden } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import logo from '../../../../public/images/logo.png'
import { Button } from '../Button'
import { HeaderMenu } from './HeaderMenu'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <a>
            <img src={logo.src} alt="site logo" />
          </a>
        </Link>
      </div>
      <div className={styles.navigationArea}>
        <div className={styles.userArea}>
          <Link href="/doacao" passHref>
            <Button>Doe Agora</Button>
          </Link>
          <Hidden smDown>
            <Link href="/voluntario" passHref>
              <Button>Seja Voluntario</Button>
            </Link>
          </Hidden>
        </div>
        <Hidden smDown>
          <nav className={styles.navLinks}>
            <Link href="/">
              <a>Inicio</a>
            </Link>
            <Link href="/compras">
              <a>Compras</a>
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
