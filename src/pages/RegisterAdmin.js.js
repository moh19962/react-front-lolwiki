import React, {useState} from 'react'
import Title from "../components/Title";



const RegisterAdmin = () => {

    const [useRegistration, setuserRegistration] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setuserRegistration({...useRegistration, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }


        return (
            <>
                <Title title="admin"/>
                <form action="" onSubmit={handleSubmit}>

                    <div className="wrapper">
                        <div className="title">
                            Admin registration
                        </div>
                        <div className="form">
                            <div className="inputfield">
                                <label>name</label>
                                <input  type="text" name="name" id="name" className="input" autoComplete="off" value={useRegistration.name} onChange={handleInput}/>
                            </div>

                            <div className="inputfield">
                                <label>lastname</label>
                                <input  type="text" name="lastname"  id="lastname" className="input" autoComplete="off" value={useRegistration.lastname} onChange={handleInput}/>
                            </div>

                            <div className="inputfield">
                                <label>email</label>
                                <input  type="text" name="email"  id="email" className="input" autoComplete="off" value={useRegistration.email} onChange={handleInput}/>
                            </div>

                            <div className="inputfield">
                                <label>password</label>
                                <input type="password" className="input" name="password" id="password"  autoComplete="off" value={useRegistration.password} onChange={handleInput} />
                            </div>

                            {/*<div className="inputfield">*/}
                            {/*    <label>confirm password</label>*/}
                            {/*    <input type="text" className="input" name="confirmPass" id="confirmPass" autoComplete="off" value={useRegistration.confirmPassword} onChange={handleInput} />*/}
                            {/*</div>*/}

                            <div className="inputfield">
                                <input type="submit" value="Admin registration" className="btn" />
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
}

export default RegisterAdmin

