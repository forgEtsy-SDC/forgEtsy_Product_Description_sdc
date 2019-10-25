import React from 'react';
import Style from './Option.css';

export default function Option({ option }) {
    return (
        <div>

            <label className={Style.option_label} htmlFor={option.title}>{option.title}</label>

            <div className={Style.select_wrapper}>

                <select className={Style.select} id={option.title}>

                    <option className={Style.option} value=''>Select an option</option>

                    {(() => option.description_1 ? (
                        <option
                            className={Style.option}
                            value={option.description_1}>{option.description_1}
                        </option>
                    ) : null
                    )()}

                    {(() => option.description_2 ? (
                        <option
                            className={Style.option}
                            value={option.description_2}>{option.description_2}
                        </option>
                    ) : null
                    )()}

                    {(() => option.description_3 ? (
                        <option
                            className={Style.option}
                            value={option.description_3}>{option.description_3}
                        </option>
                    ) : null
                    )()}

                    {(() => option.description_4 ? (
                        <option
                            className={Style.option}
                            value={option.description_4}>{option.description_4}
                        </option>
                    ) : null
                    )()}

                </select>

            </div>

        </div>
    )
}