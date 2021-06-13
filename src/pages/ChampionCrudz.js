import React, {useState, useEffect, useContext} from 'react'
import Title from "../components/Title";
import { ChampContext } from '../context'
import Champ from "../components/Champ";
import items from "../datas";



const ChampionCrud = () => {

    let {loading, champs} = useContext(ChampContext);

    useEffect(() => {
        renderTableData()
    }, [])


    // // Kan hier de data ophalen of ik haal de data op via de context.
    // const getChampionList = async () =>{
    //     await  fetch('http://localhost:8087/champions/all', {
    //         method: 'GET',
    //         headers: new Headers({
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': localStorage.getItem("JWT"),
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //         })
    // }

    const deleteChampion = async (champ) => {
        await  fetch('http://localhost:8087/champions/'+ champ.id, {
            method: 'DELETE',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("JWT"),
            })
        })
        //laad de champs weer in.
    
    };

    const  renderTableData = () => {
        return champs.map((champ, index) => {
            const {id, name, type} = champ
            return(
                <tr>
                    <th scope="row">{id}</th>
                    <td>{name}</td>
                    <td>{type}</td>

                                <td><button type="button" className="btn btn-danger" value={id}>Delete</button></td>
                    {/*<td><button type="button" className="btn btn-danger" value={id} onClick={deleteChampion(champ)}>Delete</button></td>*/}

                </tr>)
        })
    }




    return (
        <>
            <div className="titleWithOutHero">
            </div>
            <Title title="Crud"/>
            <div className="overViewChampions">
                <div className="overViewChampionsCenter">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        {renderTableData()}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ChampionCrud

