import styles from './THead.module.css';

export default function THead() {
    return(
        <thead className={styles.container}>
            <tr>
                <th className={styles.coluna1}>Despesa</th>
                <th className={styles.coluna2}>Valor</th>
            </tr>
        </thead>
    )
}