import * as fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import path from 'path'
import React from 'react'
import Layout from '../../components/common/Layout/Layout'
import { CardProduto } from '../../components/Loja/CardProduto'
import styles from './styles.module.scss'

const productsDirectory = path.join(process.cwd(), '/content/products')

export type ProductContent = {
  readonly title: string
  readonly type: string
  readonly image: string
  readonly price: number
  readonly url: string
}

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

export async function getServerSideProps(context) {
  const fileNames = fs.readdirSync(productsDirectory)
  const allPostsData = fileNames
    .filter((it) => it.endsWith('.md'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(productsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })

      const matterData = matterResult.data as {
        title: string
        type: string
        image: string
        price: number
        url: string
      }

      return matterData
    })

  const products = allPostsData
  return {
    props: { products }, // will be passed to the page component as props
  }
}

export default Compras
