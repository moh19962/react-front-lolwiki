import Title from './Title'
import top from '../images/TOP.png'
import jgl from '../images/JGL.png'
import mid from '../images/MIDDLE.png'
import marksman from '../images/ADD.png'
import healer from '../images/SPT.png'
import React, { useState, useEffect } from 'react';


const FeaturedRoles = () => {

    const [roles, setRoles] = useState ([])
    const [featuredRoles, setFeaturedRoles] = useState ([{
        icon: <img src={top} width={132} height={132} />,
        title: "Toplaner",
        link: ""
    }, 
    {
        icon: <img src={jgl} width={132} height={132} />,
        title: "Jungler",
        link: ""
    },
    {
        icon: <img src={mid} width={132} height={132} />,
        title: "Midlaner",
        link: ""
    },
    {
        icon: <img src={marksman} width={132} height={132} />,
        title: "Marksman",
        link: ""
    },
    {
        icon: <img src={healer} width={132} height={132} />,
        title: "Healer",
        link: ""
    },
    

    ])


    return (
        <>
        <section className="roles">
            <Title title="Roles" />
                <div className="roles-center">
                {featuredRoles.map((role, index) => {
                           return <article key={index} className="roles">
                               <span>{role.icon}</span>
                               <h6>{role.title}</h6>
                               <p>{role.link}</p>
                           </article>
                        })}
                </div>
        </section>
        </>
    )
}

export default FeaturedRoles

