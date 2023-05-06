import styles from "./Navbar.module.css";
import Search from "../Search/Search";

const Navbar = () => {
  return <div className={styles.containerNav}>
    <Search/>
  </div>;
};

export default Navbar;
