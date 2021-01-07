import React, { Component } from 'react';
import Messages from './components/messages.component';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateMessage from './components/create-messages.component';
import Home from './Home'

class App extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
//    this.handleChange = this.handleChange.bind(this);
}

  state = {
    messages: [{}],
    event : null
  }

  getMessages(){
    axios.get("http://localhost:5000/messages")
    .then(res => {
//           console.log(res.data);  
        this.setState({ messages: res.data});
//           console.log(this.state.messages);
    });
  }

  componentDidMount() {
    setInterval(() => this.getMessages(),1500);  
  }

  handleSubmit(){
    axios.get("http://localhost:5000/messages")
    .then(res => {
//           console.log(res.data);  
        this.setState({ messages: res.data});
//           console.log(this.state.messages);
    });
   }

   componentDidUpdate() {
   //  alert('update');
   }

  render() {
    return(
      <div className='h-200'>
        <a href='../'>Login</a>
        
          <Messages messages={this.state.messages} />
       
          <CreateMessage OnNewPost={() => this.handleSubmit}/>
      </div>
    )
  }
}

export default App;
