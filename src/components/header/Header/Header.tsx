import styles from './Header.module.css';
import { menuOptions } from '../../../service/navigation/navOptions';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useWindowDimensions } from '../../../hooks/dimensions';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import MenuButton from '../../common/MenuButton/MenuButton';
import HorizontalNavbar from '../HorizontalNavbar/HorizontalNavbar';
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';

type HeaderProps = {
  title: string;
};

const COLLAPSE_NAVBAR_WIDTH = 750;

const Header = ({ title }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVerticalMenuOpen, setIsVerticalMenuOpen] = useState(false);
  const { width } = useWindowDimensions();

  const headerRef = useRef<HTMLHeadingElement>(null);
  const shouldCollapseMenu = useMemo(
    () => width && width < COLLAPSE_NAVBAR_WIDTH,
    [width]
  );

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

  const toggleVerticalMenu = () => {
    setIsVerticalMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('scroll', handlePageScroll);
    return () => document.removeEventListener('scroll', handlePageScroll);
  }, [handlePageScroll]);

  useEffect(() => {
    if (!shouldCollapseMenu) {
      setIsVerticalMenuOpen(false);
    }
  }, [shouldCollapseMenu]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div
        className={`${styles.mainHeaderContainer} ${
          isScrolled ? styles.headerScrolled : null
        } ${shouldCollapseMenu ? styles.collapsedMainHeader : null}`}
      >
        <HeaderTitle title={title} />
        {!shouldCollapseMenu && <HorizontalNavbar menuOptions={menuOptions} />}
        {shouldCollapseMenu && (
          <MenuButton
            color="white"
            iconSize="2rem"
            onClick={toggleVerticalMenu}
          />
        )}
      </div>
      {shouldCollapseMenu && (
        <VerticalNavbar
          menuOptions={menuOptions}
          isMenuOpen={isVerticalMenuOpen}
          toggleVerticalMenu={toggleVerticalMenu}
        />
      )}
    </header>
  );
};

export default Header;
