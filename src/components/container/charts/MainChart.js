import React, { Component } from "react";
import Data from "../../Data";
import Barchart from "./Barchart";
import FilterOptions from "../filter/FilterOptions";

class MainChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterAlles: true,
            filterLeuk: false,
            filterMoeilijk: false
        }
    }
    render(){
    // Filtert alle data op het aangegeven opdrachtnummer
    const filterOpOpdrachtnummer = (opdrachtnummer) => {
        const opdracht = Data.filter(opdrachten => opdrachten.opdrachtnummer === opdrachtnummer);
        return opdracht;
    }

    // Per opdrachtnummer wordt de gemiddelde score van "hoe leuk de opdracht was" berekend
    const hoeLeukGemiddelde = (opdrachtnummer) => {
        const data = filterOpOpdrachtnummer(opdrachtnummer);
        const hoe_leuk_Score = data.map(opdracht => parseInt(opdracht.hoe_leuk));

        Object.values(hoe_leuk_Score);

        function berekenGemiddelde(score) {
            const total = score.reduce((acc, c) => acc + c, 0);
            return total / score.length;
        }

        const gemiddelde = berekenGemiddelde(hoe_leuk_Score);
        return gemiddelde;
    }

    // Per opdrachtnummer wordt de gemiddelde score van "hoe moeilijk de opdracht was" berekend
    const hoeMoeilijkGemiddelde = (opdrachtnummer) => {
        const data = filterOpOpdrachtnummer(opdrachtnummer);
        const hoe_moeilijk_Score = data.map(opdracht => parseInt(opdracht.hoe_moeilijk));

        Object.values(hoe_moeilijk_Score);

        function berekenGemiddelde(score) {
            const total = score.reduce((acc, c) => acc + c, 0);
            return total / score.length;
        }

        const gemiddelde = berekenGemiddelde(hoe_moeilijk_Score);
        return gemiddelde;
    }

    // Hier wordt een barchart-gegeven aangemaakt voor hoe leuk, per gegeven opdracht
    const createBarChartForHoeLeuk = (opdrachtnummer) => {
        const barChartX = opdrachtnummer;
        const barChartY = hoeLeukGemiddelde(opdrachtnummer);
        return { x: barChartX, y: barChartY };
    }

    // Hier wordt een barchart-gegeven aangemaakt voor hoe moeilijk, per gegeven opdracht
    const createBarChartForHoeMoeilijk = (opdrachtnummer) => {
        const barChartX = opdrachtnummer;
        const barChartY = hoeMoeilijkGemiddelde(opdrachtnummer);
        return { x: barChartX, y: barChartY }
    }

    // Hier worden alle opdrachten gefilterd op dezelfde naam
    const alleOpdrachten = () => {
        const arrayVanAlleOpdrachten = Data.map(opdracht => opdracht.opdrachtnummer);
        let zoekOpdrachtMetDezelfdeNaam = {};
        let updatedArrayVanAlleOpdrachten = [];

        arrayVanAlleOpdrachten.forEach((opdrachtnummer) => {
            if (!zoekOpdrachtMetDezelfdeNaam[opdrachtnummer]) {
                zoekOpdrachtMetDezelfdeNaam[opdrachtnummer] = opdrachtnummer;
                updatedArrayVanAlleOpdrachten.push(opdrachtnummer);
            }
        });

        return updatedArrayVanAlleOpdrachten;
    }

    // Hier wordt voor alle opdrachten barcharts aangemaakt
    const generateAllHoeLeukBarCharts = alleOpdrachten().map(opdracht => {
        return createBarChartForHoeLeuk(opdracht)
    })

    const generateAllHoeMoeilijkBarCharts = alleOpdrachten().map(opdracht => {
        return createBarChartForHoeMoeilijk(opdracht)
    })

    const handleOnChangeEvent = (event) => {
        let x = event.target.value;
        switch (x) {
            case "filterAlleGemiddeldeScores":
                this.setState({
                    filterAlles: true,
                    filterLeuk: false,
                    filterMoeilijk: false
                })
                break;
            case "filterGemiddeldeHoeLeukScores":
                this.setState({
                    filterAlles: false,
                    filterLeuk: true,
                    filterMoeilijk: false
                })
                break;
            case "filterGemiddeldeHoeMoeilijkScores":
                this.setState({
                    filterAlles: false,
                    filterLeuk: false,
                    filterMoeilijk: true
                })
                break;
            default: 
            this.setState({
                filterAlles: true,
                filterLeuk: false,
                filterMoeilijk: false
            })
        }
    };


    return(
        <div className="main-chart">
            <FilterOptions 
                handleOnChangeEvent={handleOnChangeEvent}
                filters={this.state}
            />            
            <Barchart 
                generateAllHoeLeukBarCharts={generateAllHoeLeukBarCharts}
                generateAllHoeMoeilijkBarCharts={generateAllHoeMoeilijkBarCharts}
                filters={this.state}
            />
        </div>
    )
}
}

export default MainChart;