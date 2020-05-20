import React, { Component } from "react";
import { faBars, faCaretDown, faThLarge, faUser, faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfielfotoWinc from "../../images/logo.png";
import { Link } from "react-router-dom";


class Nav extends Component{
    render(){

        return(
            <nav>
                <div className="nav-header">
                    <div className="logo"><h1><span>DASH</span>BOARD</h1></div>
                    <div className="menu"><FontAwesomeIcon icon={faBars} /></div>
                </div>
                <div className="nav-profile">
                    <div className="nav-profile-picture"><img src={ProfielfotoWinc} alt="profielfoto"/></div>
                    <p className="nav-username">Winc Academy<span className="nav-username-menu"><FontAwesomeIcon icon={faCaretDown} /></span>
                    <br />
                    <span className="nav-username-description">Administator</span></p>
                </div>
                <div className="nav-menu">
                    <div className="nav-menu-item">
                        <div className="menu-icon"><FontAwesomeIcon icon={faThLarge} /></div>
                        <div className="menu-description">
                            <Link to="/">Dashboard</Link>
                        </div>
                    </div>
                    <div className="nav-menu-item">
                        <div className="menu-icon"><FontAwesomeIcon icon={faUser} /></div>
                        <div className="menu-description">
                            <Link to="/Students">Students</Link>
                        </div>
                    </div>
                    <div className="nav-menu-item">
                        <div className="menu-icon"><FontAwesomeIcon icon={faTable} /></div>
                        <div className="menu-description">
                            <Link to="/Tableview">Tableview</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;