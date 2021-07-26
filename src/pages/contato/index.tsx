import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import React from 'react'
import { Button } from '../../components/common/Button'
import Input from '../../components/common/Control/Input'
import Layout from '../../components/common/Layout/Layout'
import styles from './styles.module.scss'

const Contato = () => {
  return (
    <Layout title="Contato - Sou Cesta Solidária">
      <div className={styles.contatoContainer}>
        <h2 className={styles.title}>fale conosco</h2>

        <div className={styles.contato}>
          <div className={styles.infoContato}>
            <div className={styles.socialMedia}>
              <h4> Redes sociais </h4>
              <div>
                <a
                  href="https://instagram.com/soucestasolidaria"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://facebook.com/soucestasolidaria"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
            <div className={styles.address}>
              <h4> Endereço </h4>
              <p>
                Rua João Francisco de Mello, 131 - Vila Nova Alba, São Paulo -
                SP, 05358-110
              </p>
            </div>
            <div className={styles.contact}>
              <h4> Contatos </h4>
              <p>
                <span>Email:</span> soucestasolidaria@gmail.com
              </p>
              <p>
                <span>Redes sociais:</span> @soucestasolidaria
              </p>
              <p>
                <span>Whatsapp:</span> (11) 93710-1020
              </p>
            </div>
          </div>

          <form
            className={styles.formContato}
            action="mailto:soucestasolidaria@gmail.com"
            method="POST"
            encType="multipart/form-data"
            name="Formulário de Contato"
          >
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
