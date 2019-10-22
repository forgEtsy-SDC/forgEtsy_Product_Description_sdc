import React from 'react'

export default function Option(option) {
    console.log(option);
    return (
        <div>
            <label htmlFor={option.title}>{option.title}</label>
            <select id={option.title}>
                <option value=''>Select an option</option>
                <option value={option.description_1}>{option.description_1}</option>
            </select>
        </div>
    )
}