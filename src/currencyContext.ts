import React from 'react'

export type CurrencyType = 'USD' | 'JPY' | 'EUR' | 'GPB' | 'AUD' | 'CAD' | 'CNY'
export type Currency = [
  CurrencyType,
  (currency : CurrencyType) => void
]
export const currencyContext = React.createContext<Currency>(['USD', (c) => {return}])