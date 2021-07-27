import React from 'react'
import { attributes, react as Sample } from '../../content/home.md'
import Layout from '../components/common/Layout/Layout'

export default function Teste() {
  let { title, cats } = attributes

  return (
    <Layout title="Sou Cesta Solidária">
      <div>
        <h1>{title}mudado</h1>
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
