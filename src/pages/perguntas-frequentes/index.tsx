import React from 'react'
import Accordion from '../../components/common/Accordion'
import Layout from '../../components/common/Layout/Layout'
import { fetchQuestionContent, QuestionContent } from '../../lib/questions'
import styles from './styles.module.scss'

const PerguntasFrequentes = ({
  questions,
}: {
  questions: QuestionContent[]
}) => {
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
  const questionsPath = process.cwd() + '/content/questions'

  const questions = fetchQuestionContent(questionsPath)
  return {
    props: { questions: questions },
    revalidate: 60 * 60 * 24, // 1 day in seconds
  }
}

export default PerguntasFrequentes
