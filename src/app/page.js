"use client";

import React, { useState } from "react";
import Menu from "./components/menu";
import styles from "./page.module.css";
import Post from "./components/post";

export default function Home() {
  // Load user Info
  const [user, setUser] = useState({
    name: null,
    email: "",
  });

  const [thought, setThought] = useState("");


  return (
    <div>
      <Menu user={user} />
      <div className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.textareaContainer}>
            <textarea
              className={styles.textarea}
              placeholder="Pense, Critique, Reflita...."
              value={thought}
              onChange={(e) => setThought(e.target.value)}
            />
            <button className={styles.submitButton}>
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <section className={styles.feed}>
          <h2 className={styles.feed_detale}>
            A criatividade nada mais é do que um grito de uma mente farta de
            ideias
          </h2>
          <div className={styles.feed_list}>
            <Post></Post>
          </div>
        </section>
      </div>
    </div>
  );
}
