import React, { useState } from "react";
import { slide as Menu } from 'react-burger-menu'
import Burger from './Burger';

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Dexter Lo
      </a>
      <Burger />
    </nav>
  );
};