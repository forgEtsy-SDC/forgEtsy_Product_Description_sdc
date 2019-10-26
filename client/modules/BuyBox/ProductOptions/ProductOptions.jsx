import React from 'react';
import Option from './Option/Option';
import Style from './ProductOptions.css';

export default function ProductOptions({ options }) {
    let quantityArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className={Style.wrapper}>

            {options ? (options.map(option => (
                <div className={Style.options_wrapper} key={option._id}>
                    <Option option={option} />
                </div>
            ))) : null}

            <div className={Style.quantity_wrapper}>
                <label
                    htmlFor="quantity"
                    className={Style.quantity_label}>Quantity
                </label>
                <div className={Style.select_wrapper}>
                    <select className={Style.select} id="quantity">
                        {quantityArr.map((value) => {
                            return <option className={Style.option} value={value}>{value}</option>
                        })}
                    </select>
                </div>
            </div>

        </div>
    )
}