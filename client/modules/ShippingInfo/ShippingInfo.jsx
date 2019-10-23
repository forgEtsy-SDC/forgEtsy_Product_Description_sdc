import React from 'react';
import Style from './ShippingInfo.css';

export default function ShippingInfo() {
    return (
        <div className={Style.wrapper}>
            <div className={Style.inner_wrapper}>

                <div className={Style.shipping_policies_wrapper}>
                    <h2 className={Style.h2}>Shipping & policies</h2>
                </div>

                <div className={Style.shipping_from_wrapper}>

                    <div className={Style.estimated_delivery_wrapper}>
                        Get it fast! Ready to ship in 1-2 business days.
                    </div>

                    <div className={Style.from}>
                        From United States
                    </div>

                    <div className={Style.shipping_costs_wrapper}>
                        <div className={Style.view_shipping_costs_wrapper_inner}>
                            <div className={Style.button_wrapper}>
                                <button className={Style.button}>Get shipping cost</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={Style.view_policies_wrapper}>
                    <button className={Style.view_policies_button}>
                        <span className={Style.view_policies_span}>
                            View shop policies
                        </span>
                    </button>
                </div>

            </div>
        </div>
    )
}