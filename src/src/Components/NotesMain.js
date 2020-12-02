import React, { Component } from "react";
import "./Noteful.css";

export default class NotesMain extends Component {
  render() {
    const noteId = this.props.noteId;
    const note = this.props.notes;
    let noteNameString;

    note.filter(function (note) {
      if (note.id === noteId) {
        noteNameString = note.name;
      }
    });

    return (
      <div className="Main">
        <div className="Note-Divs">
          <h2>{noteNameString}</h2>
          <h3>Date Modified: {note.modified}</h3>
          <button className="Button">Delete Button</button>
        </div>
      </div>
    );
  }
}
