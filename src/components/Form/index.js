import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import styles from './Form.module.css';

export default function Home({ funcao }) {
    return(
        <form className={styles.container}>
            <CampoTexto
                type='text' 
                label='Categoria' 
                placeholder={`Insira a categoria da ${funcao}`}
            />
            <CampoTexto 
                type='text'
                label={`Nome da ${funcao}`}
                placeholder={`Insira o nome da ${funcao}`}
            />
            <CampoTexto 
                type='number'
                label={`Valor da ${funcao}`}
                placeholder={`Insira o valor da ${funcao}`}
            />
            <div className={styles.btn}>
                <Botao>Adicionar</Botao>
            </div>
        </form>
    );
}