import React from "react";
import Layout from "../../components/common/Layout/Layout";
import styles from "./styles.module.scss";

const Contato = () => {
  return (
    <Layout title="Loja - Sou Cesta Solidária">
      <h2 className={styles.title}>Fale Conosco</h2>

      <div className={styles.contato}>
        <div className={styles.infoContato}>
          <h4> Redes sociais </h4>
          <a href="#" target="_blank" className={styles.redeSocial}>
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="#"
            target="_blank"
            className={styles.redeSocial}
          >
            <i className="fa fa-facebook"></i>
          </a>
          <h4> Endereço </h4>
          Rua João Francisco de Mello, 131 - Vila Nova Alba, São Paulo - SP,
          05358-110
          <h4> Contatos </h4>
          <p>Email: soucestasolidaria@gmail.com</p>
          <p>Redes sociais: @soucestasolidaria</p>
          <p>Whatsapp: (11) 93710-1020</p>
        </div>

        <form className={styles.formContato}>
          <label htmlFor="name">Seu Nome</label>
          <input id="name" type="text" />

          <label htmlFor="email">Seu e-mail:</label>
          <input id="email" type="email" />

          <label htmlFor="tel">Tel/WhatsApp:</label>
          <input id="tel" type="tel" />

          <label htmlFor="message">Mensagem:</label>
          <input id="message" type="textarea" />
          <button className={styles.btnEnviar} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contato;
