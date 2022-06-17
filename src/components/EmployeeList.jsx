import React, {Component} from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component{
    state = {
        employees : [
        {
            id: 1,
            name:'Fernanda',
            job:'CEO',
        },
        {
         id: 2,
         name:'Juan',
         job:'Manager',
     },
     {
         id: 3,
         name:'Fran',
         job:'Designer',
     },
     {
         id: 4,
         name:'Jose',
         job:'Developer',
     },
    ]};

    fireemployee = (id) => {
        const { employees } = this.state;
        this.setState({
            employees : employees.filter((employee) => {
                return employee.id !== id;
            })
        });
    };

   render(){

       return(
           <table>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Job</th>
                   </tr>
               </thead>
               <tbody>
                   {this.state.employees.map(employee =>(
                     <Employee id={employee.id} name={employee.name} job={employee.job} fire={this.fireemployee}/>
                    ))}
               </tbody>
           </table>
       );
   }
}

export default EmployeeList;