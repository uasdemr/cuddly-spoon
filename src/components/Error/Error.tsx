import styles from './Error.module.scss'

type ErrorProps = {
    isDirty: boolean
    isEmpty: boolean;
    minLengthError: boolean;
    inputError: boolean;
}

const Error = ({ isEmpty, minLengthError, isDirty, inputError }: ErrorProps) => {
    return (
        <div className={styles.error}>
            {(isDirty && isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
            {(isDirty && minLengthError) && <div style={{ color: 'red' }}>Поле должно содержать больше 2 символов</div>}
            {(isDirty && inputError) && <div title='Формат строки должен быть вида: 15 usd in rub' style={{ color: 'red' }}>Не корректный ввод строки для запроса</div>}

        </div>
    )
}

export { Error }