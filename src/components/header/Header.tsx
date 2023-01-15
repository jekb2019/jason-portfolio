import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import ListItem from '../listItem/ListItem';
import { menuOptions } from '../../service/navigation/navOptions';
import { useCallback, useEffect, useRef, useState } from 'react';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLHeadingElement>(null);

  const handlePageScroll = useCallback(() => {
    const headerHeight = (
      headerRef.current as HTMLHeadingElement
    ).getBoundingClientRect().height;
    if (window.scrollY > headerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handlePageScroll);
    return () => document.removeEventListener('scroll', handlePageScroll);
  }, [handlePageScroll]);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${
        isScrolled ? styles.headerScrolled : null
      }`}
    >
      <div className={styles.titleContainer}>
        <img className={styles.logo} src={logo} alt="Jason logo" />
        <span className={styles.title}>{title}</span>
      </div>
      <nav className={styles.menuContainer}>
        <ul>
          {menuOptions.map((option, idx) => (
            <ListItem key={idx} onClick={option.onClick}>
              {option.label}
            </ListItem>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
