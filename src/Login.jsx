import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App.js';

class Login extends Component {

   constructor(props){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        heading: null
    }
    
   handleSubmit = e => {
        e.preventDefault();
        const user = {
            userName: e.target.userName.value,
            password: e.target.passWord.value
        };

        axios.post("http://localhost:5000/users/verifyUser", user)
        .then(res => {
            console.log(res.data);
            if( res.data === 'verified') document.getElementById('linkToChat').click();
            else alert(res.data);
        })
        .catch((err) => console.log(err));
    
    }

    render() {
        return(
            <div className='container'>
                <h1></h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='row g-2'>
                        <div className='mb-4'>
                            <label for='userName'>User Name</label>
                            <div className='col-auto'>
                                <input id='userName' name='userName' type='text' className='form-control'/>
                            </div>
                        </div>
                    </div>
                    <div className='row g-2'>
                        <div className='mb-4'>
                            <label for='passWord'>Password</label>
                            <div className='col-auto'>
                                <input name='passWord' type='password' id='passWord' className='form-control'/>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
                <a href='./chat' id='linkToChat' style={{display : 'none'}}>Chat</a>
            </div>
        )
    }
}
 export default Login;
 