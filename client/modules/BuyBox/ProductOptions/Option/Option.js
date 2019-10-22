import React from 'react';

export default function Option({ option }) {
    console.log(option)
    return (
        <div>
            <label htmlFor={option.title}>{option.title}</label>
            <br></br>
            <select id={option.title}>
                <option value='Select an option'>Select an option</option>
                <option value={option.description_1}>{option.description_1}</option>
                <option value={option.description_2}>{option.description_2}</option>
                <option value={option.description_3}>{option.description_3}</option>
                <option value={option.description_4}>{option.description_4}</option>
            </select>
        </div>
    )
}