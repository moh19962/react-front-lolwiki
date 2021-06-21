import React, { Component } from 'react';
import Title from "../components/Title";


class ChampionCrud extends Component{
    constructor(props){
        super(props);
        this.state = {
            champions: [
                {id: null, name: null, type: null, action: null}
            ],
            act: 0,
            index: '',
        }
    }

    componentDidMount() {
        this.getChampionList();

    }

   async getChampionList(){
      await  fetch('http://localhost:9191/champions/all', {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then(res => res.json())
            .then(data => {
                this.setState({champions: data})
                console.log(this.state.champions)
            })
    }

    // async updateChampion(championId, index){
    //     await  fetch('http://localhost:9191/champions/delete/'+ championId, {
    //         method: 'PUT',
    //         headers: new Headers({
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             body: JSON.stringify({
    //                 championId: championId,
    //                 championName: document.getElementsByClassName("name")[index].value,
    //                 championType: document.getElementsByClassName("type")[index].value,
    //             })
    //         })
    //     })
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log();
    //         }).then(window.location.reload(false));
    // };


    async deleteChampion(championId){
        await  fetch('http://localhost:9191/champions/delete/'+ championId, {
            method: 'DELETE',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
         this.getChampionList();

    };


    renderTableData = () => {
        return this.state.champions.map((champion, index) => {
            const { championId, championName, championType} = champion //destructuring
            return (
                                <tr>
                                <th scope="row">{championId}</th>
                                <td>{championName}</td>
                                <td>{championType}</td>
            
                                            <td>
                                                <button type="button" className="btn btn-danger" value={championId} onClick={() => this.deleteChampion(championId)}>Delete</button>
                                                <button type="button" className="btn btn-warning" value={championId} onClick={()=> this.updateAmount(championId, index)}>Update</button>
                                            </td>
            
                            </tr>
                
            )
        })
    }


    renderTableHeader = () => {
        let header = Object.keys(this.state.champions[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }


    render(){
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

                        {this.renderTableData()}

                        </tbody>
                    </table>
                </div>
            </div>
            </>
        );
    }
}

export default ChampionCrud;
