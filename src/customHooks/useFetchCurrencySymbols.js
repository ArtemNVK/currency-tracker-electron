import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetchCurrencySymbols() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [symbols, setSymbols] = useState()

  useEffect(() => {

    setLoading(true)
    setError(false)

    axios({
        method: 'GET',
        url: 'http://data.fixer.io/api/symbols?',
        params: { access_key: 'fb0ecc151e4e3b6b169ebd8da0952589' },
    }).then(res => {
       setSymbols(res.data.symbols)
       setLoading(false)
    }).catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
    })

  }, [])

  return { loading, error, symbols }
}
