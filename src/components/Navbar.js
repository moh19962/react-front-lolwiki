import React, { Component } from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {

    // const refreshPage = async () =>{
    //     window.location.reload();
    // }
    //
    // const logout = () => {

    //     remove localstorage
    // }
    //
    // const renderMenu = () => {
    //     if(logged in)){
    //         return(
    //             <div className="left-side">
    //                 <div className="nav-link-wrapper active-nav-link">
    //                     <Link to="/">Home</Link>
    //                 </div>
    //
    //                 <div className="nav-link-wrapper">
    //                     <Link to="Champions">Champions</Link>
    //                 </div>
    //
    //             </div>
    //         )
    //
    //     }else{
    //         return (
    //             <div className="left-side">
    //                 <div className="nav-link-wrapper active-nav-link">
    //                     <Link to="/">Home</Link>
    //                 </div>
    //
    //                 <div className="nav-link-wrapper">
    //                     <Link to="Champions">Champions</Link>
    //                 </div>
    //                 <div className="nav-link-wrapper">
    //                     <Link to="AddChamp">AddChamp</Link>
    //                 </div>
    //
    //                 <div className="nav-link-wrapper">
    //                     <Link to="ListOverView">Champ Overview</Link>
    //                 </div>
    //
    //                 <div className="nav-link-wrapper">
    //                     <Link to="RegisterAdmin">add admin</Link>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }



    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper active-nav-link">
                    <Link to="/">Home</Link>
                </div>

                <div className="nav-link-wrapper">
                    <Link to="Champions">Champions</Link>
                </div>
                <div className="nav-link-wrapper">
                    <Link to="AddChamps">AddChamp</Link>
                </div>

                <div className="nav-link-wrapper">
                    <Link to="ChampionCrud">Champ Overview</Link>
                </div>

                <div className="nav-link-wrapper">
                    <Link to="RegistrationAdmin">add admin</Link>
                </div>

                <div className="nav-link-wrapper">
                    <Link to="RegistrationAdmin">ss</Link>
                </div>
            </div>
        </div>)

    //if not logged in show login else show logout
    // const rendersLoginButton = () => {
    //     if(not logged in)){
    //         return(
    //             <div className="right-side">
    //                 <div className="brand">
    //                     <div className="login-container">
    //                         <Link to="Login">Login</Link>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //
    //     }else{
    //         return (
    //
    //             <div className="right-side">
    //                 <div className="brand">
    //                     <div className="login-container">
    //                         <Link onClick={this.logout}>Logout</Link>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }




}

export default Navbar

