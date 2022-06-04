import { useEffect, useState } from 'react'
import { ConverterType, getCurrencyRates } from '../../utils'
import { CoursesList } from '../CoursesList'
import { Select } from '../Select'
import styles from './Courses.module.scss'

const Courses = () => {
    const currentRates = getCurrencyRates()
    const rates: ConverterType = currentRates ? JSON.parse(currentRates) : ''
    const ratesArray = rates ? Object.entries(rates.rates) : []
    const date = rates.date ? new Date(rates.date).toLocaleString() : 'Неизвестно'

    const [currentRate, setCurrentRate] = useState(1)
    const [componentRates, setComponentRates] = useState(ratesArray)

    useEffect(() => {
        const newRates: [string, number][] = []

        for (let i in componentRates) {
            newRates.push([componentRates[i][0], componentRates[i][1] / currentRate])
        }

        setComponentRates(newRates)

    }, [currentRate])


    return (
        <section className={styles.courses}>
            <div className={styles.courses__action}>
                <div>
                    <p className={styles.courses__text}>
                        <span>Текущие курсы валют</span>
                        <span className={styles.courses__date}>
                            Рассчётное время: {date ? date : ''}
                        </span>
                    </p>

                </div>
                <Select
                    currentRates={componentRates}
                    currentRate={currentRate}
                    setCurrentRate={setCurrentRate}
                />
            </div>
            <CoursesList
                setComponentRates={setComponentRates}
                currentRates={componentRates}
                currentRate={currentRate}
                setCurrentRate={setCurrentRate}
            />

        </section>
    )
}

export { Courses }