import styles from './Inicio.module.css'

import PostCard from 'componentes/PostCard';
import posts from 'json/posts.json';

export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
                    
            ))}
        </ul>
    )
}


// O arquivo de configuração (jsconfig) permite a utilização de "absolute imports"
// Imports absolutos, sem necessidade de ter um caminho extenso para o arquivo importado