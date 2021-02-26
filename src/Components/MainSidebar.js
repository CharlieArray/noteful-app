import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Noteful.css";
import StateContext from "../StateContext";
import AddFolder from "./AddFolder";
import AddNote from "./AddNote";
import PropTypes from 'prop-types'


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
              <ul>
                {data.folders.map((folder) => (
                  <li key={folder.folder_id}>
                    <Link to={`/folder/` + folder.folder_id}>
                      <div className="Folder-Divs">
                        <h3>{folder.folder_name}</h3>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="Folder-Divs">
                <AddFolder />
              </div>

              <div className="Folder-Divs">
                <label htmlFor="addNoteButton">Add Note</label>
                <br/>
                <button name="addNoteButton" id="addNoteButton" onClick={(event) => this.props.history.push(`/note`)}>
                  Create Note
                </button>
              </div>
            </div>
          );
        }}
      </StateContext.Consumer>
    );
  }
}

MainSidebar.propTypes = {
  key: PropTypes.string
};

