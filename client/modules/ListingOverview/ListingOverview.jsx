import React from 'react';
import Style from './ListingOverview.css';

export default function ListingOverview({ description }) {
    return (
        <div className={Style.wrapper}>

            <h2 className={Style.item_details}>Item details</h2>

            <div className={Style.handmade_wrapper}>

                <span className={Style.handmade_left}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 47.1 62.5' width='30' height='30' aria-hidden='true' focusable='false' className={Style.svg}>
                        <path d='M19.6 47.6c-.6-.4-7.9-7.2-8.1-7.5-.2-.3-1.8-2.6-2.1-3.1-.4-.5-5.9-8.7-7-10.4-.7-1.1-1.9-2.8-1.9-3.3s.6-1.4.7-1.5c.1-.2 1.2-.7 1.7-.4.4.3 3.7 3.2 3.8 3.6s5 4.6 5.3 4.7c.4.1.6-1 .6-1s-.9-2.1-1-2.3c-.1-.2-6.1-12.4-6.2-12.8-.1-.4-1.9-3.5-1.9-4S4.6 8 5 7.9c.4-.1 2 0 2.2.1.2.2 7.9 11.9 8.8 13 .8 1.1 2.5 3.3 2.9 3.4.3.1.9-1.1.9-1.1s-3.2-11.8-3.3-12.2-2.8-6.6-2.9-7.2.2-2 .5-2.3 1.9-.6 2.7-.2c.8.8 4.3 8.5 4.8 9.6s4 8.5 4.5 9.1c.5.6 1.1.6 1.6.3.3-.1.3-9.4.3-9.4s-.1-2.4.2-3.5c.1-.6 1.4-1.4 2.1-1.5s1.9 1.5 2.1 1.8c.1.1.6 4.9 1.2 9.6.6 4.5 1.4 9 1.4 9.2 0 .3.5 1.1 1 1 .5-.2 3.6-2.4 4.1-2.6.6-.3 3.3-2.2 3.5-2.3.2-.1 1.4.1 1.4.1s.8.9 1.4 1.8c-.3.9-.6 1.5-1 2.2-1.7 3.2-3.8 6.6-5 8.8-1 1.9-1.9 3.6-1.9 3.7 0 .2 5.6 10.4 5.6 10.4L26.7 61.5s-.6-.7-1.3-2.1c-.7-1.3-1.5-3.2-2.3-4.9-1.9-3.7-3.2-6.7-3.5-6.9z' fillRule='evenodd' clipRule='evenodd' fill='#222' className={Style.path}></path>
                    </svg>
                </span>

                <p className={Style.handmade_right}>Handmade</p>

            </div>

            {description}
        </div>
    )
}