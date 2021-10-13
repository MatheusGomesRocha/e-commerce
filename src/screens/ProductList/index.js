import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import Img2 from '../../assets/images/men2.png';

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

let filterOccasionsArray = [
    {id: 1, name: 'Wedding'},
    {id: 2, name: 'Birthday'},
    {id: 3, name: 'Trip'},
];

let filterSizeArray = [
    {id: 1, name: 'XP'},
    {id: 2, name: 'P'},
    {id: 3, name: 'M'},
    {id: 4, name: 'L'},
    {id: 5, name: 'XL'},
    {id: 6, name: 'XXL'},
];

let filterPriceArray = [
    {id: 1, name: 'R$ 100 - R$ 500'},
    {id: 2, name: 'R$ 500 - R$ 1000'},
    {id: 3, name: 'R$ 1000 - R$ 2000'},
    {id: 4, name: 'R$ 2000 - R$ 5000'},
];

let productsArray = [
    {id: 1, img: Img2, name: 'Jacket with hoddie', price: 1050.90},
    {id: 2, img: Img2, name: 'Jacket with hoddie', price: 1050.90},
    {id: 3, img: Img2, name: 'Jacket with hoddie', price: 1050.90},
    {id: 4, img: Img2, name: 'Jacket with hoddie', price: 1050.90},
    {id: 5, img: Img2, name: 'Jacket with hoddie', price: 1050.90},
    {id: 6, img: Img2, name: 'Jacket with hoddie', price: 1050.90},
    {id: 7, img: Img2, name: 'Jacket with hoddie', price: 1050.90},
    {id: 8, img: Img2, name: 'Jacket with hoddie', price: 1050.90},
];

export default function ProductList () {
    const [searchFilter, setSearchFilter] = useState('all');
    const [filterProduct, setFilterCategories] = useState('');
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
                                    <div style={{backgroundColor: filterProduct === item.name ? '#000' : '#fff'}} className={styles.checkbox}>
                                        {filterProduct === item.name ? 
                                            <span>&#x2713;</span>
                                            :
                                            undefined
                                        }
                                    </div>
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
                            {filterOccasionsArray.map((item, k) => (
                                <div key={k} onClick={() => setFilterCategories(item.name)} className={styles.contentFilterItemRow}>
                                    <div style={{backgroundColor: filterProduct === item.name ? '#000' : '#fff'}} className={styles.checkbox}>
                                        {filterProduct === item.name ? 
                                            <span>&#x2713;</span>
                                            :
                                            undefined
                                        }
                                    </div>
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
                            {filterSizeArray.map((item, k) => (
                                <div key={k} onClick={() => setFilterCategories(item.name)} className={styles.contentFilterItemRow}>
                                    <div style={{backgroundColor: filterProduct === item.name ? '#000' : '#fff'}} className={styles.checkbox}>
                                        {filterProduct === item.name ? 
                                            <span>&#x2713;</span>
                                            :
                                            undefined
                                        }
                                    </div>
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
                            {filterPriceArray.map((item, k) => (
                                <div key={k} onClick={() => setFilterCategories(item.name)} className={styles.contentFilterItemRow}>
                                    <div style={{backgroundColor: filterProduct === item.name ? '#000' : '#fff'}} className={styles.checkbox}>
                                        {filterProduct === item.name ? 
                                            <span>&#x2713;</span>
                                            :
                                            undefined
                                        }
                                    </div>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.contentProductArea}>
                    {productsArray.map((item, k) => (
                        <div key={k} className={styles.productItem}>
                            <div className={styles.imgContainer}>
                                <img alt="Product" src={item.img} />
                            </div>
                            <span>{item.name}</span>
                            <h2>R$ {item.price.toFixed(2)}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}