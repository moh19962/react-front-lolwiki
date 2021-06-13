import React from 'react'

const  Banner = ({title, subtitle}) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
        </div>
    )
}

export default Banner ;
