import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/minha-foto-sobremim.jpeg";

export default function SobreMim() {
    return (
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Cleiton!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Cleiton sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Opa, tudo bem? Eu me chamo Cleiton Nascimento, sou desenvolvedor de software e admirador da tecnologia. Fique a vontade para ler os artigos disponíveis em todo o blog. Nesta seção em específico vou falar um pouco sobre mim.
            </p>
            <p className={styles.paragrafo}>
                Minha história com a programação começa quando eu era criança, jogando video game, me perguntava como eram feitos aqueles jogos que me divertiam tanto, e sempre me passava pela cabeça "Como deve ser trabalhar desenvolvendo jogos? Deve ser incrível!", a ideia de programação ainda era muito abstrata pra mim, quando bati o olho e vi pela primeira vez um código de um programa me espantei com aquele monte de letras e números na tela, não me imaginava fazendo aquilo, e com essa primeira impressão fui deixando a ideia de desenvolver jogos de lado.
            </p>
            <p className={styles.paragrafo}>
                Mas o destino me proporcionara um novo caminho no futuro e novamente na programação. Dessa vez por outro motivo, minha curiosidade sobre como era feito o desenvolvimento de Aplicativos Móveis, o por que de certos Apps fazerem tanto sucesso, e "por que não desenvolver um e ficar rico támbem?". Bom, tudo isso despertou a minha curiosidade sobre o assunto, então decidi tentar aprender a programar e ver se realmente programação seria algo pra mim.
            </p>
            <p className={styles.paragrafo}>
                No começo experimentei muita dificuldade no desenvolvimento de Apps com Kotlin, muitos conceitos e termos ainda desconhecidos pra mim, e com o tempo fui percebendo que era necessário dar um passo atrás. Então foi aí que decidi procurar guias de estudo e formas de aprender programação de forma eficiente, além disso percebi que precisava aprender desde o princípio para que aquilo ficasse mais claro na minha cabeça, e aí cheguei na lógica de programação, depois comecei a desenvolver páginas com HTML, de curso em curso fui aprendendo os conceitos da programação, do básico ao mais avançado, e cheguei no desenvolvimento Web que me encontro hoje, onde continuo me desenvolvendo como um desenvolvedor de software em geral.
            </p>
        </PostModelo>
    )
}