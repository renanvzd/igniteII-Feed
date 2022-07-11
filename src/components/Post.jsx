import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/renanvzd.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Renan Veronez</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio as 08:13h" dateTime="2022-05-11 08:13:30">Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir um post</p>
        <p><a href="">teste.design/siteprototipo</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentario"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}