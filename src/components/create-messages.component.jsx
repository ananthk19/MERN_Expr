import React, {Component} from 'react';
import'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../App.js';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import axios from 'axios';

class CreateMessage extends Component {
    constructor(props){
        super(props);
 //       this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e){
  //      console.log(e.target.value);
    }

    state = {
        event: null,
    }

    handleNewPost(e){
        const message = {
            message: e.target.message.value,
            userName: 'Anonymous',
        }
        axios.post('http://localhost:5000/messages', message);
        this.props.onNewPost();
    }

    render() {
        
        return(
        <div className='container-fluid bg-dark bg-gradient fixed-bottom'>
            <form onSubmit = {this.handleNewPost}>
                <label style={{fontFamily:'cursive', color:'white'}}>Message</label><input type='text' name="message" onChange ={this.handleChange}></input>
                <input type = 'submit' value='Post' className='btn btn-secondary'/>
            </form>
        </div>
        )
    }
}

export default CreateMessage;