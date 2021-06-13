import React, {useContext} from "react";
import ChampsFilter from "./ChampsFilter";
import ChampsList from "./ChampsList";
import {ChampConsumer, ChampContext} from '../context';
import Loading from "./Loading";



const ChampsContainer = () => {

    const {loading, sortedChamps, champs }= useContext(ChampContext);
    console.log(sortedChamps);

    {
        if(loading) {
            return <Loading />
        }
    }
    return (
        <div>
            Hello from champions container
            <ChampsFilter champs={champs}/>
            <ChampsList champs={sortedChamps}/>

        </div>
    )
}

export default ChampsContainer

