import React, { Component } from "react";
import { Link, Route} from "react-router-dom";
import NotesPage from './NotesPage'
import "./Noteful.css";
import {findNote} from '../helperFunctions'

export default class MainMain extends Component {
  render() {
    let notes = this.props.state;
    let allNotes = this.props.state.notes;


    return (
      <div className="Main">
        <h2>Main Page</h2>

        <Route
            path='/note/:noteId'
            render={ routeProps => {
              const { noteId } = routeProps.match.params;
              const note = findNote(notes, noteId);
              console.log(note);
              return <NotesPage {...routeProps} note={note} />;
            }}
          />

        {allNotes.map((note) => (
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
