import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core'
import React, { useState } from 'react'
import { Button } from '../../components/common/Button'
import Layout from '../../components/common/Layout/Layout'
import styles from './styles.module.scss'

const values = [
  { text: 'R$ 10', link: 'https://mpago.la/1cJntS4' },
  { text: 'R$ 20', link: 'https://mpago.la/19Gxv1F' },
  { text: 'R$ 30', link: 'https://mpago.la/2yW5h9m' },
  { text: 'R$ 50', link: 'https://mpago.la/2AuQVJA' },
]

const Doacao = () => {
  const [value, setValue] = useState('female')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Layout title="Doação - Sou Cesta Solidária">
      <div className={styles.doacaoContainer}>
        <h2>Doaçoes</h2>
        <FormControl component="fieldset">
          <FormLabel component="legend">Doação</FormLabel>
          <RadioGroup
            row
            aria-label="donation"
            name="donation"
            value={value}
            onChange={handleChange}
          >
            {values.map((value) => {
              return (
                <FormControlLabel
                  key={value.text}
                  value={value.link}
                  control={<Radio />}
                  label={value.text}
                />
              )
            })}
          </RadioGroup>
        </FormControl>
        <Button
          onClick={() => {
            window.open(value, 'newwindow', 'width=1000,height=600')
            return false
          }}
        >
          Doar
        </Button>
      </div>
    </Layout>
  )
}

export default Doacao
