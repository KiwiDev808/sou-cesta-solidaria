import * as fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import path from 'path'
import React from 'react'
import Accordion from '../../components/common/Accordion'
import Layout from '../../components/common/Layout/Layout'
import styles from './styles.module.scss'

export type QuestionContent = {
  readonly title: string
  readonly body: string
}

const PerguntasFrequentes = ({ questions }) => {
  return (
    <Layout title="Perguntas Frequentes - Sou Cesta Solidária">
      <div className={styles.perguntasFrequentesContainer}>
        <h2>perguntas frequentes</h2>
        {questions.map((question, index) => {
          return (
            <Accordion
              key={index}
              title={question.title}
              description={question.body}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const questionsDirectory = path.join(process.cwd(), '/content/questions')

  const fileNames = fs.readdirSync(questionsDirectory)
  const allQuestionsData = fileNames
    .filter((it) => it.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(questionsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })

      const matterData = {
        title: matterResult.data?.title,
        body: matterResult.content,
      } as {
        title: string
        body: string
      }

      return matterData
    })

  const questions = allQuestionsData
  return {
    props: { questions: questions }, // will be passed to the page component as props
  }
}

export default PerguntasFrequentes
