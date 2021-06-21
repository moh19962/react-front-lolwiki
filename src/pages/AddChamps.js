import React, { Component } from 'react'
import FileBase64 from "react-file-base64";
import '../registrationStyle.css'
import Title from "../components/Title";
import axios from "axios";


class AddChamps extends React.Component {
    constructor(props){
        super(props)

          this.state = {
            championName: '',
            championType: '',
            featured: '',
            championImage: '',
            championDescription: ''
          }
    
      }


    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:9191/champions/create', this.state)
        .then(response => {console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }



    render() {
        const {championName, championType, featured, championImage, championDescription} = this.state

        return (
            <>
            <form onSubmit={this.submitHandler}>
                    <div className="titleWithOutHero">
                    </div>
                    <div className="wrapper">
                        <div className="title">
                            Add Champion
                        </div>
                        <div className="form">
                            <div className="inputfield">
                                <label>Name</label>
                                <input  type="text" name="championName"  value={championName} className="input" onChange={this.handleChange}/>
                            </div>
                            <div className="inputfield">
                            <label>Type</label>
                            <div className="custom_select">
                                <select name="championType" id="rol" value={championType}  onChange={this.handleChange}>
                                    <option value="">Select</option>
                                    <option value="top">top</option>
                                    <option value="jungle">jungle</option>
                                    <option value="midlaner">midlaner</option>
                                    <option value="marksman">marksman</option>
                                    <option value="support">support</option>
                                </select>
                            </div>
                            </div>

                            <div className="inputfield">
                            <label>featured</label>
                            <div className="custom_select">
                                <select name="featured" id="featured" value={featured}  onChange={this.handleChange}>
                                    <option value="">Select</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                                </select>
                            </div>
                            </div>


                            <div className="inputfield">
                                <label>Image</label>
                                <input  type="text" name="championImage"  value={championImage} className="input" onChange={this.handleChange}/>
                            </div>

                            
                        <div className="inputfield">
                            <label>description</label>
                            <textarea className="textarea" name="championDescription"  value={championDescription} onChange={this.handleChange}></textarea>
                        </div>


                            <div className="inputfield">
                                <input type="submit" value="Add Champion" className="btn"/>
                                {/* <input type="submit" value="Add Champion" className="btn" onClick={this.createChamp.bind(this)}/> */}
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default AddChamps


