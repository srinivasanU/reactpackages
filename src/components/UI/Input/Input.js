import React from 'react';

export default function Input(props) {
    const {inputType, inputChange , labelText , style } = props
    const ids = labelText.toString().replace(/\s/g, '').toLowerCase();
    const name = labelText.toString().replace(/\s/g, '').toLowerCase();
    return (
        <div className="">
            <label className={style.label} for={ids}>{labelText}</label>
            <input type={inputType} onChange={inputChange} className={style.input} name={name} id={ids} />
        </div>
    )
}
