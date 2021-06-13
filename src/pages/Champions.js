import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ChampsContainer from "../components/ChampsContainer";


const Champions = () => {
    return (
        <>
        <Hero hero="championsHero">
        </Hero>

        <ChampsContainer />
        </>
    );
};

export default Champions;
