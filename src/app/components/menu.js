import styles from "../../../styles/menu.module.css";
import Image from "next/image";

export default function Menu({ user }) {
  return (
    <div className={styles.menu}>
      <div className={styles.brand}>
        <div className={styles.brand_area}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1>Poezis</h1>
        </div>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <ul className={styles.menu_options}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Autores</a>
        </li>
        <li>
          <a href="#">Recentes</a>
        </li>
      </ul>
      <div className={styles.user_area}>
        {user.name === null ? (
          <div className={styles.user_register}>
            <button href="/register">Register</button>
          </div>
        ) : (
          <div className={styles.user_dropdown}>
            <div className={styles.user_image}>
              <button>
                <Image src="/user.png" alt="user" width={30} height={30} />
              </button>
            </div>
            <div className={styles.user_dropdown_content}>
              <a href="/profile">Profile</a>
              <a href="/logout">Logout</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
