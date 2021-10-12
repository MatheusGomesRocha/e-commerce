import React, { useState, useEffect } from "react";
import $ from 'jquery';

import ImgMen from '../../assets/images/men1.png';

import styles from './product.module.scss';
import './animation.css';

export default function Product () {
    const [currentDropdown, setCurrentDropdown] = useState('info');

    useEffect(() => {
        if(currentDropdown === 'info') {
            $("#hiddenTextInfo").show('normal');
            $("#hiddenTextDetail").hide('normal');
            $("#hiddenTextReturn").hide('normal');
        } 
        if (currentDropdown === 'detail') {
            $("#hiddenTextInfo").hide('normal');
            $("#hiddenTextDetail").show('normal');
            $("#hiddenTextReturn").hide('normal');
        }
        if (currentDropdown === 'return') {
            $("#hiddenTextInfo").hide('normal');
            $("#hiddenTextDetail").hide('normal');
            $("#hiddenTextReturn").show('normal');
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

                    <div className={styles.dropdownItem}>
                        <div onClick={() => setCurrentDropdown('detail')} id="dropdownToggle" className={styles.dropdownToggle}>
                            <span>Details</span>
                            <span className={styles.icon} id={currentDropdown === 'detail' ? 'activeIcon' : 'inactiveIcon'}>&#x276F;</span>
                        </div>

                        <div className={styles.hiddenText}>
                            <p id="hiddenTextDetail">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

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
                <img src={ImgMen} />
            </div>

            <div className={styles.sideContent}></div>
        </div>
    )
}