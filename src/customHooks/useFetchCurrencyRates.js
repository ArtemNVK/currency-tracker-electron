import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetchCurrencyRates() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [rates, setRates] = useState([])

  useEffect(() => {

    setLoading(true)
    setError(false)

    axios({
        method: 'GET',
        url: 'http://data.fixer.io/api/latest?',
        params: { access_key: 'fb0ecc151e4e3b6b169ebd8da0952589' },
    }).then(res => {
       setRates(res.data.rates)
       setLoading(false)
    }).catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
    })

  }, [])

  return { loading, error, rates }
}
