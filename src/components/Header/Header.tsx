import { Link } from 'react-router-dom';
import logo from '../../images/headerLogo.svg';
import styles from './Header.module.scss'


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link to={'/'}>
                    <img src={logo} alt="header-logo" />
                </Link>
                <nav className={styles.links}>
                    <Link to={'/'} className={styles.link}>женщины</Link>
                    <Link to={'/'} className={styles.link}>мужчины</Link>
                    <Link to={'/'} className={styles.link}>мы</Link>
                </nav>
                <Link to={'/cart'} className={styles.cart} />
            </div>
        </header>
    )
}

export default Header;