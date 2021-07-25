import React from 'react'
import sampleImage from '../../../public/images/Loja/produto.jpg'
import Layout from '../../components/common/Layout/Layout'
import { CardProduto } from '../../components/Loja/CardProduto'
import styles from './styles.module.scss'

const Loja = () => {
  return (
    <Layout title="Loja - Sou Cesta Solidária">
      <div className={styles.lojaContainer}>
        <h2>Produtos</h2>
        <div className={styles.listaProdutos}>
          <CardProduto
            image={sampleImage.src}
            name="Cesta Orgânica"
            value={'99,00'}
            size="PADRÃO - 1"
            link="https://mpago.la/2h68hZi"
          />

          <CardProduto
            image={sampleImage.src}
            name="Cesta Orgânica"
            value={'396,00'}
            size="PADRÃO - 4"
            link="https://mpago.la/2XgBz1T"
          />
          <CardProduto
            image={sampleImage.src}
            name="Cesta Orgânica"
            value={'594,00'}
            size="PADRÃO - 6"
            link="https://mpago.la/1uK4x3g"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Loja
