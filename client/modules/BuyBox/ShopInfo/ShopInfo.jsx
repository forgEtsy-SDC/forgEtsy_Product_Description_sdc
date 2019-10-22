import React from 'react';
import Style from './ShopInfo.css';

export default function ShopInfo({ shopName, shopStars }) {
    return (
        <div className={Style.wrapper}>
            <div>{shopName}</div>
            <div>{shopStars}</div>
        </div>
    )
}