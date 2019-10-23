import React from 'react';
import Style from './SellerInfo.css';

export default function SellerInfo({ shopName, shopIconURL }) {
    return (
        <div className={Style.wrapper}>

            <h2 className={Style.meet}>Meet <a href='#' className={Style.meet_a}>{shopName}</a></h2>

            <div className={Style.seller_wrapper}>

                <div className={Style.image_wrapper}>
                    <img className={Style.image} src={shopIconURL}></img>
                </div>

                <div className={Style.seller_info_wrapper}>
                    <h3 className={Style.seller_name}>Random Name</h3>

                    <p className={Style.location_wrapper}>
                        <span className={Style.location_icon_wrapper}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' focusable='false' className={Style.svg}>
                                <path d='M12,3A6.287,6.287,0,0,0,6,9c0,3.167,6,12,6,12s6-8.812,6-12A6.287,6.287,0,0,0,12,3Zm0,7.875a2.25,2.25,0,1,1,2.25-2.25A2.25,2.25,0,0,1,12,10.875Z' className={Style.path}></path>
                            </svg>
                        </span>
                        Miami, Flordia
                    </p>

                </div>

            </div>

            <div className={Style.message_seller}>
                <a href='#' className={Style.message_seller_a}>Message the Seller</a>
            </div>

            <div className={Style.seller_response}>This seller usually responds <b className={Style.b}>within a few hours.</b></div>

        </div>
    )
}