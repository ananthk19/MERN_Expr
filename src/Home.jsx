import react, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App.js';
import Login from './Login.jsx';

class Home extends Component {
    render(){
        return(
            <div>
                <Router>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/chat' component={App}/>
                </Router>
            </div>
        )
    }
}

export default Home;