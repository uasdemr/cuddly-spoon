import { useEffect, useState } from "react"

type UseValidationProps = {
    value: string;
    validationOptions: {
        minLength: number;
        isEmpty: boolean;
        isRegExp: boolean;
    }
}

const useValidation = (props: UseValidationProps) => {
    const { value, validationOptions } = props

    const [isEmpty, setIsEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [inputError, setInputError] = useState(false)

    useEffect(() => {
        for (let validation in validationOptions) {

            switch (validation) {

                case 'minLength':
                    value.length < validationOptions[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;

                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;

                case 'isRegExp':
                    const inputREGX = /^\d+ [a-z]{3,4} in [a-z]{3,4}$/
                    inputREGX.test(value) ? setInputError(false) : setInputError(true)
                    break;
            }
        }
    }, [value])

    return {
        isEmpty,
        minLengthError,
        inputError
    }
}

export { useValidation }