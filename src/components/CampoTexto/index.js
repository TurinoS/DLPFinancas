import styles from './CampoTexto.module.css';

export default function CampoTexto({ type, label, name, placeholder, OnChange, value }) {
    return(
        <div className={styles.container}>
            <label htmlFor={name}>
                {label}
            </label>
            <input 
                name={name} 
                id={name} 
                type={type} 
                placeholder={placeholder} 
                onChange={OnChange}
                value={value}
            />
        </div>
    )
}
