import React from 'react';

export default function Button(props) {
    const {btnText, btnClick , style } = props
    return (
        <button className={style} type="button" onClick={btnClick}>{btnText}</button>
    )
}
