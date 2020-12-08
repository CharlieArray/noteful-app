import React, { Component } from "react";
import StateContext from "../StateContext";
import {Link} from 'react-router-dom'
import "./Noteful.css";

//only return notes from highlighted folder
export default class FolderMain extends Component {
  static contextType = StateContext;

  render() {
    const context = this.context;
    const folders = context.folders;
    const notes = context.notes;
    const folderId = this.props.match.params.folderId;

    let noteResultName;
    let noteResultDate;

    // console.log(notes); //good
    // console.log(folders); //good

    const filterNotes = notes.filter(function (note) {
      if (note.folderId === folderId) {
        return true;
      }
    });

    return (
      <div className="Main">
        <h2>Folder Page</h2>

        {filterNotes.map((note) => (
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>
              <div className="Note-Divs">
                <h2>{note.name}</h2>
                <h3>Date Modified: {note.modified}</h3>
                <button className="Button">Delete Button</button>
              </div>
            </Link>
          </li>
        ))}
      </div>
    );
  }
}
