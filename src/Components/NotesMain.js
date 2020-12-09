import React, { Component } from "react";
import StateContext from "../StateContext";
import "./Noteful.css";
import config from "../config";
import AddNote from "./AddNote";

export default class NotesMain extends Component {
  static defaultProps = {
    onDeleteNote: () => {},
    match: {
      params: {},
    },
  };

  static contextType = StateContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.match.params.noteId;
    console.log(noteId);

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      // .then((res) => {
      //   if (!res.ok) return res.json().then((e) => Promise.reject(e));
      //   return res.json();
      // })
      .then(() => {
        this.context.deleteNote(noteId);
        this.props.history.push(`/`);
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  // handleDeleteNote = noteId => {
  //   this.props.history.push(`/`)
  // }

  render() {
    const context = this.context;

    const noteId = this.props.match.params.noteId;
    let noteResultName;
    let noteResultDate;
    let noteContents;

    context.notes.filter(function (note) {
      if (note.id === noteId) {
        noteResultName = note.name;
        noteResultDate = note.modified;
        noteContents = note.content;
      }
    });

    return (
      <>
      <div className="Main">
        <div className="Note-Divs">
          <h2>{noteResultName}</h2>
          <h3>Date Modified: {noteResultDate}</h3>
          <h4>{noteContents}</h4>
          <button onClick={event => {
            context.deleteNote(noteId)
            this.props.history.push(`/`)
          }} className="Button">
            Delete Note
          </button>
        </div>
      </div>
      </>
    );
  }
}
