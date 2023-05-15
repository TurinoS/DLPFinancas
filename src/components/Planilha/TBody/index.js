import styles from './TBody.module.css';

export default function TBody({ valor, nomeLinha, }) {
    return(
        <tbody className={styles.container}>
            <tr>
                <td className={styles.coluna1}>{nomeLinha}</td>
                <td className={styles.coluna2}>{`R$${valor}`}</td>
            </tr>
        </tbody>
    )
}