import React, { Component } from 'react';
import {fetchEmployeeNames} from './apis/employee';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            feedback:''
        }
    }

    componentDidMount() {
        let nameList = [];
        fetchEmployeeNames()
        .then(response => {
            Object.keys(response).forEach(e => {
                nameList.push(e.employee_name)
            });
        })
        this.setState({
            name: nameList
        });
    }

    saveFeedback = (e) => {
        e.preventDefault();
        console.log('submit feedback working');
    }

    nameHandleChange(event) {
        this.setState({name: event.target.value});
      }

    feedbackHandleChange(event) {
        this.setState({feedback: event.target.value});
      }
        render() {
        return (
            <div>
                select name 
                {/* <textarea value={this.state.name} onChange={this.nameHandleChange}/> */}

                <select>
                    {Object.keys(this.state.name).map((ename,index) => (
                        <option value={ename} key={index}> {ename} </option>
                    ))}
                </select>
                Feedback 
                <textarea value={this.state.feedback} onChange={this.feedbackHandleChange}/>
                <button> Submit </button>
            </div>
        )
    }
}
