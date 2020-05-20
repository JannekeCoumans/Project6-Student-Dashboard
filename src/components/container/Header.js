import React, { Component } from "react";
import { faBell, faCalendarAlt, faEnvelope, faSearch, faUser, faCaretDown, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component{
    render(){
        return(
            <header>
                <div className="notification"><FontAwesomeIcon icon={faBell} /><span className="badge">3</span></div>
                <div className="calendar-notification"><FontAwesomeIcon icon={faCalendarAlt} /><span className="badge">1</span></div>
                <div className="email-notification"><FontAwesomeIcon icon={faEnvelope} /><span className="badge">5</span></div>
                <div className="header-search">
                    <button><FontAwesomeIcon icon={faSearch} /></button><input type="search" autoComplete="off" placeholder="Search"/>
                </div>
                <div className="header-user"><FontAwesomeIcon icon={faUser} /><FontAwesomeIcon icon={faCaretDown} /></div>
                <div className="chat-notification"><FontAwesomeIcon icon={faComment} /><span className="badge">2</span></div>
            </header>
        )
    }
}

export default Header;