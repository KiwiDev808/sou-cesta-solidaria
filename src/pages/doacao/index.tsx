import React, { useState } from 'react'
import { Button } from '../../components/common/Button'
import Layout from '../../components/common/Layout/Layout'
import styles from './styles.module.scss'

const donations = [
  { text: 'R$ 10', link: 'https://mpago.la/1cJntS4' },
  { text: 'R$ 20', link: 'https://mpago.la/19Gxv1F' },
  { text: 'R$ 30', link: 'https://mpago.la/2yW5h9m' },
  { text: 'R$ 50', link: 'https://mpago.la/2AuQVJA' },
]

const Doacao = () => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Layout title="Doação - Sou Cesta Solidária">
      <div className={styles.doacaoContainer}>
        <h2>Doaçoes</h2>
        <section>
          {donations.map((donation) => {
            return (
              <div key={donation.text}>
                <input
                  type="radio"
                  id={donation.text}
                  value={donation.link}
                  checked={value === donation.link}
                  onChange={handleChange}
                />
                <label htmlFor={donation.text}>
                  <h2>{donation.text}</h2>
                  <p>
                    Uma doação faz diferença, doe e ajude o Solidari a ajudar
                    mais familias a sorrir.
                  </p>
                </label>
              </div>
            )
          })}
        </section>
        <Button
          onClick={() => {
            window.open(value, 'newwindow', 'width=1000,height=600')
            return false
          }}
          disabled={value === ''}
        >
          Doar
        </Button>
      </div>
    </Layout>
  )
}

export default Doacao
