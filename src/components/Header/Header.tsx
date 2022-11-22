import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/headerLogo.svg';
import styles from './Header.module.scss';
import {
  setIsFemaleOpen,
  setIsMaleOpen,
  setMale,
  setActiveF,
  setActiveM,
  setBoth,
} from '../../redux/sortSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';

const Header = () => {
  const { pathname } = useLocation();

  const { isMaleOpen, isFemaleOpen, activeF, activeM, both } = useSelector(
    (state: RootState) => state.sortSlice
  );
  const dispatch = useDispatch();

  const handleFemale = () => {
    if (pathname !== '/') return;
    dispatch(setIsFemaleOpen(true));
    dispatch(setMale('женщины'));
    dispatch(setActiveF(true));
    if (isMaleOpen) {
      dispatch(setIsMaleOpen(false));
      dispatch(setActiveM(false));
    }
    if (both) dispatch(setBoth(false));
  };

  const handleMale = () => {
    if (pathname !== '/') return;
    dispatch(setIsMaleOpen(true));
    dispatch(setMale('мужчины'));
    dispatch(setActiveM(true));
    if (isFemaleOpen) {
      dispatch(setIsFemaleOpen(false));
      dispatch(setActiveF(false));
    }
    if (both) dispatch(setBoth(false));
  };

  const handleBoth = () => {
    if (pathname !== '/') return;
    if (isFemaleOpen) {
      dispatch(setIsFemaleOpen(false));
    }
    if (isMaleOpen) {
      dispatch(setIsMaleOpen(false));
    }
    dispatch(setActiveF(false));
    dispatch(setActiveM(false));
    dispatch(setBoth(true));
  };

  useEffect(() => {
    if (pathname !== '/') {
      dispatch(setActiveF(false));
      dispatch(setActiveM(false));
      dispatch(setBoth(false));
    }
  }, [pathname, dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={'/'}>
          <img src={logo} alt="header-logo" />
        </Link>
        <nav className={styles.links}>
          {
            <>
              <Link
                to={'/'}
                className={
                  activeF
                    ? `${styles.link} ${styles.link_active}`
                    : `${styles.link}`
                }
                onClick={handleFemale}
              >
                женщины
              </Link>
              <Link
                to={'/'}
                className={
                  activeM
                    ? `${styles.link} ${styles.link_active}`
                    : `${styles.link}`
                }
                onClick={handleMale}
              >
                мужчины
              </Link>
              <Link
                to={'/'}
                className={
                  both ? `${styles.link} ${styles.link_active}` : styles.link
                }
                onClick={handleBoth}
              >
                все
              </Link>
            </>
          }
        </nav>
        <Link to={'/cart'} className={styles.cart} />
      </div>
    </header>
  );
};

export default Header;
