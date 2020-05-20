import React from "react";
import Data from "../../Data";
import { VictoryPie } from "victory";

function SubChart() {

    const hoeLeuk = Data.map(opdracht => {
        return parseInt(opdracht.hoe_leuk)
    })

    const hoeMoeilijk = Data.map(opdracht => {
        return parseInt(opdracht.hoe_moeilijk)
    })

    const berekenGemiddelde = (score) => {
        const total = score.reduce((acc, c) => acc + c, 0);
        return total / score.length;
    }

    const hoeLeukProject = Data.filter(opdracht => {
        return opdracht.opdrachtnummer.includes("Project")
    }).map(opdracht => {
        return parseInt(opdracht.hoe_leuk);
    })

    return(

        <div className="sub-chart">
            <div className="sub-chart-legend">
                <h3>Average scores:</h3>
                <div className="sub-chart-legend-svg">
                    <svg height="20" width="20">
                        <circle cx="10" cy="10" r="10" fill="#8176c7" />
                    </svg> <p>Average "Fun"-score</p>
                </div>
                <div className="sub-chart-legend-svg">
                    <svg height="20" width="20">
                        <circle cx="10" cy="10" r="10" fill="#5bb6e0" />
                    </svg> <p>Average "Difficult"-score</p>
                </div>
                <div className="sub-chart-legend-svg">
                    <svg height="20" width="20">
                        <circle cx="10" cy="10" r="10" fill="#e04c85" />
                    </svg> <p>Average "Project-Fun"-score</p>
                </div>
            </div>
            <VictoryPie 
                height={250} padding={{top: 40}} colorScale={["#8176c7", "#FFF"]}
                style={{data: {stroke: "#bec1c8"}}}
                data={[
                    { x: "", y: berekenGemiddelde(hoeLeuk), label: parseFloat(berekenGemiddelde(hoeLeuk)).toFixed(2)},
                    { x: "", y: (5-berekenGemiddelde(hoeLeuk)), label: " "}
                ]}
            />

            <VictoryPie 
                height={250} padding={{top: 40}} colorScale={["5bb6e0", "#FFF"]}
                style={{data: {stroke: "#bec1c8"}}}
                data={[
                    { x: "", y: berekenGemiddelde(hoeMoeilijk), label: parseFloat(berekenGemiddelde(hoeMoeilijk)).toFixed(2)},
                    { x: "", y: (5-berekenGemiddelde(hoeMoeilijk)), label: " "}
                ]}
            />

            <VictoryPie 
                height={250} padding={{top: 40}} colorScale={["#e04c85", "#FFF"]}
                style={{data: {stroke: "#bec1c8"}}}
                data={[
                    { x: "", y: berekenGemiddelde(hoeLeukProject), label: parseFloat(berekenGemiddelde(hoeLeukProject)).toFixed(2)},
                    { x: "", y: (5-berekenGemiddelde(hoeLeukProject)), label: " "}
                ]}
            />
        </div>
    )
}

export default SubChart;