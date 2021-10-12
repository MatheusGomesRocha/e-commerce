import React, { useState, useEffect } from "react";
import $ from 'jquery';
import { AiOutlineHeart } from 'react-icons/ai';

import ImgMen from '../../assets/images/men1.png';

import styles from './product.module.scss';
import './animation.css';

export default function Product () {
    const [currentDropdown, setCurrentDropdown] = useState('info');
    const [currentSize, setCurrentSize] = useState('m');
    const [currentColor, setCurrentColor] = useState(1);

    useEffect(() => {
        if(currentDropdown === 'info') {
            $("#hiddenTextInfo").show('fast');
            $("#hiddenTextDetail").hide('fast');
            $("#hiddenTextReturn").hide('fast');
        } 
        if (currentDropdown === 'detail') {
            $("#hiddenTextInfo").hide('fast');
            $("#hiddenTextDetail").show('fast');
            $("#hiddenTextReturn").hide('fast');
        }
        if (currentDropdown === 'return') {
            $("#hiddenTextInfo").hide('fast');
            $("#hiddenTextDetail").hide('fast');
            $("#hiddenTextReturn").show('fast');
        }
    }, [currentDropdown]);

    return(
        <div className={styles.container}>
            <div className={styles.sideContent}>
                <div className={styles.path}>
                    <span>Home</span>

                    <span>/</span>

                    <span>Categorys</span>

                    <span>/</span>

                    <span>Hoddies</span>
                </div>

                <div className={styles.sideHeader}>
                    <h1>Red Jacket Rooded</h1>

                    <h1>R$ 548,50</h1>
                </div>

                <div className={styles.sideFooter}>
                    <div className={styles.dropdownItem}>
                        <div onClick={() => setCurrentDropdown('info')} id="dropdownToggle" className={styles.dropdownToggle}>
                            <span>Product Info</span>
                            <span className={styles.icon} id={currentDropdown === 'info' ? 'activeIcon' : 'inactiveIcon'}>&#x276F;</span>
                        </div>

                        <div className={styles.hiddenText}>
                            <p id="hiddenTextInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    {/* /////////////// */}

                    <div className={styles.dropdownItem}>
                        <div onClick={() => setCurrentDropdown('detail')} id="dropdownToggle" className={styles.dropdownToggle}>
                            <span>Details</span>
                            <span className={styles.icon} id={currentDropdown === 'detail' ? 'activeIcon' : 'inactiveIcon'}>&#x276F;</span>
                        </div>

                        <div className={styles.hiddenText}>
                            <p id="hiddenTextDetail">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    {/* /////////////// */}

                    <div className={styles.dropdownItem}>
                        <div onClick={() => setCurrentDropdown('return')} id="dropdownToggle" className={styles.dropdownToggle}>
                            <span>Deliverys & Returns</span>
                            <span className={styles.icon} id={currentDropdown === 'return' ? 'activeIcon' : 'inactiveIcon'}>&#x276F;</span>
                        </div>

                        <div className={styles.hiddenText}>
                            <p id="hiddenTextReturn">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.imgContainer}>
                <img src={ImgMen} alt="Men with a hoddie" />
            </div>

            <div className={styles.sideContent}>
                <div className={styles.sideHeader}>
                    <h2>Choose size</h2>

                    <div className={styles.sideRow}>
                        <div onClick={() => setCurrentSize('xs')} id={currentSize === 'xs' ? 'currentSize' : undefined} className={styles.sizeItem}>
                            <span>XS</span>
                        </div>
                        <div onClick={() => setCurrentSize('s')} id={currentSize === 's' ? 'currentSize' : undefined} className={styles.sizeItem}>
                            <span>S</span>
                        </div>
                        <div onClick={() => setCurrentSize('m')} id={currentSize === 'm' ? 'currentSize' : undefined} className={styles.sizeItem}>
                            <span>M</span>
                        </div>
                        <div onClick={() => setCurrentSize('l')} id={currentSize === 'l' ? 'currentSize' : undefined} className={styles.sizeItem}>
                            <span>L</span>
                        </div>
                        <div onClick={() => setCurrentSize('xl')} id={currentSize === 'xl' ? 'currentSize' : undefined} className={styles.sizeItem}>
                            <span>XL</span>
                        </div>
                    </div>
                </div>

                <div className={styles.sideHeader}>
                    <h2>Choose color</h2>

                    <div className={styles.sideRow}>
                        <div style={{backgroundColor: '#271919'}} onClick={() => setCurrentColor(1)} className={styles.colorItem}>
                            <div className={currentColor === 1 ? styles.currentColor : undefined}></div>
                        </div>

                        <div style={{backgroundColor: '#F9C122'}} onClick={() => setCurrentColor(2)} className={styles.colorItem}>
                            <div className={currentColor === 2 ? styles.currentColor : undefined}></div>
                        </div>

                        <div style={{backgroundColor: '#CA0808'}} onClick={() => setCurrentColor(3)} className={styles.colorItem}>
                            <div className={currentColor === 3 ? styles.currentColor : undefined}></div>
                        </div>

                        <div style={{backgroundColor: '#548C1D'}} onClick={() => setCurrentColor(4)} className={styles.colorItem}>
                            <div className={currentColor === 4 ? styles.currentColor : undefined}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.sideButtonArea}>
                    <div className={styles.favoriteButton}>
                        <AiOutlineHeart color="#000" size={25} />
                    </div>

                    <div className={styles.addCart}>
                        <span>Add to Cart</span>
                    </div>
                </div>
            </div>
        </div>
    )
}