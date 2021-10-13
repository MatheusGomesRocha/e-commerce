import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Img1 from '../../assets/images/men2.png';

import styles from './home.module.scss';

let productsArray = [
    {id: 1, img: Img1, name: 'Jacket with hoddie', price: 1050.90},
    {id: 2, img: Img1, name: 'Jacket with hoddie', price: 1050.90},
    {id: 3, img: Img1, name: 'Jacket with hoddie', price: 1050.90},
    {id: 4, img: Img1, name: 'Jacket with hoddie', price: 1050.90},
    {id: 5, img: Img1, name: 'Jacket with hoddie', price: 1050.90},
    {id: 6, img: Img1, name: 'Jacket with hoddie', price: 1050.90},
    {id: 7, img: Img1, name: 'Jacket with hoddie', price: 1050.90},
    {id: 8, img: Img1, name: 'Jacket with hoddie', price: 1050.90},
];

export default function Home () {
    return(
        <div className={styles.container}>
            <div className={styles.bannerContent}>
                <div className={styles.leftContent}>
                    <h1>The best clothes that you can find</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div className={styles.button}>
                        <span>Order now</span>
                    </div>
                </div>
                
                <img src={Img1} />
            </div>

            <div className={styles.infoArea}>
                <div className={styles.infoItem}>
                    <h2>2000+</h2>
                    <p>Products delivered</p>
                </div>

                <div className={styles.infoItem}>
                    <h2>3000+</h2>
                    <p>Happy clients</p>
                </div>

                <div className={styles.infoItem}>
                    <h2>1000+</h2>
                    <p>Products sold</p>
                </div>

                <div className={styles.infoItem}>
                    <h2>15+</h2>
                    <p>Years on the market</p>
                </div>
            </div>

            <div className={styles.productsArea}>
                <div className={styles.productsHeader}>
                    <span>Products</span>
                    <h2>Our best sellers this week</h2>
                </div>

                <div className={styles.productsList}>
                    {productsArray.map((item, k) => (
                        <div key={k} className={styles.productsItem}>
                            <div className={styles.imgContainer}>
                                <img src={item.img} />
                            </div>

                            <div className={styles.productsRow}>
                                <div className={styles.productsInfo}>
                                    <span>{item.name}</span>
                                    <strong>R$ {item.price.toFixed(2)}</strong>
                                </div>

                                <div className={styles.cartButton}>
                                    <AiOutlineShoppingCart color="#fff" size={25} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}