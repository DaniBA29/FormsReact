import React, {Component} from 'react';

class Employee extends Component{
   render(){
      const { id, name, job, fire, dateBirth, department, active, employeenumber, gender, notes } = this.props;
       return(
        <tr>
          <td>{name}</td>
          <td>{job}</td>
          <td>{dateBirth}</td>
          <td>{department}</td>
          <td>{active}</td>
          <td>{employeenumber}</td>
          <td>{gender}</td>
          <td>{notes}</td>
          <td>
             <button onClick={() => fire(id)}>Fire</button>
          </td>
        </tr>
           
       );
   }
}

export default Employee;