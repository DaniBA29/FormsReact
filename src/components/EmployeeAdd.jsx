import React, {Component} from "react";
import Employee from "./Employee";

class EmployeeAdd extends Component{
    initialState = {
        name: '',
        job: '',
        id: '',
    }

    state = this.initialState;

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    };

    handleSubmit = e =>{
        e.preventDefault();
        const {hire} = this.props;
        hire(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {id, name, job} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="id">Id</label>
                <input type="text" name="id" id="id" value={id} onChange={this.handleChange} placeholder="Id Employee"></input>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChange} placeholder="Enter name here"></input>
                <label htmlFor="job">Job</label>
                <input type="text" name="job" id="job" value={job} onChange={this.handleChange} placeholder="Enter job here"></input>
                <input type="submit" value="hire" />
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChange} placeholder="Enter name here"></input>
            </form>
        );
    }
}

export default EmployeeAdd;