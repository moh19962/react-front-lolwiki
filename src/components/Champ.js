import React from 'react'
import {Link} from "react-router-dom";
import defaultImg from "../images/annie.jpg"

const Champ = ({champ}) => {
    const {name, slug, images, price} = champ;
    return (
        <article className="champ">
            <div className="img-container">
                <img src={images[0]  || defaultImg} alt="champ" />
                <Link to={`/Champions/${slug}`} className="btn-primary champ-link">
                    Check
                </Link>
            </div>
            <p className="champ-info" id="champ-info-text">{name}</p>
        </article>
    )
}

export default Champ

