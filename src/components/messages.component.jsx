import React, { Component } from 'react';
import axios from 'axios';
import'bootstrap/dist/css/bootstrap.css';

class Messages extends Component {

/*    state = {
        messages: [{}],
        users: [],
      }
*/    

    render() {
        return(
            <div className='container-fluid bg-dark bg-gradient'>
                <ul className='list-group'>
                    {this.props.messages.map( message =>( 
                    <div className='row justify-content-md-center'>
                        <div className='col-auto' style={{fontFamily:'cursive'}}>
                            <li className='list-group-item list-group-item-dark rounded border-top-8' key={message.id}>{message.message}</li>
                        </div>
                    </div>
                      ))}
                </ul>
            </div>
        )
    }
}

export default Messages;