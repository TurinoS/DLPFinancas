import styles from './HomeMain2.module.css';
import imagem2 from './home-main-2.avif';

export default function HomeMain2() {
    return(
        <section className={styles.container}>
            <img src={imagem2} alt='Descomplicamos suas finanças'></img>
            <div className={styles.texto}>
                <h2>Te ajudamos na sua gestão financeira</h2>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h3>1. Personalize sua planilha facilmente</h3>
                        <p>Adicione e retire despesas com apenas um clique do mouse 
                            de acordo com a sua necessidade.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>2. Gamefique sua receita</h3>
                        <p>Veja quanto dinheiro falta para suprir todos os seus gastos
                            de maneira rápida e descomplicada.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>3. Atualize sua arrecadação em tempo real</h3>
                        <p>Sempre que entrar um dinheirinho, adicione na planilha e 
                            todos os cálculos serão realizados sem dor de cabeça.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>4. Transforme em hábito</h3>
                        <p>Lance os gastos e receitas do dia a dia sempre que possível 
                            e assuma o controle do seu dinheiro.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}