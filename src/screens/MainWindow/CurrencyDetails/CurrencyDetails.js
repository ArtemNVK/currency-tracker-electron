import React from 'react';
import styles from './CurrencyDetails.module.css';

export default function CurrencyDetails({rates, currencyToDisplay, flagLoading, flagError, flag}) {

    return (
        <div className={styles.root}>
            <div className={styles.currencyDetails__spans}>
                <span className={styles.currencyDetails__span}>
                    {flagLoading && <span>Loading...</span>}
                    {flagError && <span>Error</span>}
                    {flag && <img src={flag} alt={currencyToDisplay.abbreviation} />}
                </span>
                <span className={styles.currencyDetails__span}>{currencyToDisplay.abbreviation}</span>
                <span className={styles.currencyDetails__span}>{currencyToDisplay.name}</span> 
                <span className={styles.currencyDetails__span}>{rates[currencyToDisplay.abbreviation]}</span>
            </div>
        </div>
    )
}
