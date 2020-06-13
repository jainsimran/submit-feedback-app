import React, { Component } from 'react';
import EmployeeList from './admin-list/EmployeeList';
import {fetchEmployeeNames} from './apis/employee';

export default class Admin extends Component {
    constructor(){
        super();
        this.state = {
            nameList: []
        }
    }

    componentDidMount() {
        let list = [];
        fetchEmployeeNames() 
            .then((response) => {
                response.forEach((item => {
                    list.push(item.employee_name);
                }))
            });
        this.setState({
            nameList: list
        })
    }

    render() {
        return (
            <div>
                <h1>Employees List:</h1>
                <EmployeeList list={this.state.nameList}/>
            </div>
        )
    }
}
