import styles from './Planilha.module.css';
import Form from '../Form'

export default function Planilha() {
    return(
        <div className={styles.container}>
            <h1>Panilha de gastos</h1>

            <section>
                <div className={styles.formulario}>
                    <h2>Adicione despesas na sua planilha</h2>
                    <Form funcao="despesa" />
                </div>
                <div className={styles.formulario}>
                    <h2>Adicione receitas na sua planilha</h2>
                    <Form funcao="receita" />
                </div>
            </section>
        </div>
    )
}