import styles from './Planilha.module.css';
import Form from '../Form'
import Tbody from './TBody';
import THead from './THead';

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

            <section className={styles.tabela}>
                <table>
                    <THead />
                    <Tbody categoria='Mercado' nomeLinha='Unimed' valor='750,00' />
                    <Tbody categoria='Mercado' nomeLinha='Escola' valor='1200,00' />
                </table>
            </section>
        </div>
    )
}