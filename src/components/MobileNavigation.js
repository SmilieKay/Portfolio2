import NavLinks from "./NavLinks";
import styles from "../styles/header.module.css";
import { CgMenuBoxed } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";
import { useState } from "react";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <CgMenuBoxed
      className={styles["Hamburger"]}
      size="4rem"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgCloseR
      className={styles["Hamburger"]}
      size="4rem"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className={styles["MobileNavigation"]}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
};
export default MobileNavigation;
