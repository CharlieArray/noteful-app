import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import NotesPage from "./NotesPage";
import "./Noteful.css";
import StateContext from "../StateContext";
import AddNote from "./AddNote";

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

              {/* This gave me most issues state passed in cannot be in { } for map/filter methods  */}
              {data.state.notes.map((note) => (
                <li key={note.id}>
                  <Link to={`/note/${note.id}`}>
                    <div className="Note-Divs">
                      <h2>{note.name}</h2>
                      <h3>Date Modified: {note.modified}</h3>
                      <button className="Button">Delete Note</button>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          );
        }}
      </StateContext.Consumer>
    );
  }
}
