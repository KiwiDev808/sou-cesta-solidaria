/* eslint-disable @next/next/no-img-element */
import { Hidden } from '@material-ui/core'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../../../public/images/logo.jpeg'
import { Button } from '../Button'
import ModalAux from '../Modal'
import { HeaderMenu } from './HeaderMenu'
import styles from './styles.module.scss'

const Header = () => {
  const [modal, setModal] = useState(false)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src={logo.src} alt="site logo" />
      </div>
      <div className={styles.navigationArea}>
        <div className={styles.userArea}>
          <Button onClick={() => setModal(true)}>Doe agora</Button>
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

      <ModalAux open={modal} handleClose={() => setModal(false)}>
        <div>
          <h3>Doação</h3>
        </div>
      </ModalAux>
    </header>
  )
}

export default Header
