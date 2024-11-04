import React from 'react';
import styles from '../../../styles/page.module.css';

const Poem = ({ title, date, content, tags, author }) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_card_header}>
        <h3 className={styles.post}>{title}</h3>
        <p className={styles.post_card_date}>
          <small>{date}</small>
        </p>
      </div>
      <div className={styles.post_card_text}>
        <div className={styles.poem} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className={styles.post_tags}>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>
              <a href="#">{tag}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.post_footer}>
        <p className={styles.post_author}>{author.name}</p>
        <p className={styles.poem_details}>{author.details}</p>
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
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Poem;
