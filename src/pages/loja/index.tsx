import React from 'react'
import imagem1cesta from '../../../public/images/Loja/cesta solidaria_produtos1.png'
import imagem2cesta from '../../../public/images/Loja/cesta solidaria_produtos2.png'
import imagem4cesta from '../../../public/images/Loja/cesta solidaria_produtos4.png'
import imagem6cesta from '../../../public/images/Loja/cesta solidaria_produtos6.png'
import Layout from '../../components/common/Layout/Layout'
import { CardProduto } from '../../components/Loja/CardProduto'
import styles from './styles.module.scss'

const produtos = [
  {
    image: imagem1cesta.src,
    name: 'Cesta Orgânica',
    value: '99,00',
    size: '1 Cesta',
    link: 'https://mpago.la/2h68hZi',
  },
  {
    image: imagem2cesta.src,
    name: 'Cesta Orgânica',
    value: '198,00',
    size: '2 Cestas',
    link: 'https://mpago.la/11JXbuS',
  },
  {
    image: imagem4cesta.src,
    name: 'Cesta Orgânica',
    value: '396,00',
    size: '4 Cestas',
    link: 'https://mpago.la/2XgBz1T',
  },
  {
    image: imagem6cesta.src,
    name: 'Cesta Orgânica',
    value: '594,00',
    size: '6 Cestas',
    link: 'https://mpago.la/1uK4x3g',
  },
]

const Loja = () => {
  return (
    <Layout title="Loja - Sou Cesta Solidária">
      <div className={styles.lojaContainer}>
        <h2>Produtos</h2>
        <div className={styles.listaProdutos}>
          {produtos.map((produto, index) => {
            return (
              <CardProduto
                key={index}
                image={produto.image}
                name={produto.name}
                value={produto.value}
                size={produto.size}
                link={produto.link}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Loja
