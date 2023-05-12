import styles from './Contato.module.css';
import CampoTexto from '../../CampoTexto'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationPin, MdEmail } from 'react-icons/md';

export default function Contato() {
    return(
        <div className={styles.container}>
            <form>
                <h3>Nos envie uma mensagem</h3>
                <CampoTexto label='Nome' name='nome' type='text' placeholder='Ex: José da Silva'/>
                <CampoTexto label='Email' name='email' type='email' placeholder='Ex: jose.silva@mail.com'/>
                <CampoTexto label='Assunto' name='assunto' type='text' placeholder='Dúvidas, problemas com a plataforma, reclamações...'/>
                <div className={styles.mesage}>
                    <label htmlFor='mensagem'>Em que podemos te ajudar?</label>
                    <textarea name='mensagem' id='mensagem' cols={15} rows={8}></textarea>
                </div>
            </form>
            <div className={styles.contatos}>
                <h3>Entre em contato conosco</h3>
                <p><BsFillTelephoneFill className={styles.icone}/> <span>telefone:</span> +55 (18) 99666-7708</p>
                <p><MdLocationPin className={styles.icone}/> <span>endereço:</span> Presidente Prudente, SP<br/>Rua 12 de Outubro, 1153</p>
                <p><MdEmail className={styles.icone}/> <span>email:</span> dlp@financas.com</p>
            </div>
        </div>
    );
}