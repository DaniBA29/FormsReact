import React, { Component } from "react";
import Employee from "./Employee";

class EmployeeAdd extends Component {
  initialState = {
    name: "",
    job: "",
    id: "",
    dateBirth: "",
    department: "",
    active: true,
    employeenumber: "",
    gender: "F",
    notes: "",
  };

  state = this.initialState;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { hire } = this.props;
    hire(this.state);
    this.setState(this.initialState);
  };

  render() {
    const {
      id,
      name,
      job,
      dateBirth,
      department,
      active,
      employeenumber,
      gender,
      notes,
    } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id">Id</label>
          <input
            type="text"
            name="id"
            id="id"
            value={id}
            onChange={this.handleChange}
            placeholder="Id Employee"
          ></input>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter name here"
          ></input>
          <label htmlFor="job">Job</label>
          <input
            type="text"
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange}
            placeholder="Enter job here"
          ></input>
          <label htmlFor="dateBirth">Date of birth</label>
          <input
            type="date"
            name="dateBirth"
            id="dateBirth"
            value={dateBirth}
            onChange={this.handleChange}
            placeholder="Choose date of birth here"
          ></input>
          <label htmlFor="department">Department</label>
          <input
            type="text"
            name="department"
            id="department"
            value={department}
            onChange={this.handleChange}
            placeholder="Enter department here"
          ></input>
          <label htmlFor="active">Active</label>
          <input
            type="checkbox"
            name="active"
            id="active"
            value={active}
            onChange={this.handleChange}
            placeholder="Enter state here"
          ></input>
          <label htmlFor="employeenumber">Employee number</label>
          <input
            type="number"
            name="employeenumber"
            id="employeenumber"
            value={employeenumber}
            onChange={this.handleChange}
            placeholder="Enter your employee number here"
          ></input>
          <fieldset>
            <legend>Gender</legend>
            <label for="Female">Female</label>
            <input
              type="radio"
              id="gender"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={this.handleChange}
            />
            <label for="Male">Male</label>
            <input
              type="radio"
              id="gender"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={this.handleChange}
            />
            <label for="Other">Other</label>
            <input
              type="radio"
              id="gender"
              name="gender"
              value="other"
              checked={gender === "other"}
              onChange={this.handleChange}
            />
          </fieldset>
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            name="notes"
            id="notes"
            value={notes}
            onChange={this.handleChange}
            placeholder="Enter notes here"
          ></input>
          <input type="submit" value="hire" />
        </form>
      </>
    );
  }
}

export default EmployeeAdd;
