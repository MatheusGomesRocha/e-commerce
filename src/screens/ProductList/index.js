import React, { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import styles from './productList.module.scss';
import './animation.css';

export default function ProductList () {
    const [searchFilter, setSearchFilter] = useState('all');

    return(
        <div className={styles.container}>
            <div className={styles.logoTitle}>
                <h1>LOGO</h1>
                <h1>Search</h1>
            </div>

            <div className={styles.searchArea}>
                <div className={styles.inputArea}>
                    <input placeholder="Write Something..." />

                    <div className={styles.searchFilterArea}>
                        <div onClick={() => setSearchFilter('all')} id={searchFilter === 'all' ? 'activeFilter' : undefined} className={styles.searchFilterItem}>
                            <span>All fields</span>
                        </div>

                        <div onClick={() => setSearchFilter('clothing')} id={searchFilter === 'clothing' ? 'activeFilter' : undefined} className={styles.searchFilterItem}>
                            <span>Clothing</span>
                        </div>

                        <div onClick={() => setSearchFilter('acessories')} id={searchFilter === 'acessories' ? 'activeFilter' : undefined} className={styles.searchFilterItem}>
                            <span>Acessories</span>
                        </div>

                        <div onClick={() => setSearchFilter('footwear')} id={searchFilter === 'footwear' ? 'activeFilter' : undefined} className={styles.searchFilterItem}>
                            <span>Footwear</span>
                        </div>
                    </div>
                </div>

                <div className={styles.searchButton}>
                    <AiOutlineSearch color="#fff" size={25} />
                </div>
            </div>
        </div>
    )
}