import react, {useContext} from 'react';
import { ChampContext } from '../context'
import Title from "./Title";

//Get all unique types
const getUniqueType = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
const ChampFilter= ({champs}) => {

    let {handleChange, championType} = useContext(ChampContext);

    //Get unique types
    let types = getUniqueType(champs, "championType");

    //Add all to array
    types = ["all", ...types];


    return <section className="filter-container">
        <Title title="search champions" />
        <form className="filter-form" id="grid">
            {/*Begin type*/}
            <div className="form-group-right">
                <div className="form-group" id="">
                    <label htmlFor="championType">champ type</label>
                    <select name="championType" id="championType" onChange={handleChange} className="form-control" value={championType}>
                        {
                            types.map((item, index) => {
                                return <option value={item} key={index}>{item}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            {/*End type*/}
        </form>
    </section>
}

export default ChampFilter

