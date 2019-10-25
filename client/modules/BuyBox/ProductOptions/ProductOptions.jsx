import React from 'react';
import Option from './Option/Option';
import Style from './ProductOptions.css';

export default function ProductOptions({ options }) {
    return (
        <div className={Style.wrapper}>

            {options.map(option => (
                <div className={Style.options_wrapper} key={option._id}>
                    <Option option={option} />
                </div>
            ))}

            <div className={Style.quantity_wrapper}>
                <label
                    htmlFor="quantity"
                    className={Style.quantity_label}>Quantity
                </label>
                <div className={Style.select_wrapper}>
                    <select className={Style.select} id="quantity">
                        <option className={Style.option} value='1'>1</option>
                    </select>
                </div>
            </div>

        </div>
    )
}