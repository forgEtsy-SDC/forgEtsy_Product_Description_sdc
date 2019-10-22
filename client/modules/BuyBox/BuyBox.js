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
            <h1>{title}</h1>
            <div>${price}</div>
            <div>Free shipping to <a href='#'>United States</a></div>
            <label htmlFor="quantity">Quantity</label>
            <br></br>
            <select id="quantity">
                <option value='1'>1</option>
            </select>
            <ProductOptions options={productOptions}/>
            <div>
                <button>Add to cart</button>
            </div>
        </div>
    )
}