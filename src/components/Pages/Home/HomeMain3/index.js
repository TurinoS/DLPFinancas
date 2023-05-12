import styles from './HomeMain3.module.css';
import { MdOutlineMoreTime, MdThumbUpOffAlt, MdSupportAgent, MdTrendingUp } from 'react-icons/md';
import { BiHappyBeaming, BiTable } from 'react-icons/bi';

export default function HomeMain3() {
    return(
        <section className={styles.container}>
            <h2>Controlar suas finanças é controlar sua vida</h2>
            <div className={styles.texto}>
                <div className={styles.card}>
                    <h3><MdOutlineMoreTime className={styles.icone} />Economize tempo</h3>
                    <p>Em poucos segundos você atualiza sua planilha e pode
                        utilizar o tempo com sua família e seus amigos.</p>
                </div>
                <div className={styles.card}>
                    <h3><MdTrendingUp className={styles.icone} />Planeje seu futuro</h3>
                    <p>Organizar suas despezas e receitas facilita na hora de planejar o futuro.
                        Tanto para programar viagens quanto para se preparar para aumentar a família.</p>
                </div>
                <div className={styles.card}>
                    <h3><BiHappyBeaming className={styles.icone} />Simplicidade é paz</h3>
                    <p>Pensamos em tudo para facilitar seu controle financeiro e 
                        converter essa atividade em uma experiência prazeroza.</p>
                </div>
                <div className={styles.card}>
                    <h3><BiTable className={styles.icone} />Você no comando</h3>
                    <p>Temos planílhas prontas fáceis de personalizar ou você pode 
                        criar uma do zero para deixar com a sua cara.</p>
                </div>
                <div className={styles.card}>
                    <h3><MdThumbUpOffAlt className={styles.icone} />Para qualquer um</h3>
                    <p>A interface simplificada te ajuda a entender suas finanças sem esforço 
                        e sem dor de cabeça.</p>
                </div>
                <div className={styles.card}>
                    <h3><MdSupportAgent className={styles.icone} />Suporte preparado</h3>
                    <p>Nosso suporte muito bem treinado está sempre preparado para te ajudar e 
                        resolver seus problemas o mais rápido possível.</p>
                </div>
            </div>
        </section>
    )
}