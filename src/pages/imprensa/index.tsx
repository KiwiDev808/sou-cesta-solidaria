import React from 'react'
import Layout from '../../components/common/Layout/Layout'
import { fetchMediaContent, MediaContent } from '../../lib/media'
import styles from './styles.module.scss'

const Imprensa = ({ media }: { media: MediaContent[] }) => {
  return (
    <Layout title="Imprensa - Sou Cesta Solidária">
      <div className={styles.imprensaContainer}>
        <h2>imprensa</h2>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const mediaPath = process.cwd() + '/content/media'
  const media = fetchMediaContent(mediaPath)
  return {
    props: { media }, // will be passed to the page component as props
  }
}

export default Imprensa
