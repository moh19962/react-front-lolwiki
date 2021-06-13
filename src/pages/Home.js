import FeaturedRoles from '../components/FeaturedRoles'
import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import FeaturedChamps from '../components/FeaturedChamps'

export default function Home() {
    return (
        <div>
            <Hero>
            </Hero>
            <FeaturedRoles />
            {/*<FeaturedChamps />*/}
        </div>
    )
}
