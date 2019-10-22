import React from 'react';

export default function ShopInfo({ shopName, shopStars }) {
    return (
        <div>
            <div>{shopName}</div>
            <div>{shopStars}</div>
        </div>
    )
}