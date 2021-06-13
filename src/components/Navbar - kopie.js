import React, { Component } from 'react';
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                <div className="nav-link-wrapper active-nav-link">
                    <Link to="/">Home</Link>
                </div>

                <div className="nav-link-wrapper">
                    <Link to="Champions">Champions</Link>
                </div>

                </div>
            </div>
        )
    }
}