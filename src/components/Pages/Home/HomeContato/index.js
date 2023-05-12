import Botao from '../../../Botao';
import { Link } from 'react-router-dom';
import styles from './HomeContato.module.css';

export default function HomeContato() {
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h3>Alguma dúvida?</h3>
                <p>Caso tenha ficado com alguma dúvida sobre o nosso site, nosso suporte 
                    está aqui para te ajudar!</p>
                <Link to="/contato" className={styles.btn}><Botao>Fale conosco</Botao></Link>
            </div>
        </div>
    )
}