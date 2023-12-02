import { Link } from "react-router-dom";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">login</Link></li>
          <li><Link to="#">profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;