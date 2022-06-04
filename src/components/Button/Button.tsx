import styles from './Button.module.scss'

type ButtonProps = {
  text: string;
  convert: () => void
  inputError: boolean
}

const Button = (props: ButtonProps) => {
  const { text = '', convert, inputError } = props

  return (
    <button
      onClick={convert}
      className={styles.button}
      disabled={inputError ? true : false}
    >
      <span className={styles.button__text}>
        {text}
      </span>
    </button>
  )
}

export { Button }