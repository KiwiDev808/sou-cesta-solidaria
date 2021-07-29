import React from 'react'
import Accordion from '../../components/common/Accordion'
import Layout from '../../components/common/Layout/Layout'
import { fetchQuestionContent } from '../../lib/questions'
import styles from './styles.module.scss'

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
  const questions = fetchQuestionContent()
  return {
    props: { questions: questions }, // will be passed to the page component as props
  }
}

export default PerguntasFrequentes
