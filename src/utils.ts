export type CurrencyRatesType = {
    [key: string]: number;
}

const CURRENT_CURRENCY_RATES = 'currRate'

export type ConverterType = {
    date: number;
    rates: CurrencyRatesType
}

export const getCurrencyRates = (): string => {
    const rates = localStorage.getItem(CURRENT_CURRENCY_RATES)
     return rates ?? ''
}

export const setCurrencyRates = (obj: CurrencyRatesType) => {
    const data = {
        date: Date.now(),
        rates: obj
    }
    localStorage.setItem(CURRENT_CURRENCY_RATES, JSON.stringify(data))
}

export const unsetCurrencyRates = () => {
    localStorage.removeItem(CURRENT_CURRENCY_RATES)
}
