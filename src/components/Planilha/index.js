import styles from './Planilha.module.css';
import Formulario from '../Formulario'

export default function Planilha() {
    return(
        <div className={styles.container}>
            <h1>Panilha de gastos</h1>

            <div>
                <h2>Adicione despesas na sua planilha</h2>
                <Formulario />
            </div>
        </div>
    )
}