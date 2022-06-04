import { useEffect, useState } from 'react'
import styles from './Select.module.scss'

type SelectProps = {
    currentRates: [string, number][];
    currentRate: number;
    setCurrentRate: (ites: number) => void
}

const Select = ({ currentRates, setCurrentRate, currentRate }: SelectProps) => {
    const [defRate, setDefRate] = useState(currentRate)

    useEffect(() => {
        setDefRate(defRate)
    }, [defRate])

    const optionClickHandler = (evt: React.MouseEvent<HTMLOptionElement, MouseEvent>) => {
        const num = Number(evt.currentTarget.dataset.currency)
        setCurrentRate(num)
    }

    return (
        <select
            value={defRate}
            className={styles.select}
            onChange={(e) => {
                console.log(e);
            }}
        >
            {
                currentRates.map(item => {
                    return (
                        <option
                            onClick={(evt) => {
                                optionClickHandler(evt)
                            }}
                            data-currency={item[1]}
                            key={item[0]}
                            value={item[1]}
                        >
                            {item[0]}
                        </option>
                    )
                })
            }
        </select >
    )
}

export { Select }