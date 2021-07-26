import React from 'react'
import Accordion from '../../components/common/Accordion'
import Layout from '../../components/common/Layout/Layout'
import styles from './styles.module.scss'

const PerguntasFrequentes = () => {
  return (
    <Layout title="Perguntas Frequentes - Sou Cesta Solidária">
      <div className={styles.perguntasFrequentesContainer}>
        <h2>perguntas frequentes</h2>
        <Accordion
          title="Como as cestas são produzidas?"
          description="Em datas estabelecidas e em período quinzenal, Fábio e membros participantes se reúnem para comprar alimentos orgânicos de pequenos agricultores, cultivos familiares e quilombolas. A organização das cestas é feita na Associação CuraoMundo, localizada na Rua João Francisco de Mello nr. 131, no Butantã. Dali saem para ser distribuídas nas datas agendadas e nos locais combinados pelos organizadores."
        />

        <Accordion
          title="Posso escolher os itens da Cesta Solidária?"
          description="A seleção é feita pela disponibilidade da natureza, portanto, não é possível escolher itens específicos. Desta forma, há também a redução do consumo de agrotóxicos e o aproveitamento máximo dos nutrientes das frutas, verduras e hortaliças da estação. A proposta é receber e se nutrir com a variedade que a terra dispõe para te presentear a cada cesta adquirida!"
        />

        <Accordion
          title="Onde retirar a cesta?"
          description="A distribuição é feita na própria Associação CuraoMundo em dois dias e horários a serem agendados e divulgados pelos organizadores."
        />

        <Accordion
          title="Como funcionam as doações para famílias e grupos de rua em vulnerabilidade social?"
          description="A cada cesta adquirida, famílias e grupos em situação de vulnerabilidade social da cidade de São Paulo também recebem uma cesta de alimentos e insumos disponíveis. Durante a compra dos alimentos, os organizadores contemplam uma quantidade de itens que serão destinados às doações. Se tiver interesse, você também pode ajudar doando itens que podem ser aproveitados por estas famílias, como roupas, brinquedos, livros, eletrodomésticos, móveis, entre outros."
        />

        <Accordion
          title="No que corresponde o custo da cesta?"
          description="O valor pago pela cesta inclui o custo dos alimentos, embalagem, transporte e outros custos para a manutenção e sustentabilidade da iniciativa. A iniciativa é sem fins lucrativos. Toda a equipe é formada por um rodízio de voluntários, que se dispõem a colaborar em cada etapa para a realização da cesta."
        />

        <Accordion
          title="Como é feita a escolha dos itens?"
          description="A Cesta Solidária segue como referência, para cestas de orgânicas e de doações, o guia brasileiro de alimentação do ministério da saúde, priorizando alimentos frescos, da estação, de fácil preparo e armazenamento, com maior valor nutricional e calórico."
        />
      </div>
    </Layout>
  )
}

export default PerguntasFrequentes
