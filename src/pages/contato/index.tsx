import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import React from 'react'
import { Button } from '../../components/common/Button'
import Input from '../../components/common/Control/Input'
import Layout from '../../components/common/Layout/Layout'
import styles from './styles.module.scss'

const Contato = () => {
  return (
    <Layout title="Loja - Sou Cesta Solidária">
      <div className={styles.contatoContainer}>
        <h2 className={styles.title}>fale conosco</h2>

        <div className={styles.contato}>
          <div className={styles.infoContato}>
            <h4> Redes sociais </h4>
            <a href="#" target="_blank">
              <InstagramIcon />
            </a>
            <a href="#" target="_blank">
              <FacebookIcon />
            </a>
            <h4> Endereço </h4>
            <p>
              Rua João Francisco de Mello, 131 - Vila Nova Alba, São Paulo - SP,
              05358-110
            </p>
            <h4> Contatos </h4>
            <p>Email: soucestasolidaria@gmail.com</p>
            <p>Redes sociais: @soucestasolidaria</p>
            <p>Whatsapp: (11) 93710-1020</p>
          </div>

          <form className={styles.formContato}>
            <Input label="Seu Nome" />

            <Input label="Seu e-mail:" type="email" />

            <Input label="Tel/WhatsApp:" type="tel" />

            <Input label="Mensagem:" type="text" multiline minRows={6} />

            <Button type="submit" color="primary" variant="contained">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contato
