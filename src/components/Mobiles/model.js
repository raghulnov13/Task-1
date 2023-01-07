import React from 'react'

export default function Model(props) {
    return (
        <div className='mobile-brand'>
            <img src={props.mobiledata.model} className='mobile-img' />
            <div className='brand'> {props.mobiledata.brand} </div>
            <div className='price'>{props.mobiledata.price}</div>
            <div className='year'>{props.mobiledata.year}</div>
            
        </div>
    )
}
