import React, { Component } from "react";
import Data from "../Data";

class Tableview extends Component{
    constructor(){
        super();
        this.state = {
            sortOption: 'naam',
        }
    }
    render(){

        if(this.state.sortOption === "naam") {
            Data.sort(function (a, b) {
                if (a.naam < b.naam) return -1;
                else if (a.naam > b.naam) return 1;
                return 0;
            });
        }else if(this.state.sortOption === "opdrachtnummer") {
            Data.sort(function (a, b) {
                if (a.opdrachtnummer < b.opdrachtnummer) return -1;
                else if (a.opdrachtnummer > b.opdrachtnummer) return 1;
                return 0;
            });
        }else if(this.state.sortOption === "hoe_leuk") {
            Data.sort(function (a, b) {
                if (a.hoe_leuk < b.hoe_leuk) return 1;
                else if (a.hoe_leuk > b.hoe_leuk) return -1;
                return 0;
            });
        }else if(this.state.sortOption === "hoe_moeilijk") {
            Data.sort(function (a, b) {
                if (a.hoe_moeilijk < b.hoe_moeilijk) return 1;
                else if (a.hoe_moeilijk > b.hoe_moeilijk) return -1;
                return 0;
            });
        }

        const tableRow = Data.map(opdracht => {
            return  <div key={Data.indexOf(opdracht)} className="table-row">
                        <div>{opdracht.naam}</div>
                        <div>{opdracht.opdrachtnummer}</div>
                        <div>{opdracht.hoe_leuk}</div>
                        <div>{opdracht.hoe_moeilijk}</div>
                    </div>
        })

        const sort = (event) => {
            const data = event.target.getAttribute("name");
            this.setState({
                sortOption: data
            })
        }

        return(
            <main className="tableview">
                <h1>Tableview</h1>
                <p>Overview of all the data - which you can sort by clicking the titles</p>
                <div className="tableview-content">
                    <div className="table">
                        <div className="thead">                    
                            <div name="naam" onClick={sort}>Name</div>
                            <div name="opdrachtnummer" onClick={sort}>Assignment</div>
                            <div name="hoe_leuk" onClick={sort}>"Fun"-score</div>
                            <div name="hoe_moeilijk" onClick={sort}>"Difficult"-score</div>
                        </div>
                        {tableRow}
                    </div>
                </div>
            </main>
        )
    }
}

export default Tableview;