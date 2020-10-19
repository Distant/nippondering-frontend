import { CurrencyType, currencyContext } from "../currencyContext"
import React, { useRef, useContext } from "react"
import useSWR, { responseInterface } from "swr"
import { Interface } from "readline"

export const useCurrency = (func: (currency: CurrencyType) => Promise<void>, alwaysFetch?: boolean): [boolean, React.Dispatch<React.SetStateAction<boolean>>?] => {
  const [loaded, setLoaded] = React.useState(true)
  const [currency] = React.useContext(currencyContext)
  const run = useRef(false)

  React.useEffect(() => {
    const fetch = async () => {
      if (alwaysFetch || (!run.current && currency !== 'USD') || run.current) {
        setLoaded(false) // leave true on first render for ssg
        await func(currency)
        setLoaded(true)
      }
      else {
        console.log("in usd, not fetching")
        setLoaded(true)
      }
    }
    fetch()
    run.current = true
  }, [currency])
  return [loaded]
}

interface ResponseValues<T> {
  fetching: boolean,
  data: T,
  error: any,
  isValidating: boolean
}

export function useCurrencyEffect<T>(keyFn: (currency: CurrencyType) => string, fetch: (url: string) => Promise<T>, defaultData: T, compare?: (first: T, second: T) => boolean): ResponseValues<T> {
  const dataRef = React.useRef(defaultData)
  const [currency, setCurrency] = useContext(currencyContext)

  const { data, error, isValidating } = useSWR<T, any>(keyFn(currency), fetch, { errorRetryCount: 0, shouldRetryOnError: false, revalidateOnFocus: false })
  if (error) setCurrency("USD")

  //use provided compare function if possible
  const shouldUpdate = data && compare ? !compare(dataRef.current, data) : data !== dataRef.current
  if (data && shouldUpdate) dataRef.current = data

  return { fetching: !data && !error, data: dataRef.current, error: error, isValidating: isValidating }

}