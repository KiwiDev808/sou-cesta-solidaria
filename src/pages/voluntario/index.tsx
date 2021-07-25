/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Layout from '../../components/common/Layout/Layout'
import ModalVoluntario from './ModalVoluntario/ModalVoluntario'
import styles from './styles.module.scss'

const Voluntario = () => {
  const [isModalVisible, SetIsModalVisible] = useState(false)
  return (
    <Layout title="Voluntário - Sou Cesta Solidária">
      <div className={styles.voluntario}>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>O que é ser voluntário?</h2>
          <p>
            O voluntariado é sobre trocas - de experiência, conhecimento,
            serviço, apoio, cidadania, carinho, amor - existindo um ganho não
            apenas para a organização, mas também para o voluntário. É uma
            experiência para todes - independe de gênero, raça ou etnia - que
            permite conhecer novas realidades, se engajar em uma causa social,
            contribuir com suas habilidades, e até mesmo desenvolver novas
            competências
          </p>
          <button
            className={styles.buttonVoluntario}
            onClick={() => SetIsModalVisible(true)}
          >
            Confira a Lei do Voluntariado
          </button>
          {isModalVisible ? (
            <ModalVoluntario onClose={() => SetIsModalVisible(false)}>
              <h2>Lei do voluntariado</h2>
            </ModalVoluntario>
          ) : null}
        </div>
      </div>
      <form className={styles.cadastro}>
        <h2>Cadastrar-se como voluntário e ajude a mudar vidas!</h2>
        <label htmlFor="name">Nome:</label>
        <input id="name" type="text" />

        <label htmlFor="email">E-mail:</label>
        <input id="email" type="email" />
        <div className={styles.cadline}>
          <div>
            <label htmlFor="tel">Tel/WhatsApp:</label>
            <input id="tel" type="tel" />
          </div>
          <div>
            <label htmlFor="date">Data de Nascimento:</label>
            <input id="date" type="date" />
          </div>
        </div>

        <div className={styles.cadline}>
          <div>
            <label htmlFor="cep">Cidade:</label>
            <input id="cep" type="text" />
          </div>
          <div>
            <label htmlFor="estado">Estado:</label>
            <select id="estado">
              <option value="SP">São Paulo</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
          <div>
            <label htmlFor="cep">Cep:</label>
            <input id="cep" type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="endereco">Endereço:</label>
          <input id="endereco" type="text" />

          <label htmlFor="numro">Numero:</label>
          <input id="numro" type="text" />
        </div>
        <label htmlFor="endereco">Complemento:</label>
        <input id="complemento" type="text" />
        <div className={styles.cadhab}>
          <label htmlFor="habilidades">Habilidade: </label>
          <select name="" id="habilidades">
            <option>Organização</option>
            <option>Gerenciamento</option>
            <option>Comunicação</option>
            <option>Trabalho manual</option>
            <option>Cozinha</option>
            <option>Educação</option>
            <option>Outros</option>
          </select>
        </div>

        <button className={styles.btnEnviar} type="submit">
          Enviar
        </button>
      </form>
    </Layout>
  )
}

export default Voluntario
