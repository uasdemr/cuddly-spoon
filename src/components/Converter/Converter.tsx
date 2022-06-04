import { useEffect, useState } from 'react'
import { useInput } from '../../hooks/useInput'
import { getCurrencyRates, setCurrencyRates } from '../../utils'
import { Button } from '../Button'
import { Input } from '../Input'
import { Output } from '../Output'
import styles from './Converter.module.scss'

const fetchRates = () => {
    fetch(`https://cdn.cur.su/api/cbr.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setCurrencyRates(data.rates)
        });
}

const Converter = () => {
    const [rates, setRates] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [dataError, setDataError] = useState('')

    const currencyInput = useInput({ initialValue: '', validationOptions: { isEmpty: true, minLength: 3, isRegExp: true } })

    useEffect(() => {
        const currentRates = getCurrencyRates() ? JSON.parse(getCurrencyRates()) : ''

        if (!currentRates) {
            fetchRates()
        } else {
            if (new Date(Date.now()) > new Date(currentRates.date + 3600000)) {
                fetchRates()
            }
        }
    }, [])

    const calculateRate = () => {

        try {
            const currentRates = getCurrencyRates() ? JSON.parse(getCurrencyRates()) : ''
            const { quantity, from, to } = getInputParams()
            const curr = currentRates.rates[to] / currentRates.rates[from]

            setRates(curr * quantity)
            setQuantity(quantity)
            setFrom(from)
            setTo(to)
            setDataError('')
        } catch (error) {
            setDataError('Не возможно получить данные. Попробуйте еще раз.')
            fetchRates()
        }
    }

    const getInputParams = () => {
        const params = currencyInput.value.split(' ')
        return {
            quantity: parseInt(params[0]),
            from: params[1].toUpperCase(),
            to: params[3].toUpperCase()
        }
    }

    return (
        <section className={styles.converter}>
            {dataError && <p className={styles.converter__dataerror}>{dataError}</p>}
            <ul className={styles.converter__list}>
                <li className={styles.converter__item}>
                    <p className={styles.converter__text}>Введите сумму:</p>
                    <Input {...currencyInput} />
                    <Button
                        inputError={currencyInput.inputError}
                        convert={calculateRate}
                        text='Конвертировать'
                    />
                </li>
                <li className={styles.converter__item}>
                    <p className={styles.converter__text}>Результат:</p>
                    <Output from={from} to={to} rates={rates} quantity={quantity} />
                </li>
            </ul>
        </section>
    )
}

export { Converter }