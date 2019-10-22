import React from 'react';
import ShopInfo from './ShopInfo/ShopInfo';
import ProductOptions from './ProductOptions/ProductOptions';

export default function BuyBox({ title, price, shopName, shopStars, productOptions }) {
    return (
        <div>
            <ShopInfo 
                shopName={shopName}
                shopStars={shopStars}
            />
            <div>{title}</div>
            <div>${price}</div>
            <ProductOptions options={productOptions}/>
        </div>
    )
}