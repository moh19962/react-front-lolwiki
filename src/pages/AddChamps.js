import React, {useState} from 'react'
import FileBase64 from "react-file-base64";
import '../registrationStyle.css'
import Title from "../components/Title";


class AddChamps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            image: '',
            videoUrl: '',
            description: ''
        }
    }

    async createChamp() {
        await fetch('http://localhost:9191/champions/addchamp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                type: this.state.type,
                image: this.state.image.base64,
                videourl: this.state.videourl,
                description: this.state.description,
            })
        })
        window.location.reload();
    }


    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFile = img => {
        this.setState({image: img});
        console.log(this.state.image);
    }


    render() {
        const {name, type, videoUrl, description} = this.state

        return (
            <>
                <div className="titleWithOutHero">
                </div>
                <Title title="Add champion"/>
                <div className="wrapper">
                    <div className="title">
                        Add Champion
                    </div>
                    <div className="form">
                        <div className="inputfield">
                            <label>name</label>
                            <input  type="text" name="name"  value={name} className="input" onChange={this.handleChange}/>
                        </div>
                        <div className="inputfield">
                            <label>type</label>
                            <div className="custom_select">
                                <select name="type" id="rol" value={type}  onChange={this.handleChange}>
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
                            <label>Image</label>
                            {/*<input type="file" className="input" onChange={this.handleChange}/>*/}
                            <FileBase64
                                multiple={ false }
                                onDone={ this.handleFile } />
                        </div>

                        <div className="inputfield">
                            <label>videourl</label>
                            <input type="text" className="input" name="videourl"  value={videoUrl} onChange={this.handleChange} />
                        </div>

                        <div className="inputfield">
                            <label>description</label>
                            <textarea className="textarea" onChange={this.handleChange}></textarea>
                        </div>
                        {/*<div className="inputfield terms">*/}
                        {/*    <label className="check">*/}
                        {/*        <input type="checkbox" />*/}
                        {/*            <span className="checkmark"></span>*/}
                        {/*    </label>*/}
                        {/*    <p>Agreed to terms and conditions</p>*/}
                        {/*</div>*/}
                        <div className="inputfield">
                            <input type="submit" value="Add Champion" className="btn" onClick={this.createChamp.bind(this)}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AddChamps

