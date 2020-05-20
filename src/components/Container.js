import React, { Component } from "react";
import Header from "./container/Header";
import Nav from "./container/Nav";
import Main from "./container/Main";
import Students from "./container/Students";
import Footer from "./container/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tableview from "./container/Tableview";
import StudentPage from "./container/students/StudentPage";

class Container extends Component {
    render(){
        return(
        <Router>
            <div className="container">
                <Header />
                <Nav />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/students" exact component={Students} />
                    <Route path="/tableview" component={Tableview} />
                    <Route path="/students/:name" component={StudentPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
        )
    }
}

export default Container;