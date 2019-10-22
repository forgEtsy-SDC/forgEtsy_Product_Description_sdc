import React from 'react';

export default function Option({ option }) {
    return (
        <div>
            <div>{option.title}</div>
            <div>{option.description_1}</div>
            <div>{option.description_2}</div>
            <div>{option.description_3}</div>
            <div>{option.description_4}</div>
        </div>
    )
}