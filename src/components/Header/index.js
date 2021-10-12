import React from 'react';

import { AiOutlineHeart } from 'react-icons/ai';
import { BsBasket } from 'react-icons/bs';

import ImgPlaceholder2 from '../../assets/images/profile.jpeg';

import styles from './header.module.scss';

export default function Header () {
    return(
        <div className={styles.container}>
            <h2>Logo</h2>

            <nav>
                <ul>
                    <li>
                        Category
                        <span>&#x276F;</span>
                    </li>
                    <li>
                        Collection
                        <span>&#x276F;</span>
                    </li>
                    <li>Support</li>
                    <li>Contacts</li>
                </ul>
            </nav>

            <div className={styles.userInfo}>
                <div className={styles.userItem}>
                    <AiOutlineHeart color="#000" size={25} />
                    <div className={styles.favoriteIndicator}></div>
                </div>

                <div className={styles.userItem}>
                    <BsBasket color="#000" size={25} />
                </div>

                <div className={styles.userItem}>
                    <img src={ImgPlaceholder2} alt="User Image" />
                    <span>&#x276F;</span>
                </div>
            </div>
        </div>
    )
}