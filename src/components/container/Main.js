import React, { Component } from "react";
import MainChart from "./charts/MainChart";
import SubChart from "./charts/SubChart";

class Main extends Component{
    render(){
        return(
            <main className="main">
                <div className="main-content">
                    <h1>Dashboard</h1>
                    <p>Welcome, Winc Academy</p>
                    <div className="main-chart">
                        <MainChart />
                    </div>
                    <div className="chart2">
                        <SubChart />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;