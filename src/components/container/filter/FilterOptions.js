import React, { Component } from "react";

class FilterOptions extends Component{
    render(){
        const { handleOnChangeEvent, filters } = this.props;

        const handleChange = (event) => {
            handleOnChangeEvent(event)
        }

        const buttonBooleans = (filterName) => {
            if(filterName === true){
                return "ON"
            }else{
                return "OFF"
            }
        }

        return(
            <div className="filter-options">
                <button className="filter-btn filter-alles" onClick={handleChange} value="filterAlleGemiddeldeScores">Show all <span>|</span> <span>{buttonBooleans(filters.filterAlles)}</span></button>
                <button className="filter-btn filter-leuk" onClick={handleChange} value="filterGemiddeldeHoeLeukScores">Show fun-score <span>|</span> <span>{buttonBooleans(filters.filterLeuk)}</span></button>
                <button className="filter-btn btn filter-moeilijk" onClick={handleChange} value="filterGemiddeldeHoeMoeilijkScores">Show difficult-score <span>|</span> <span>{buttonBooleans(filters.filterMoeilijk)}</span></button>
            </div>
        )
    }
}

export default FilterOptions;