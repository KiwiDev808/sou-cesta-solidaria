import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <p>
        Entre em contato com a <strong>Cesta Solidária</strong> e
      </p>
      <h2>Se Conecte às Causas Que Transformam o Mundo</h2>
      <hr />
      <Link href="/contato" passHref>
        <button>Contato</button>
      </Link>
    </div>
  )
}
