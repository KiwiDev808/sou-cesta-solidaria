/* eslint-disable @next/next/no-img-element */
import MenuItem from '@material-ui/core/MenuItem'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { Button } from '../../components/common/Button'
import Input from '../../components/common/Control/Input'
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
  const estado = [
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
  const habilidades = [
    { value: 'Montagem de cestas', label: 'Montagem de cestas' },
    { value: 'Comunicação & Marketing', label: 'Comunicação & Marketing' },
    { value: 'Transporte/Logística', label: 'Transporte/Logística' },
    { value: 'Financeiro', label: 'Financeiro' },
    { value: 'Design/Mídias Sociais', label: 'Design/Mídias Sociais' },
    { value: 'Fotografia', label: 'Fotografia' },
    {
      value: 'Recrutamento e Seleção/T&D',
      label: 'Recrutamento e Seleção/T&D',
    },
    { value: 'Jurídico', label: 'Jurídico' },
    { value: 'Parcerias', label: 'Parcerias' },
    { value: 'TI', label: 'TI' },
    {
      value: 'Outros',
      label: 'Outros: Especifique na mensagem!',
    },
  ]

  const [isModalVisible, SetIsModalVisible] = useState(false)
  const classes = useStyles()
  const [currency, setCurrency] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }
  return (
    <Layout title="Voluntário - Sou Cesta Solidária">
      <div className={styles.voluntarioContainer}>
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
        <form className={styles.formVoluntario} noValidate autoComplete="off">
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
            <label htmlFor="dataNascimento" className={styles.dataNascimento}>
              Data de Nascimento:
            </label>
            <input
              id="dataNascimento"
              type="date"
              className={styles.dataNascimentoInput}
            />
            {/* <TextField id="outlined-basic" type="date" /> */}
            <TextField id="standard-basic" label="Cidade:" type="text" />
            <TextField
              id="standard-select-currency"
              select
              label="Estado:"
              value={currency}
              onChange={handleChange}
            >
              {estado.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Input label="Cep:" type="text" />
            <Input label="Endereço:" type="text" />
            <Input label="Numero:" type="text" />
            <TextField
              id="standard-select-currency"
              select
              label="Indique a área principal onde gostaria de atuar:"
              value={currency}
              onChange={handleChange}
            >
              {habilidades.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-basic"
              label="Mensagem:"
              type="textarea"
              multiline
              minRows={6}
            />
            <Button type="submit" className={styles.btnEnviar} size="large">
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Voluntario
