/* eslint-disable @next/next/no-img-element */
import EmailIcon from '@material-ui/icons/Email'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import Link from 'next/link'
import React from 'react'
import logo from '../../../../public/images/logo.jpeg'
import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.siteMap}>
        <article className={styles.logo}>
          <Link href="/" passHref>
            <a>
              <img src={logo.src} alt="site logo" />
            </a>
          </Link>
        </article>
        <article className={styles.column1}>
          <h3>Sou Cesta Solidária</h3>
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
            <Link href="/voluntario" passHref>
              <a>Seja Voluntario</a>
            </Link>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </nav>
        </article>
        <article className={styles.socialMedia}>
          <h3>Contato</h3>
          <div className={styles.iconsContainer}>
            <a
              href="mailto:soucestasolidaria@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <EmailIcon />
                <span>soucestasolidaria@gmail.com</span>
              </article>
            </a>
            <a
              href="https://wa.me/5511937101020"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <WhatsAppIcon />
                <span>(11) 93710-1020</span>
              </article>
            </a>
            <a
              href="https://instagram.com/soucestasolidaria"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <InstagramIcon />
                <span>@soucestasolidaria</span>
              </article>
            </a>
            <a
              href="https://facebook.com/soucestasolidaria"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <FacebookIcon />
                <span>/soucestasolidaria</span>
              </article>
            </a>
          </div>
        </article>
      </section>
      <hr />
      <section className={styles.address}>
        <address>
          <p>
            © {new Date().getFullYear()} &nbsp; Sou Cesta Solidária. &nbsp;
            00.000.000/0000-00
            <br />
            Rua João Francisco de Mello, 131 &nbsp; São Paulo, SP &nbsp;&nbsp;
            05358-110
          </p>
        </address>
      </section>
    </div>
  )
}
