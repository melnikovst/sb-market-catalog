import { Link } from 'react-router-dom';
import logo from '../../images/headerLogo.svg';
import styles from './Header.module.scss';
import { setIsFemaleOpen, setIsMaleOpen, setMale } from '../../redux/sortSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Header = () => {
  const { isMaleOpen, isFemaleOpen, male } = useSelector(
    (state: RootState) => state.sortSlice
  );
  const dispatch = useDispatch();

  const handleFemale = () => {
    dispatch(setIsFemaleOpen(true));
    dispatch(setMale('женщины'));
    if (isMaleOpen) {
      dispatch(setIsMaleOpen(false));
    }
  };

  const handleMale = () => {
    dispatch(setIsMaleOpen(true));
    dispatch(setMale('мужчины'));
    if (isFemaleOpen) {
      dispatch(setIsFemaleOpen(false));
    }
  };

  const handleBoth = () => {
    if (isFemaleOpen) {
      dispatch(setIsFemaleOpen(false));
    }
    if (isMaleOpen) {
      dispatch(setIsMaleOpen(false));
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={'/'}>
          <img src={logo} alt="header-logo" />
        </Link>
        <nav className={styles.links}>
          <button className={styles.link} onClick={handleFemale}>
            женщины
          </button>
          <button className={styles.link} onClick={handleMale}>
            мужчины
          </button>
          <button className={styles.link} onClick={handleBoth}>
            мы
          </button>
        </nav>
        <Link to={'/cart'} className={styles.cart} />
      </div>
    </header>
  );
};

export default Header;
