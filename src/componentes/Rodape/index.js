import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrrada } from 'assets/marca_registrada.svg'

export default function Rodape() {
    return(
        <footer className={styles.rodape}>
            <MarcaRegistrrada/>

            Desenvolvido por CleitonOS
        </footer>
    )
}