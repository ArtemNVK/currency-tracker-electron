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
                <div className={styles.dropdown}>
                    <button className={styles.dropdown__click} onClick={() => handleOpenDropdown()}>Select currency</button>
                    <div className={!open ? styles.dropdown__list : styles.dropdown__newList}>
                        {Object.entries(symbols).map(([key, value]) => {
                            return (
                                <button key={key} className={styles.dropdown__rates} onClick={() => handleSelectCurrency(key, value)}>{value}</button>
                            )
                        })
                        }
                    </div>
                </div>
            }
        </div>
    )
}
