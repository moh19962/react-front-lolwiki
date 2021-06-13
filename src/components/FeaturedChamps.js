import React, {useState, useContext} from 'react';
import { ChampContext } from '../context'
import Loading from "./Loading";
import Champ from "./Champ";
import Title from "./Title";

const FeaturedChamps = () => { 
    // const [featuredChamps, setFeaturedChamps] = useChamp();
    // const value = useContext(ChampContext);
    //destructure alle objecten van de context api
     let {loading, featuredChamps:champ} = useContext(ChampContext);
     console.log(champ);
     

     {champ = champ.map(champ => {
        return <Champ key={champ.id} champ={champ} />
    })}

    return (
        
        <section className="featured-champs">
            <Title title="featured champs" />
            <div className="featured-champs-center">
                {loading ? <Loading /> : champ}
            </div>

        </section>
    );
}

export default FeaturedChamps
