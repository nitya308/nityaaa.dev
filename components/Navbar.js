import Link from 'next/link';
import classNames from "classnames";

import styles from '../styles/navbar.module.css';

// import TreeIcon from '/assets/tree.svg'

export default function NavBar({ active }) {
  return (
    <div className={styles.nav}>
      <Link href="/"
        className={classNames(
          {
            [styles.navItem]: true,
            [styles.header]: true,
          }
        )}>
        <img
          src="/assets/tree.svg"
          alt="some pictures of me"
          width={50}
          style={{ borderRadius: '5px' }}>
        </img>
        Nitya A
      </Link>
      <Link href="/"
        className={classNames(
          {
            [styles.navItem]: true,
            [styles.active]: active === "Home",
          }
        )}>
        Home
      </Link>
      <Link href="/about"
        className={classNames(
          {
            [styles.navItem]: true,
            [styles.active]: active === "About",
          }
        )}>
        About
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
