import React from 'react'
import {Link} from "react-router-dom";
import defaultImg from "../images/annie.jpg"

const Champ = ({champ}) => {
    const {championName, slug, championImage} = champ;
    return (
        <article className="champ">
            <div className="img-container">
                <img src={championImage} alt="champion" height={300} width={270} />
                <Link to={`/Champions/${championName}`} className="btn-primary champ-link">
                    Check
                </Link>
            </div>
            <p className="champ-info" id="champ-info-text">{championName}</p>
        </article>
    )
}

export default Champ

