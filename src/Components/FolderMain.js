import React, { Component } from "react";
import StateContext from "../StateContext";
import { Link } from "react-router-dom";
import "./Noteful.css";

//only return notes from highlighted folder
export default class FolderMain extends Component {
  static contextType = StateContext;

  render() {
    const context = this.context;
    const notes = context.notes;
    
    const folderId = this.props.match.params.folderId;

    console.log('this is folderID:'+ folderId)


    const filterNotes = notes.filter(function (note) {
      console.log("this is note folder:"+ note.reference_folder_id)
      if (note.reference_folder_id == folderId) {
        return true;
      }

    });

    return (
      <div className="Main">
        <h2>Folder Page</h2>
        <ul>
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
        </ul>
      </div>
    );
  }
}
