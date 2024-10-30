"use client";

import React, { useState, useEffect } from "react";
import Menu from "./components/menu";

export default function Home() {
  // Load user Info
  const [user, setUser] = useState({
    name: null,
    email: "",
  });

  return (
    <div>
      <Menu user={user} />
    </div>
  );
}
