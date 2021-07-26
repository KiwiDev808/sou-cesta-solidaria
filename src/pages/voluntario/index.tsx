/* eslint-disable @next/next/no-img-element */
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React, { useState } from 'react'
import { Button } from '../../components/common/Button'
import Input from '../../components/common/Control/Input'
import Select from '../../components/common/Control/Select'
import Layout from '../../components/common/Layout/Layout'
import ModalVoluntario from './ModalVoluntario/ModalVoluntario'
import styles from './styles.module.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
)

const Voluntario = () => {
  const currencies = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espirito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
  ]

  const [isModalVisible, SetIsModalVisible] = useState(false)
  const classes = useStyles()
  const [currency, setCurrency] = React.useState('SP')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }
  return (
    <Layout title="Voluntário - Sou Cesta Solidária">
      <div className={styles.voluntariosWrapper}>
        <div className={styles.infoVoluntario}>
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
        <form
          className={styles.formVoluntario}
          noValidate
          autoComplete="off"
          action="mailto:soucestasolidaria@gmail.com"
          method="POST"
          encType="multipart/form-data"
          name="Inscricao Voluntário"
        >
          <h2>Cadastrar-se como voluntário e ajude a mudar vidas!</h2>
          <div>
            <h3>Seja bem vindx!</h3>
            <p>
              A iniciativa social e sem fins lucrativos Sou Cesta Solidária tem
              por objetivo nutrir com produtos orgânicos para trazer mais saúde
              para todos, ao mesmo tempo em que fortalece o pequeno produtor e
              famílias e grupos em situação de vulnerabilidade social, como
              moradores de rua, através de doações de alimentos, vestuário e
              outros insumos aos grupos que atendem esses grupos. Pedimos a
              gentileza de que você, candidatx, preencha este Ficha de Interesse
              com suas informações, e, caso identifiquemos compatibilidade do
              seu perfil com o projeto, retornaremos o contato.
            </p>
          </div>
          <div className={styles.formInputs}>
            <Input label="Nome:" type="text" />
            <Input label="E-mail:" type="email" />
            <Input label="Tel/WhatsApp:" type="tel" />
            <Input type="date" />
            <Input label="Cidade:" type="text" />
            <Select
              label="Estado"
              value={currency}
              onChange={handleChange}
              options={currencies}
            />
            <Input id="standard-basic" label="Cep:" type="text" />
            <Input id="standard-basic" label="Endereço:" type="text" />
            <Input id="standard-basic" label="Numero:" type="text" />
            <Button>Enviar</Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Voluntario
