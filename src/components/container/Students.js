import React, { Component } from "react";
import {Link} from "react-router-dom";
import AddStudent from "./students/AddStudent";

class Students extends Component {
    constructor(){
        super();
        this.state = {
            students: [
                {
                "id": 1,
                "first_name": "Evelyn",
                "last_name": "Jansen",
                "email": "evelynjansen@hotmail.com",
                "phone": "735-250-7242",
                "date_of_birth": "09/18/1987"
            }, {
                "id": 2,
                "first_name": "Aranka",
                "last_name": "de Vries",
                "email": "arankadevries@gmail.com",
                "phone": "991-353-4575",
                "date_of_birth": "02/14/1994"
            }, {
                "id": 3,
                "first_name": "Floris",
                "last_name": "van Dam",
                "email": "floris.vandam@live.nl",
                "phone": "276-667-1221",
                "date_of_birth": "01/03/1991"
            }, {
                "id": 4,
                "first_name": "Hector",
                "last_name": "Ledeker",
                "email": "hledeker3@hotmail.com",
                "phone": "347-639-9003",
                "date_of_birth": "12/18/1987"
            }, {
                "id": 5,
                "first_name": "Martina",
                "last_name": "Dekkers",
                "email": "martinad@gmail.com",
                "phone": "458-646-2175",
                "date_of_birth": "03/08/1994"
            }, {
                "id": 6,
                "first_name": "Maurits",
                "last_name": "Aronowicz",
                "email": "maronowicz5@altervista.org",
                "phone": "123-634-5936",
                "date_of_birth": "09/13/1997"
            }, {
                "id": 7,
                "first_name": "Rahima",
                "last_name": "Petrasch",
                "email": "rpetrasch6@yahoo.com",
                "phone": "381-541-7491",
                "date_of_birth": "05/22/1987"
            }, {
                "id": 8,
                "first_name": "Sandra",
                "last_name": "Moring",
                "email": "smoring7@hubpages.com",
                "phone": "813-885-0692",
                "date_of_birth": "03/24/1990"
            }, {
                "id": 9,
                "first_name": "Wietske",
                "last_name": "Delve",
                "email": "wdelve8@gmail.com",
                "phone": "985-117-2534",
                "date_of_birth": "11/04/1985"
            }, {
                "id": 10,
                "first_name": "Storm",
                "last_name": "Davis",
                "email": "stormdavis9@hotmail.com",
                "phone": "623-901-0684",
                "date_of_birth": "12/27/1989"
            }]
        }
    }

    render(){
        const student = this.state.students.map(student => {
            if (student.id <= 10){
                return   <div key={student.id} className="student-div">
                            <Link to={`/students/${student.first_name}`}><img src={require (`../../images/studenten/${student.first_name}.jpg`)} alt="Profile student"/></Link>
                            <Link to={`/students/${student.first_name}`}><p>{student.first_name} {student.last_name}</p></Link>
                        </div>
            }else {
                return  <div key={student.id} className="student-div">
                            <Link to={`/students/${student.first_name}`}><img src={require ("../../images/studenten/newstudent.jpg")} alt="Profile student"/></Link>
                            <Link to={`/students/${student.first_name}`}><p>{student.first_name} {student.last_name}</p></Link>
                        </div>
            }
            
        })

        // const newStudents = this.state.students.map(student => {
        //     return  <div key={student.id} className="student-div">
        //                 <Link to={`/students/${student.first_name}`}><img src={require ("../../images/studenten/newstudent.jpg")} alt="Profile student"/></Link>
        //                 <Link to={`/students/${student.first_name}`}><p>{student.first_name} {student.last_name}</p></Link>
        //             </div>
        // })

        const handleSubmit = (data) => {
            const generateId = this.state.students.length + 1;
            const newStudent = {
                "id": generateId,
                "first_name": data.first_name,
                "last_name": data.last_name,
                "email": data.email,
                "phone": data.phone,
                "date_of_birth": data.date_of_birth
            }

            if(newStudent.first_name !== ""){
                this.setState((prevstate) => {
                    const updatedStudentList = prevstate.students.concat(newStudent);
                    return {
                        students: updatedStudentList
                    }
                })
            }else {
                alert("You can't add a student without a first name")
            }
        }

        return(
            <main className="main-students">
                <h1>Students</h1>
                <p>These are the students at Winc Academy</p>
                <div className="main-students-content">
                    {student}
                </div>
                <h1>Add a student</h1>
                <p>In case you'd like to add a student, fill in this form:</p>
                <div className="add-student">
                    <AddStudent handleSubmit={handleSubmit}/>
                </div>
            </main>
        )
    }
}

export default Students;