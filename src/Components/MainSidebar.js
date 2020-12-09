import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Noteful.css";
import StateContext from "../StateContext";
import AddFolder from "./AddFolder";
import AddNote from "./AddNote";

export default class MainSidebar extends Component {
  render() {
    return (
      <StateContext.Consumer>
        {(data) => {
          return (
            <div className="Sidebar">
              <h2>
                Folder
                <br />
                Navigation
              </h2>

              {data.folders.map((folder) => (
                <li key={folder.id}>
                  <Link to={`/folder/` + folder.id}>
                    <div className="Folder-Divs">
                      <h3>{folder.name}</h3>
                    </div>
                  </Link>
                </li>
              ))}

              <div className="Folder-Divs">
                <AddFolder />
              </div>

              <div className="Folder-Divs">

                <button 
                onClick={event => this.props.history.push(`/note`)}>
                  Create New Note
                  </button>
              </div>
            </div>
          );
        }}
      </StateContext.Consumer>
    );
  }
}
