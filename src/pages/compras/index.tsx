import React from 'react'
import Layout from '../../components/common/Layout/Layout'
import { CardProduto } from '../../components/Loja/CardProduto'
import { fetchProductContent } from '../../lib/products'
import styles from './styles.module.scss'

const Compras = ({ products }: { products: ProductContent[] }) => {
  return (
    <Layout title="Compras - Sou Cesta Solidária">
      <div className={styles.lojaContainer}>
        <h2>Assinaturas</h2>
        <div className={styles.listaProdutos}>
          {products.map((product, index) => {
            return (
              <CardProduto
                key={index}
                image={product.image}
                name={product.title}
                value={product.price}
                size={product.type}
                link={product.url}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const productsPath = process.cwd() + '/content/products'

  const products = fetchProductContent(productsPath)
  return {
    props: { products }, // will be passed to the page component as props
  }
}

export default Compras
