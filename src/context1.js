import React, {useState, createContext, useEffect, useContext} from "react";
import items from './Deta'

export const ChampContext = createContext();

export function ChampProvider({children}) {


    const [champs, setChamps] = useState([]);
    const [sortedChamps, setSortedChamps] = useState([]);
    const [featuredChamps, setFeaturedChamps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState("all");
    const [something, setSomething]= useState('');


    useEffect(() => {
        let champs = formData(items)
        console.log(champs)
        let featuredChamps = champs.filter(champ => champ.featured === true);

        setChamps(champs)
        setFeaturedChamps(featuredChamps)
        setSortedChamps(champs)
        setLoading(false)


        // setSortedChamps(champs)
        // setFeaturedChamps(featuredChamps),
        // setLoading(false);
        // console.log(featuredChamps)
    }, [])


    // function formatData(items) {
    //     let tempItems = items.map(item => {

    //     });
    //     return tempItems;
    // }




    //Get all te data from the data(file/base)
    const formData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let type = item.fields.type;

            let champ = {...item.fields, images, type, id};
            return champ;
        });
        return tempItems;
    }

    //Get the slug of a champ and return the champ
    const getChamp = (slug) => {
        let tempChamps = [...champs];
        const champ = tempChamps.find(champ => champ.slug === slug);
        return champ;
    };


    //type veranderd niet naar de aangegeven type.
    // Roep de filterChamp elke keer als de state veranderd word.{callback}
    const handleChange = (event) => {
        //Deze 2 variable als ik meerdere filters wil gebruiken met andere
         const target = event.target;
         const value = event.type === "checkbox" ? target.checked : target.value;
         setType(value)
         filterChamps()
        console.log(type)
    }


    const filterChamps = () => {
        let tempChamps = [...champs];
        // console.log(tempChamps)
        if(type !== "all") {
            tempChamps = tempChamps.filter(champ => champ.type === type);
        }
        setSortedChamps(tempChamps);
    }


    return (
        <ChampContext.Provider value={{getChamp, handleChange, type, loading, featuredChamps, sortedChamps, champs}}>
            {children}
        </ChampContext.Provider>
    )
}



