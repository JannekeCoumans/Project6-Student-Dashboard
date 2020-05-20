import React from "react";
import Data from "../../Data";
import Data2 from "../../Data2";
import { VictoryGroup, VictoryChart, VictoryBar, VictoryAxis, VictoryPie } from "victory";

function StudentPage({ match }) {

    const student = match.params.name;

    const studentInfo = Data2.filter(studentData => {
        return studentData.first_name === student
    }).map(student => {
        return  <div key={student.id} className="student-profile">
                    <img src={require (`../../../images/studenten/${student.first_name}.jpg`)} alt="Profile student"/>
                    <div className="student-profile-text">
                        <h1>{student.first_name} {student.last_name}</h1>
                        <p>Email-adress: {student.email}</p>
                        <p>Phonenumber: {student.phone}</p>
                        <p>Date of Birth: {student.date_of_birth}</p>
                    </div>
                </div>
    })

    const opdrachtenVanStudent = Data.filter(opdracht => {
        return opdracht.naam === student
    })

    const generateAllHoeLeukBarCharts = opdrachtenVanStudent.map(opdracht => {
        return {x: opdracht.opdrachtnummer, y: opdracht.hoe_leuk}
    })

    const generateAllHoeMoeilijkBarCharts = opdrachtenVanStudent.map(opdracht => {
        return {x: opdracht.opdrachtnummer, y: opdracht.hoe_moeilijk}
    })

    const hoeLeuk = opdrachtenVanStudent.map(opdracht => {
        return parseInt(opdracht.hoe_leuk)
    })

    const hoeMoeilijk = opdrachtenVanStudent.map(opdracht => {
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

    console.log(berekenGemiddelde(hoeLeuk))

    return(
        <div className="student-page">
            <h1>{student}'s page</h1>
            <p>Student info and charts</p>

            {studentInfo}


            <div className="student-main-chart">
                <div className="legend">
                    <p><svg height="20" width="20">
                        <circle cx="10" cy="10" r="10" fill="#e04c85" />
                    </svg> "Fun"-score</p>
                    <p><svg height="20" width="20">
                        <circle cx="10" cy="10" r="10" fill="#5bb6e0" />
                    </svg> "Difficult"-score</p>
                </div>

                <VictoryChart
                    domainPadding={6}
                    width={1400}
                    height={350}
                    padding={{top: 20, bottom: 100, left: 30, right: 30}}
                >
                <VictoryAxis dependentAxis tickFormat={[1, 2, 3, 4, 5]} style={{ tickLabels: { fontSize: 12 } }} />
                <VictoryAxis style={{ tickLabels: { fontSize: 12, padding: 12, angle: 90, textAnchor: "start"} }} />

                    <VictoryGroup offset={7} colorScale={["#e04c85", "#5bb6e0"]}>
                        <VictoryBar data={generateAllHoeLeukBarCharts} />
                        <VictoryBar data={generateAllHoeMoeilijkBarCharts} />
                    </VictoryGroup>

                </VictoryChart>
            </div>

            <div className="student-sub-chart">
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
                height={250} padding={{top: 40}} colorScale={["#5bb6e0", "#FFF"]}
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

        </div>
    )
}

export default StudentPage;