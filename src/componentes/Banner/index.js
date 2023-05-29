import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/imagem-de-perfil.jpeg'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Cleiton Nasicmento, desenvolvedor Front-End, e por aqui compartilho diversos artigos e dicas de conhecimento relacionado a tecnologia, fique a vontade para explorar o conteúdo.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto} 
                    alt='Foto do Cleiton Nascimento'
                />
            </div>
        </div>
    )
}
