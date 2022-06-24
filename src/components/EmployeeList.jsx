import React, { Component } from "react";
import Employee from "./Employee";
import EmployeeAdd from "./EmployeeAdd";

class EmployeeList extends React.Component {
  state = {
    employees: [],
  };

  fireemployee = (id) => {
    const { employees } = this.state;
    this.setState({
      employees: employees.filter((employee) => {
        return employee.id !== id;
      }),
    });
  };

  hireemployee = employee =>{
    this.setState({
        employees : [... this.state.employees, employee],
    })
  }

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Date of birth</th>
              <th>Department</th>
              <th>Active</th>
              <th>Employee number</th>
              <th>Gender</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                job={employee.job}
                fire={this.fireemployee}
                dateBirth={employee.dateBirth}
                department={employee.department}
                active={employee.active}
                employeenumber= {employee.employeenumber}
                gender={employee.gender}
                notes={employee.notes}
              />
            ))}
          </tbody>
        </table>
        <hr />
        <EmployeeAdd hire={this.hireemployee}/>
      </>
    );
  }
}

export default EmployeeList;
