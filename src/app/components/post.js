import styles from "../page.module.css";

export default function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.post_card_header}>
        <h3 className={styles.post}>Canção do Exílio</h3>
        <p className={styles.post_card_date}>
          <small>12/09/2021</small>
        </p>
      </div>
      <p className={styles.post_card_text}>
        <div className={styles.poem}>
          <p className={styles.poem_strofe}>
            Minha terra tem palmeiras
            <br />
            Onde canta o Sabiá,
            <br />
            As aves, que aqui gorjeiam,
            <br />
            Não gorjeiam como lá.
            <br />
          </p>
          <p className={styles.poem_strofe}>
            Nosso céu tem mais estrelas,
            <br />
            Nossas várzeas têm mais flores,
            <br />
            Nossos bosques têm mais vida,
            <br />
            Nossa vida mais amores.
            <br />
          </p>
          <p className={styles.poem_strofe}>
            Em cismar, sozinho, à noite,
            <br />
            Mais prazer encontro eu lá;
            <br />
            Minha terra tem palmeiras,
            <br />
            Onde canta o Sabiá.
            <br />
          </p>
          <p className={styles.poem_strofe}>
            Minha terra tem primores,
            <br />
            Que tais não encontro eu cá;
            <br />
            Em cismar – sozinho, à noite –<br />
            Mais prazer encontro eu lá;
            <br />
            Minha terra tem palmeiras,
            <br />
            Onde canta o Sabiá.
            <br />
          </p>
          <p className={styles.poem_strofe}>
            Não permita Deus que eu morra,
            <br />
            Sem que eu volte para lá;
            <br />
            Sem que desfrute os primores
            <br />
            Que não encontro por cá;
            <br />
            Sem qu’inda aviste as palmeiras,
            <br />
            Onde canta o Sabiá.
            <br />
          </p>
        </div>
      </p>
      <div className={styles.post_tags}>
        <ul>
          <li>
            <a href="#">#GonçalvesDias</a>
          </li>
          <li>
            <a href="#">#CançãoDoExílio</a>
          </li>
          <li>
            <a href="#">#Poesia</a>
          </li>
        </ul>
      </div>
      <div className={styles.post_footer}>
        <p className={styles.post_author}>USER123</p>
        <p className={styles.poem_details}>Gonçalves Dias - 1823-1864</p>
      </div>
      <div className={styles.post_actions}>
        <ul>
          <li>
            <button>
              <i className="fa-regular fa-heart"></i>
              100k
            </button>
          </li>
          <li>
            <button>
              <i className="fa-regular fa-comment"></i>
              100k
            </button>
          </li>
          <li>
            <button>
              <i className="fa-regular fa-share"></i>
              100k
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.post_comment}>
        <div className={styles.add_comment}>
          <textarea
            placeholder="Comente..."
            onChange={(e) => setThought(e.target.value)}
          />
          <button>
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <div className={styles.comment_list}>
        <div className={styles.comment}>
          <p className={styles.comment_author}>USER123</p>
          <p className={styles.comment_text}>Comentário 1</p>
        </div>
        <div className={styles.comment}>
          <p className={styles.comment_author}>USER123</p>
          <p className={styles.comment_text}>Comentário 2</p>
        </div>
        <div className={styles.comment}>
          <p className={styles.comment_author}>USER123</p>
          <p className={styles.comment_text}>Comentário 3</p>
        </div>
      </div>
    </div>
  );
}
