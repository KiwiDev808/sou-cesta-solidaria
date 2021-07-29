/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { attributes, react as Sample } from '../../content/home.md'
import Layout from '../components/common/Layout/Layout'
import { fetchMediaContent, MediaContent } from '../lib/media'
import { fetchPostContent, ProductContent } from '../lib/products'

export default function Teste({
  posts,
  media,
}: {
  posts: ProductContent[]
  media: MediaContent[]
}) {
  console.log(posts)
  console.log(media)
  let { title, cats } = attributes

  return (
    <Layout title="Sou Cesta Solidária">
      <div>
        <h1>{title}</h1>
        <Sample />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const posts = fetchPostContent()
  const media = fetchMediaContent()
  return {
    props: { posts, media }, // will be passed to the page component as props
  }
}
