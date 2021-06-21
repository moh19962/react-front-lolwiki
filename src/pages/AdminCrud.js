import React, { Component } from 'react';
import Title from "../components/Title";


class AdminCrud extends Component{
    constructor(props){
        super(props);
        this.state = {
            admins: [
                {id: null, name: null, lastname: null, action: null}
            ],
            act: 0,
            index: '',
        }
    }

    componentDidMount() {
        this.getAdminList();

    }

   async getAdminList(){
      await  fetch('http://localhost:9191/users/all', {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then(res => res.json())
            .then(data => {
                this.setState({admins: data})
                console.log(this.state.admins)
            })
    }

    async deleteAdmin(admin){
        await  fetch('http://localhost:9191/users/'+ admin.id, {
            method: 'DELETE',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
         this.getAdminList();

    };

    renderTableData = () => {
        return this.state.admins.map((admin, index) => {
            const { id, name, lastname} = admin //destructuring
            return (
                                <tr>
                                <th scope="row">{id}</th>
                                <td>{name}</td>
                                <td>{lastname}</td>
            
                                            <td><button type="button" className="btn btn-danger" value={id} onClick={this.deleteAdmin.bind(this.admin)}>Delete</button></td>
            
                            </tr>
                
            )
        })
    }


    renderTableHeader = () => {
        let header = Object.keys(this.state.admins[0])
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
                            <th scope="col">lastname</th>
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

export default AdminCrud;
