import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            <Link to="/" className={styles.brand}>
              <h1 className={styles.brandTitle}>Music</h1>
            </Link>
            <div className={styles.navLinks}>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
              <Link to="/music" className={styles.navLink}>
                Lesson
              </Link>
              <Link to="/resources" className={styles.navLink}>
                Source
              </Link>
              <Link to="/about" className={styles.navLink}>
                About Us
              </Link>
            </div>
          </div>
          <div className={styles.navRight}>
            <Link to="/profile" className={styles.profileLink}>
              Personal profile
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;