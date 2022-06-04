import { CoursesItem } from "../CoursesItem";
import { NoItems } from "../NoItems";
import styles from './CoursesList.module.scss'


type CoursesList = {
    currentRates: [string, number][]
    setComponentRates: (item: [string, number][]) => void
    currentRate: number;
    setCurrentRate: (ites: number) => void
}

const CoursesList = ({ currentRates, currentRate, setCurrentRate }: CoursesList) => {
    if (currentRates.length) {
        return (
            <ul className={styles.courses_list}>
                {
                    currentRates.map((item: [string, number]) => {
                        return <CoursesItem
                            currentRate={currentRate}
                            setCurrentRate={setCurrentRate}
                            key={item[0]} item={item}
                        />
                    })
                }

            </ul>
        )
    } else {
        return (
            <NoItems />
        )
    }
}

export { CoursesList }