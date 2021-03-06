import Head from 'next/head'
import React from 'react'
import { Footer } from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './styles.module.scss'

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Idealizada por Fábio Luis Vicente Tancredo, a Cesta Solidária é um projeto que busca oferecer alimentação natural, variada e de qualidade aos mantenedores (compradores das cestas) por um valor acessível."
      />
      <meta charSet="UTF-8" />
      <meta
        name="keywords"
        content="Vegano, Vegetal, Cesta Saudável, Saudável, Cesta Orgânica, Orgânico"
      />
      <meta name="author" content="Prajit Deva" />
    </Head>
    <div className={styles.layoutContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  </>
)

export default Layout
