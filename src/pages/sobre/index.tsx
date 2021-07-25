import React from 'react'
import Layout from '../../components/common/Layout/Layout'
import styles from './styles.module.scss'

const Sobre = () => {
  return (
    <Layout title="Sobre - Sou Cesta Solidária">
      <div className={styles.sobreContainer}>
        <h1>sobre</h1>
        <section className={styles.firstSection}>
          <h2>O que é a cesta solidária?</h2>
          <p>
            Idealizada por Fábio Luis Vicente Tancredo, no início com a
            colaboração dos amigos e amigas, a Cesta Solidária se transformou
            num projeto sem fins lucrativos, feita por membros-colaboradores,
            com o objetivo de atender aos principais pilares:
          </p>
          <ul>
            <li>
              Oferecer alimentação natural, variada e de qualidade aos
              mantenedores (compradores das cestas) por um valor acessível;
            </li>
            <li>
              Apoiar e gerar renda direta para os agricultores familiares e
              quilombolas com a aquisição de suas pequenas produções;
            </li>
            <li>
              Fortalecer as famílias, povos e os grupos em situação de
              vulnerabilidade social ou de rua com a doação de alimentos,
              insumos e outros objetos, itens que por vezes podem ser doados
              pelos compradores na retirada das cestas;
            </li>
            <li>
              Buscar esforços para ser uma cooperativa de consumo e um
              prestativo entreposto de orgânicos.
            </li>
          </ul>
        </section>

        <section className={styles.secondSection}>
          <h2>Virtudes e Conceitos que acompanham a Cesta Solidária:</h2>
          <ul>
            <li>
              Aumentar o consumo, variedade e qualidade da alimentação natural;
            </li>

            <li>Promover soberania e segurança alimentar;</li>
            <li>
              Reduzir o uso de recursos naturais não-renováveis como plásticos,
              combustíveis, agrotóxicos e água;
            </li>
            <li>
              Formar hortas locais e uma cooperativa para consumo de orgânicos
              entre os participantes;
            </li>
            <li>
              Incentivar o intercâmbio de doações e outros itens que podem ser
              reaproveitados do que inutilizados e/ou acumulados;
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default Sobre
