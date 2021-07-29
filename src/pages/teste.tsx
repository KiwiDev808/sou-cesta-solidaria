/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { attributes, react as Sample } from '../../content/home.md'
import Layout from '../components/common/Layout/Layout'
import { fetchMediaContent, MediaContent } from '../lib/media'
import { fetchPostContent, ProductContent } from '../lib/products'
import { fetchQuestionContent, QuestionContent } from '../lib/questions'

export default function Teste({
  posts,
  media,
  questions,
}: {
  posts: ProductContent[]
  media: MediaContent[]
  questions: QuestionContent[]
}) {
  console.log(posts)
  console.log(media)
  console.log(questions)
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
  const questions = fetchQuestionContent()
  return {
    props: { posts, media, questions }, // will be passed to the page component as props
  }
}
