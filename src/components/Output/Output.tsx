import styles from './Output.module.scss'
type OutputProps = {
    rates: number;
    quantity: number;
    from: string;
    to: string;
}

const makeRateString = (props: OutputProps) => {
    const { rates, quantity, from, to } = props
    return (
        quantity ? `${quantity} ${from} = ${rates.toFixed(4)} ${to}` : ''
    )
}

const Output = (props: OutputProps) => {

    return (
        <div className={styles.output}>
            {makeRateString(props)}
        </div>
    )
}

export { Output }