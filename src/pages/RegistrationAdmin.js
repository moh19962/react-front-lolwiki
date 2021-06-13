import React, { Component } from 'react';
import Title from "../components/Title";

class RegistrationAdmin extends Component{
    constructor(props){
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false,
            username: '',
            lastname: '',
            email: '',
            password: ''
        };
    }

    //Register  admin
    async submitRegister() {
        await fetch('http://localhost:9191/users/sign-up', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            })
        })
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value });
    }

    render(){
        const {username, lastname, email, password} = this.state
        return (
            <>
            <Title title="admin"/>

            <div className="wrapper">
                <div className="title">
                    Admin registration
                </div>
                <div className="form">
                    <div className="inputfield">
                        <label>name</label>
                        <input  type="text" name="username" id="name" className="input" autoComplete="off" value={username} onChange={this.handleInput}/>
                    </div>

                    <div className="inputfield">
                        <label>lastname</label>
                        <input  type="text" name="lastname"  id="lastname" className="input" autoComplete="off" value={lastname} onChange={this.handleInput}/>
                    </div>

                    <div className="inputfield">
                        <label>email</label>
                        <input  type="text" name="email"  id="email" className="input" autoComplete="off" value={email} onChange={this.handleInput}/>
                    </div>

                    <div className="inputfield">
                        <label>password</label>
                        <input type="password" className="input" name="password" id="password"  autoComplete="off" value={password} onChange={this.handleInput} />
                    </div>

                    <div className="inputfield">
                     <button className="btn btn-primary" onClick={this.submitRegister.bind(this)}>Register</button>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default RegistrationAdmin;


