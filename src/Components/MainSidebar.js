import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./Noteful.css";


export default class MainSidebar extends Component {
  render() {
    let allFolders = this.props.state.folders;

    return (
      <div className="Sidebar">
        <h2>Side Bar</h2>

        {allFolders.map((folder) => (
          <li key={folder.id}>
            <Link to={`/folder/`}>
              <div className="Folder-Divs">
                <h3>{folder.name}</h3>
              </div>
            </Link>
          </li>
        ))}

        <div className="Folder-Divs">
          <h3>Add Folder</h3>
        </div>
      </div>
    );
  }
}
