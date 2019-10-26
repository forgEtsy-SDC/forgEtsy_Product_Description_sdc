import React from 'react';
import ShopInfo from './ShopInfo/ShopInfo';
import ProductOptions from './ProductOptions/ProductOptions';
import Style from './BuyBox.css';

export default function BuyBox({ title, price, shopName, shopStars, productOptions, shopId }) {
    return (
        <div>

            <ShopInfo
                shopName={shopName}
                shopId={shopId}
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
            </div>

            <ProductOptions options={productOptions} />

            <div className={Style.button_region}>
                <form className={Style.button_region}>
                    <button className={Style.button}>
                        <div className={Style.button_text}>Add to cart</div>
                    </button>
                </form>
            </div>

            <div className={Style.people_want_this_wrapper}>

                <div className={Style.people_want_this_left}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' height='48' width='48' aria-hidden='true' focusable='false' className={Style.svg}>
                        <g className={Style.g}>
                            <path fill='#FFAC5D' d='M19,33h20l5-18H15' className={Style.path_one}></path>
                            <path fill='#333333' d='M43,14H14.7L13,5.8C12.8,5.3,12.5,5,12,5H5C4.3,5,4,5.4,4,6s0.4,1,1,1h6.2l1.8,8c0,0.1,0,0.3,0.1,0.4   l4,17.8c0.1,0.5,0.5,0.8,1,0.8h20c0.6,0,1-0.4,1-1s-0.4-1-1-1H18.8l-3.6-16H43c0.6,0,1-0.4,1-1S43.6,14,43,14z' className={Style.path}></path>
                            <path fill='#333333' d='M22.5,36c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5S24.3,36,22.5,36z M22.5,41   c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S23.2,41,22.5,41z' className={Style.path}></path>
                            <path fill='#333333' d='M34.5,36c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5S36.3,36,34.5,36z M34.5,41   c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S35.3,41,34.5,41z' className={Style.path}></path>
                        </g>
                        <line fill='none' stroke='#333333' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' x1='37' y1='8' x2='33.8' y2='11.1' className={Style.line_one}></line>
                        <line fill='none' stroke='#333333' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' x1='29' y1='6' x2='29' y2='10' className={Style.line_two}></line>
                        <line fill='none' stroke='#333333' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' x1='21' y1='8' x2='24' y2='11.1' className={Style.line_three}></line>
                    </svg>
                </div>

                <div className={Style.people_want_this_right}>
                    <span className={Style.people_want_this_inner}>Other people want this. </span>
                    Over 20 people have this in their carts right now.
                </div>

            </div>

        </div>
    )
}