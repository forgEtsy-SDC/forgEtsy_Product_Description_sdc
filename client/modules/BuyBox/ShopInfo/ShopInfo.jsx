import React from 'react';
import Style from './ShopInfo.css';
import faker from 'faker';

export default function ShopInfo({ shopName, shopStars, shopId }) {
    let stars = shopStars || 3;
    let starsArray = Array(stars).fill(1);

    faker.seed(shopId);

    let numberOfReviews = faker.random.number({
        min: 400,
        max: 8000
    });

    return (
        <div className={Style.wrapper}>

            <a href='#' className={Style.name}>{shopName}</a>
            <a href='#' className={Style.rating_wrapper}>
                {starsArray.map((star) => {
                    return (
                        <span className={Style.star_wrapper}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='3 3 18 18' focusable='false'>
                                <path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path>
                            </svg>
                        </span>
                    )
                })}
                <span className={Style.number_of_reviews}>({numberOfReviews})</span>
            </a>

        </div>
    )
}