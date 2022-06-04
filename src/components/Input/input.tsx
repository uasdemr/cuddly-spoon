import { ChangeEvent } from 'react'
import styles from './Input.module.scss'
import { useInput } from '../../hooks/useInput';
import { Error } from '../Error/Error';

type InputProps = {
    type?: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (evt: ChangeEvent<HTMLInputElement>) => void;
    inputError: boolean;
    isDirty: boolean;
    isEmpty: boolean;
    minLengthError: boolean;
    value: string;
}

const Input = (props: InputProps) => {
    const {
        type = 'text',
        value,
        onChange,
        onBlur,
        isDirty,
        isEmpty,
        minLengthError,
        inputError
    } = props

    return (
        <>
            <input
                value={value} type={type}
                onChange={evt => onChange(evt)}
                onBlur={evt => onBlur(evt)}
                className={styles.input}
                placeholder='15 usd in rub'
                title='Формат строки должен быть вида: 15 usd in rub'
            />
            <Error
                isDirty={isDirty}
                isEmpty={isEmpty}
                minLengthError={minLengthError}
                inputError={inputError}
            />
        </>
    )
}

export { Input }