import Link from 'next/link';
import classNames from "classnames";

import styles from '../styles/navbar.module.css';

export default function NavBar({ active }) {
  return (
    <div className={styles.nav}>
      <Link href="/"
        className={classNames(
          {
            [styles.navItem]: true,
            [styles.active]: active === "Home",
          }
        )}>
        Home
      </Link>
      <a href='/NityaResume.pdf' target="_blank" rel="noopener noreferrer"
        className={classNames(
          {
            [styles.navItem]: true,
            [styles.active]: active === "Resume",
          }
        )}>
        Resume
      </a>
    </div>
  );
};