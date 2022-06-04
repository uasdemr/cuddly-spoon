import { ChangeEvent, useEffect, useState } from "react"
import { useValidation } from "./useValidation";

type UseInputProps = {
    initialValue: string;
    validationOptions: {
        isEmpty: boolean
        minLength: number
        isRegExp: boolean;
    }
}

const useInput = (props: UseInputProps) => {
    const { initialValue, validationOptions } = props

    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState<boolean>(false)

    const valid = useValidation({ value, validationOptions })

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setValue(evt.currentTarget.value)
    }

    const onBlur = (evt: ChangeEvent<HTMLInputElement>) => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

export {
    useInput
}