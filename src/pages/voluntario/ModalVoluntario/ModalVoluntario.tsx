import React from "react";
import { idText } from "typescript";
import styles from "./styles.module.scss";

const ModalVoluntario = ({id='modal', onClose = () =>{}, children}) =>{

    const handleOusideClick = (e) => {
        if(e.target.id == id) onClose();

    }

    return (
      <>
        <div id={id} className={styles.modal} onClick={handleOusideClick}>
          <div className={styles.container}>
            <button className={styles.close} onClick={onClose}>
              X
            </button>
            <div className="content">{children}</div>
            <p>
              Art. 1º Considera-se serviço voluntário, para os fins desta Lei, a
              atividade não remunerada prestada por pessoa física a entidade
              pública de qualquer natureza ou a instituição privada de fins não
              lucrativos que tenha objetivos cívicos, culturais, educacionais,
              científicos, recreativos ou de assistência à pessoa. (Redação dada
              pela Lei nº 13.297, de 2016)
            </p>
            <p>
              Parágrafo único. O serviço voluntário não gera vínculo
              empregatício, nem obrigação de natureza trabalhista previdenciária
              ou afim.
            </p>
            <p>
              Art. 2º O serviço voluntário será exercido mediante a celebração
              de termo de adesão entre a entidade, pública ou privada, e o
              prestador do serviço voluntário, dele devendo constar o objeto e
              as condições de seu exercício.
            </p>
            <p>
              Art. 3º O prestador do serviço voluntário poderá ser ressarcido
              pelas despesas que comprovadamente realizar no desempenho das
              atividades voluntárias.
            </p>
            <p>
              Parágrafo único. As despesas a serem ressarcidas deverão estar
              expressamente autorizadas pela entidade a que for prestado o
              serviço voluntário.
            </p>
            <p>Art. 4º Esta Lei entra em vigor na data de sua publicação.</p>
            <p>Art. 5º Revogam-se as disposições em contrário.</p>
            <p>
              Brasília, 18 de fevereiro de 1998; 177º da Independência e 110º da
              República.
            </p>
          </div>
        </div>
      </>
    );

};

export default ModalVoluntario;