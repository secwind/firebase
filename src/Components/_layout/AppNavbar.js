import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class AppNavbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
            <Link to="/"  className="navbar-brand" >
                Clients Panel
            </Link>
            <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collrapse"
                data-target="#navbarMain" >   
           
             <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collrapse navbar-collrapse" id="navbarMain">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <Link to="/"  className="nav-link">
                            Dashbord
                        </Link>
                        </li>
                    </ul>
                </div>
        </div>
      </nav>
    )
  }
}

export default AppNavbar
