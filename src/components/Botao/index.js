import styles from './Botao.module.css';

export default function Botao({ children }) {
    return(
        <button className={styles.btn}>
            {children}
        </button>
    )
}