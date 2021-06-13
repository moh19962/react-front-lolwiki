import React, {useContext} from "react";
import Champ from "./Champ";
import {ChampContext} from "../context";

const ChampsList = ({champs}) => {
if(champs.length === 0){
    return (
        <div className="not-found">
            <h4>No champs found. Do another search</h4>
        </div>
    )
}

    return (
        <div className="champlist">
            <div className="champlist-center">
                {champs.map(item => {
                    return <Champ key={item.id} champ={item} />
                     })}
            </div>
        </div>
    )
}

export default ChampsList

