import React, { Component } from 'react';
import Home from "./Home";

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            redirect: false,
            loginPage: true
        }
    }

    loginBtn = (e) => {
        e.preventDefault();
        console.log('btn working');
        this.setState({
            redirect: true,
            loginPage: false
        })
    }

    render() {
        return (
            <div>
                {this.state.loginPage && 
                    <div> 
                        Enter name
                        <input 
                            type="text" 
                            name="name" 
                            onChange={(event) =>this.setState({ name: event.target.value}) } 
                        />
                        <input type="checkbox" /> admin
                        <button onClick={this.loginBtn}>login</button>
                    </div>
                }

            {this.state.redirect && <Home/>}
            </div>
        )
    }
}
