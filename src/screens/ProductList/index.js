import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import { AiOutlineSearch } from 'react-icons/ai';

import styles from './productList.module.scss';
import './animation.css';

let filterCategoriesArray = [
    {id: 1, name: 'Shirts'},
    {id: 2, name: 'T-Shirts'},
    {id: 3, name: 'Jackets'},
    {id: 4, name: 'Hoddies'},
    {id: 5, name: 'Pants'},
    {id: 6, name: 'Suits'},
];

export default function ProductList () {
    const [searchFilter, setSearchFilter] = useState('all');
    const [filterCategories, setFilterCategories] = useState('');
    const [currentShowingFilter, setCurrentShowingFilter] = useState('categories');

    useEffect(() => {
        if(currentShowingFilter === 'categories') {
            $("#contentFilterItem1").show('fast');
            $("#contentFilterItem2").hide('fast');
            $("#contentFilterItem3").hide('fast');
            $("#contentFilterItem4").hide('fast');
        } 
        if (currentShowingFilter === 'occasions') {
            $("#contentFilterItem1").hide('fast');
            $("#contentFilterItem2").show('fast');
            $("#contentFilterItem3").hide('fast');
            $("#contentFilterItem4").hide('fast');
        }
        if (currentShowingFilter === 'size') {
            $("#contentFilterItem1").hide('fast');
            $("#contentFilterItem2").hide('fast');
            $("#contentFilterItem3").show('fast');
            $("#contentFilterItem4").hide('fast');
        }
        if (currentShowingFilter === 'price') {
            $("#contentFilterItem1").hide('fast');
            $("#contentFilterItem2").hide('fast');
            $("#contentFilterItem3").hide('fast');
            $("#contentFilterItem4").show('fast');
        }
    }, [currentShowingFilter]);

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

            <div className={styles.searchInfo}>
                <span className={styles.searchFound}>1658 Items Found</span>

                <div className={styles.searchVisibilityMode}>
                    <span>Grid View</span>
                    <span>List View</span>
                    <div className={styles.searchVisibilityModeItem}>
                        <span>Sort</span>
                        <span className={styles.icon}>&#x276F;</span>
                    </div>
                </div>
            </div>

            <div className={styles.contentRow}>
                <div className={styles.contentFilterArea}>
                    <div className={styles.contentFilterItem}>
                        <div onClick={() => setCurrentShowingFilter('categories')} className={styles.contentFilterItemHeader}>
                            <span>Categories</span>
                            <span className={styles.icon}>&#x276F;</span>
                        </div>

                        <div id="contentFilterItem1">
                            {filterCategoriesArray.map((item, k) => (
                                <div key={k} onClick={() => setFilterCategories(item.name)} className={styles.contentFilterItemRow}>
                                    <div style={{backgroundColor: filterCategories === item.name ? '#000' : '#fff'}} className={styles.checkbox}></div>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.contentFilterItem}>
                        <div onClick={() => setCurrentShowingFilter('occasions')} className={styles.contentFilterItemHeader}>
                            <span>Occasions</span>
                            <span className={styles.icon}>&#x276F;</span>
                        </div>

                        <div id="contentFilterItem2">
                            {filterCategoriesArray.map((item, k) => (
                                <div key={k} onClick={() => setFilterCategories(item.name)} className={styles.contentFilterItemRow}>
                                    <div style={{backgroundColor: filterCategories === item.name ? '#000' : '#fff'}} className={styles.checkbox}></div>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.contentFilterItem}>
                        <div onClick={() => setCurrentShowingFilter('size')} className={styles.contentFilterItemHeader}>
                            <span>Size</span>
                            <span className={styles.icon}>&#x276F;</span>
                        </div>

                        <div id="contentFilterItem3">
                            {filterCategoriesArray.map((item, k) => (
                                <div key={k} onClick={() => setFilterCategories(item.name)} className={styles.contentFilterItemRow}>
                                    <div style={{backgroundColor: filterCategories === item.name ? '#000' : '#fff'}} className={styles.checkbox}></div>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.contentFilterItem}>
                        <div onClick={() => setCurrentShowingFilter('price')} className={styles.contentFilterItemHeader}>
                            <span>Price</span>
                            <span className={styles.icon}>&#x276F;</span>
                        </div>

                        <div id="contentFilterItem4">
                            {filterCategoriesArray.map((item, k) => (
                                <div key={k} onClick={() => setFilterCategories(item.name)} className={styles.contentFilterItemRow}>
                                    <div style={{backgroundColor: filterCategories === item.name ? '#000' : '#fff'}} className={styles.checkbox}></div>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}