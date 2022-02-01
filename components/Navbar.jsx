import Link from "next/link";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return <div className={styles.container}>
    <Link href="/">JH</Link>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="/about">About</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/skills">Skills</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/projects">Projects</Link>
      </li>
      

    </ul>
  </div>;
};

export default Navbar;
