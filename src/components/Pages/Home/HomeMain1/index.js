import styles from './HomeMain1.module.css';
import Botao from '../../../Botao';
import imagem1 from './home-main-1.jpg';
import { BsShieldLock } from 'react-icons/bs'
import { MdDevices } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function HomeMain1() {
    return(
        <section className={styles.container}>
            <div className={styles.texto}>
                <h1>Controle suas despesas e receitas em tempo real</h1>
                <p>
                    Atualize sua planilha de gastos a qualquer hora 
                    e em qualquer lugar de maneira rápida, prática e segura.
                </p>
                <Link to='/planilha'><Botao className={styles.btn}>Comece agora mesmo gratuitamente</Botao></Link>
                <div className={styles.icones}>
                    <span><BsShieldLock className={styles.icone} /><p>A segurança dos seus dados é nossa prioridade</p></span>
                    <span><MdDevices className={styles.icone} /><p>Acesso rápido e fácil pelo computador ou celular</p></span>
                </div>
            </div>
            <img src={imagem1} alt='Imagem controle financeiro' />
        </section>
    )
}