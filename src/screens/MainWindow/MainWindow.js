import React, { useState } from 'react'
import useFetchCurrencyFlag from '../../customHooks/useFetchCurrencyFlag';
import useFetchCurrencyRates from '../../customHooks/useFetchCurrencyRates';
import CurrencyDetails from './CurrencyDetails/CurrencyDetails';
import DropdownButton from './DropdownButton/DropdownButton';
import styles from './MainWindow.module.css';

export default function MainWindow() {
    const [currencyToDisplay, setCurrencyToDisplay] = useState(null);

    // fetch currency rates
    const {
        rates,
        loading,
        error
      } = useFetchCurrencyRates();

    const {
        flagLoading,
        flagError,
        flag
      } = useFetchCurrencyFlag(currencyToDisplay);

    
    return (
        <div className={styles.root}>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong...</p>}
            {rates &&
                <DropdownButton rates={rates} setCurrencyToDisplay={setCurrencyToDisplay} />
            }
            {currencyToDisplay && 
                <CurrencyDetails rates={rates} currencyToDisplay={currencyToDisplay} flagLoading={flagLoading} flagError={flagError} flag={flag} />
            }
        </div>
    )
}
