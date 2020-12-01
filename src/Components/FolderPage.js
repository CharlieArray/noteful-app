import React from "react";
import {Link} from 'react-router-dom'
import "./Noteful.css";

export default class FolderPage extends React.Component {

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
            <h2>Folder Page</h2>
            </div>
        </div>
      </div>
    );
  }
}
