import * as fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import path from 'path'
import React from 'react'
import Layout from '../../components/common/Layout/Layout'
import styles from './styles.module.scss'

export type MediaContent = {
  readonly title: string
  readonly image: string
  readonly url: string
  readonly date: Date
}

const Imprensa = ({ media }: { media: MediaContent[] }) => {
  return (
    <Layout title="Imprensa - Sou Cesta Solidária">
      <div className={styles.imprensaContainer}>
        <h2>imprensa</h2>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const mediaDirectory = path.join(process.cwd(), '/content/media')

  const fileNames = fs.readdirSync(mediaDirectory)
  const allMediaData = fileNames
    .filter((it) => it.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(mediaDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })

      const matterData = matterResult.data as {
        title: string
        image: string
        url: string
        date: Date
      }

      return matterData
    })

  const media = allMediaData
  return {
    props: { media }, // will be passed to the page component as props
  }
}

export default Imprensa
