import React from "react";

import Img2 from '../../assets/images/men2.png';

import styles from './cart.module.scss';

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

export default function Cart () {
    return(
        <div className={styles.container}>
            <div className={styles.cartProductsArea}>
                <div className={styles.header}>
                    <h1>Cart</h1>
                    <span>Price</span>
                </div>

                {productsArray.map((item, k) => (
                    <div key={k} className={styles.cartItem}>
                        <div className={styles.checkbox} />

                        <div className={styles.imgContainer}>
                            <img src={item.img} alt="cart product" />
                        </div>

                        <div className={styles.productInfo}>
                            <h2>{item.name}</h2>

                            <div className={styles.productOptions}>
                                <div className={styles.quantityItem}>
                                    <span>Qtd: 1</span>
                                    <span className={styles.icon}>&#x276F;</span>
                                </div>

                                <div className={styles.optionButton}>
                                    <span>Delete</span>
                                </div>

                                <div className={styles.optionButton}>
                                    <span>Save for later</span>
                                </div>
                            </div>
                        </div>

                        <h2 className={styles.price}>R$ {item.price.toFixed(2)}</h2>
                    </div>
                ))}
            </div>

            <div className={styles.sideArea}>
                <div className={styles.subtotalArea}>
                    <span>Subtotal (7 Items): <strong>R$ 257,60</strong></span>

                    <div className={styles.orderButton}>
                        <span>Order now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}