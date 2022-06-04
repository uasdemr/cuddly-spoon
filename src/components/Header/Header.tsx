import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.header__list}>
                <li className={styles.header__item}>
                    <Link className={styles.header__link} to='/'>КОНВЕРТЕР</Link>
                </li>
                <li className={styles.header__item}>
                    <Link className={styles.header__link} to='/courses'>Просмотр курса мировых валют</Link>
                </li>
            </ul>
        </header>
    )
}

export { Header }