import React from 'react';
import ShopInfo from './ShopInfo/ShopInfo';
import ProductOptions from './ProductOptions/ProductOptions';
import Style from './BuyBox.css';

export default function BuyBox({ title, price, shopName, shopStars, productOptions }) {
    return (
        <div>

            <ShopInfo
                shopName={shopName}
                shopStars={shopStars}
            />

            <div className={Style.title_wrapper}>
                <h1 className={Style.title}>{title}</h1>
            </div>

            <div className={Style.pricing_wrapper}>
                <p className={Style.major_minor}>
                    <span className={Style.price_major}>${price}+ </span>
                    <s className={Style.price_minor}>${(price * 1.62).toFixed(2)}</s>
                </p>
                <p className={Style.save}>
                    You save {((price * 1.62) - price).toFixed(2)} (62%)
                </p>
                <div className={Style.shipping}>
                    Free shipping to <a href='#'>United States</a>
                </div>
            </div>

            <ProductOptions options={productOptions} />

            <div className={Style.button_region}>
                <div>

                </div>
            </div>

        </div>
    )
}