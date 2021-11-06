import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetchCurrencyFlag(currency) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [flagLoading, setFlagLoading] = useState(true)
  const [flagError, setFlagError] = useState(false)
  const [countries, setCountries] = useState(null)
  const [country, setCountry] = useState(null);
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
        method: 'GET',
        url: 'http://country.io/currency.json',
    }).then(res => {
       setCountries(res.data)
       const fetchCountry = Object.keys(countries).find(key => countries[key] === currency.abbreviation);
       setCountry(fetchCountry.toLowerCase());
       setLoading(false)
    }).catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
    })
  }, [countries, currency?.abbreviation])

  useEffect(() => {
    if (country) {
        setFlagLoading(true)
        setFlagError(false)
        axios({
            method: 'GET',
            url: `https://flagcdn.com/32x24/${country}.png`,
        }).then(res => {
           setFlag(res.config.url)
           setFlagLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setLoading(false)
            setFlagError(true)
        })
    }  
  }, [country]);



  return { flagLoading, flagError, flag }
}
