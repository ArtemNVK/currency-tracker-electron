import React, { useEffect, useState } from 'react'
import useFetchCurrencySymbols from '../../../customHooks/useFetchCurrencySymbols';
import styles from './DropdownButton.module.css';

export default function DropdownButton({rates, setCurrencyToDisplay}) {
    const [open, setOpen] = useState(false);
    // fetch currency symbols
    const {
        symbols,
        loading,
        error
    } = useFetchCurrencySymbols();

    const handleOpenDropdown = () => {
        setOpen(prevState => !prevState);
    }

    const handleSelectCurrency = (key, value) => {
        setCurrencyToDisplay({abbreviation: key, name: value});
        setOpen(prevState => !prevState);
    }

    return (
        <div>
            {loading && <p>Loading ...</p>}
            {error && <p>Something went wrong ...</p>}
            {symbols && 
                <div className={styles.container}>
                    <button className={styles.click} onClick={() => handleOpenDropdown()}>Select currency</button>
                    <div className={!open ? styles.list : styles.newList}>
                        {Object.entries(symbols).map(([key, value]) => {
                            return (
                                <button key={key} className={styles.rates} onClick={() => handleSelectCurrency(key, value)}>{value}</button>
                            )
                        })
                        }
                    </div>
                </div>
            }
        </div>
    )
}
