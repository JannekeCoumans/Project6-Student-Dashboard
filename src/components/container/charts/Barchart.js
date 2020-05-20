import React from "react";
import { VictoryGroup, VictoryChart, VictoryBar, VictoryAxis } from "victory";

function Barchart ({ generateAllHoeLeukBarCharts, generateAllHoeMoeilijkBarCharts, filters }) {
        
    let barchart;
    if (filters.filterAlles){
        barchart =  <VictoryGroup offset={7} colorScale={["#5bb6e0", "#e04c85"]}>
                        <VictoryBar data={generateAllHoeLeukBarCharts} />
                        <VictoryBar data={generateAllHoeMoeilijkBarCharts} />
                    </VictoryGroup>
    }
    else if (filters.filterLeuk){
        barchart =  <VictoryGroup offset={7} colorScale={["#e04c85"]}>
                        <VictoryBar data={generateAllHoeLeukBarCharts} />
                    </VictoryGroup>
    } else if (filters.filterMoeilijk){
        barchart =  <VictoryGroup offset={7} colorScale={["#5bb6e0"]}>
                        <VictoryBar data={generateAllHoeMoeilijkBarCharts} />
                    </VictoryGroup>
    }

    return (
        <div>
            <VictoryChart
                domainPadding={6}
                width={1400}
                height={350}
                padding={{top: 20, bottom: 100, left: 30, right: 30}}
            >
                <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} style={{ tickLabels: { fontSize: 12 } }} />
                <VictoryAxis style={{ tickLabels: { fontSize: 12, padding: 12, angle: 90, textAnchor: "start"} }} />

                {barchart}

            </VictoryChart>
        </div>
    )
}

export default Barchart;