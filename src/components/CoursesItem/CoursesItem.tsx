import styles from './CoursesItem.module.scss'

type CoursesItem = {
    item: [string, number]
    currentRate: number;
    setCurrentRate: (ites: number) => void
}

const CoursesItem = ({ item, currentRate, setCurrentRate }: CoursesItem) => {

    const itemClickHandler = (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const num = Number(evt.currentTarget.dataset.currency)
        setCurrentRate(num)
    }

    return (
        <li
            data-currency={item[1]}
            onClick={itemClickHandler}
            className={styles.courses__item}
        >
            <p>{item[0]}</p> <p>{item[1].toFixed(6)}</p>
        </li>
    )
}

export { CoursesItem }