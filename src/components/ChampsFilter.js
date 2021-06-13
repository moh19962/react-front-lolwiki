import react, {useContext} from 'react';
import { ChampContext } from '../context'
import Title from "./Title";

//Get all unique types
const getUniqueType = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
const ChampFilter= ({champs}) => {

    let {handleChange, type} = useContext(ChampContext);

     //Get unique types
     let types = getUniqueType(champs, "type");

    //Add all to array
     types = ["all", ...types];


    return <section className="filter-container">
        <Title title="search champions" />
        <form className="filter-form">
            {/*Begin type*/}
            <div className="form-group">
                <label htmlFor="type">champ type</label>
                <select name="type" id="type" onChange={handleChange} className="form-control" value={type}>

                    {
                        types.map((item, index) => {
                            return <option value={item} key={index}>{item}</option>
                        })
                    }
                </select>
            </div>
            {/*End type*/}
        </form>
    </section>
}

export default ChampFilter

