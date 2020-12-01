import React from "react";
import {Link} from 'react-router-dom'
import "./Noteful.css";
import NotesMain from "./NotesMain";


export default class NotesPage extends React.Component {

  render() {
    
    return (
      <div>
        <header className="App-header">
          <Link to ='/'>
            <h1>Noteful</h1>
          </Link>
        </header>

        <div className="Group">
          <div className="Sidebar">
            <h2>Side Bar</h2>
          </div>

          <div className="Main">
            <h2>Notes Page</h2>
          <NotesMain 
            path = {this.props.path}
            state = {this.props.state}
          />
          </div>
        </div>
      </div>
    );
  }
}

