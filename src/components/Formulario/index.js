import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import styles from './Formulario.module.css';

export default function Home() {
    return(
        <form className={styles.container}>
            <CampoTexto
                type='text' 
                label='Categoria' 
                placeholder='Insira a categoria da despesa'
            />
            <CampoTexto 
                type='text'
                label='Despesa'
                placeholder='Insira o nome da despesa'
            />
            <CampoTexto 
                type='number'
                label='Valor'
                placeholder='Insira o valor da despesa'
            />
            <Botao>Enviar</Botao>
        </form>
    );
}