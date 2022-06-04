import styles from './NoItems.module.scss'

const NoItems = () => {
    return (
        <div className={styles.noitems}>
            <p className={styles.noitems__text} >
                Тут пока ничего нет.
            </p>
            <p className={styles.noitems__text} >
                Конвертируйте что-либо в конвертере, для начала.
            </p>
        </div>
    )
}

export { NoItems }