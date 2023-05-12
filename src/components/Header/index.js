import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import icone from "../../img/DLP_logo.png"

export default function Header() {
    return(
        <header className={styles.header}>
            <Link to="/"><img src={icone} alt="DLP Finanças" /></Link>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/planilhas'>
                    <li>Planilhas</li>
                </Link>
                <Link to='/contato'>
                    <li>Contato</li>
                </Link>
            </ul>
        </header>
    )
}