import React, { Component } from "react";

class AddStudent extends Component{
    constructor(){
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
        }
    }

    render(){
        const { handleSubmit } = this.props;
        const onSubmit = (event) => {
            event.preventDefault();
            const newStudent = {
                "first_name": event.target.first_name.value,
                "last_name": event.target.last_name.value,
                "email": event.target.email.value,
                "phone": event.target.phone.value,
                "date_of_birth": event.target.date_of_birth.value
            }
            handleSubmit(newStudent)
        }


        return(
            <form onSubmit={onSubmit} className="add-student-form">
                <input type="text" placeholder="First name" name="first_name"/>
                <input type="text" placeholder="Last name" name="last_name"/>
                <input type="email" placeholder="Email adress" name="email"/>
                <input type="text" placeholder="Phone number" name="phone"/>
                <input type="text" placeholder="Date of birth mm/dd/yyyy" name="date_of_birth" />
                <button>Add student</button>
            </form>
        )
    }
}

export default AddStudent;