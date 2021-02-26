import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import NotesPage from "./NotesPage";
import "./Noteful.css";
import StateContext from "../StateContext";
import PropTypes from "prop-types";

//might need to refacotr this to have a static contexType since its a class function
export default class MainMain extends Component {
  render() {
    return (
      <StateContext.Consumer>
        {(data) => {
          return (
            <div className="Main">
              <h2>Main Page</h2>

              <Route path="/note/:noteId" component={NotesPage} />
              <ul>
                {/* This gave me most issues state passed in cannot be in { } for map/filter methods  */}
                {data.notes.map((note) => (
                  <li key={note.id}>
                    <div className="Note-Divs">
                      <Link to={`/note/${note.id}`}>
                        <h2>{note.note_name}</h2>
                        <h3>Date Modified: {note.note_modified}</h3>
                      </Link>
                      <button
                        onClick={(event) => data.deleteNote(note.id)}
                        className="Button"
                      >
                        Delete Note
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </StateContext.Consumer>
    );
  }
}

MainMain.propTypes = {
  key: PropTypes.string,
};
