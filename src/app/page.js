"use client";

import React, { useState, useEffect } from "react";
import Menu from "./components/menu";
import HighlightPoem from "./components/highlightPoem";
import styles from "./page.module.css";

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
          <textarea
            className={styles.textarea}
            placeholder="Pense, Critique, Reflita...."
            value={thought}
            onChange={(e) => setThought(e.target.value)}
          />
          <button className={styles.submitButton}>Postar</button>
        </div>
      </div>
      <div className={styles.feed}>
        <h2>Poemas Recentes</h2>
        {/* Aqui você pode mapear os poemas recentes */}
        <HighlightPoem />
        {/* Adicione mais componentes ou elementos conforme necessário */}
      </div>
    </div>
  );
}
