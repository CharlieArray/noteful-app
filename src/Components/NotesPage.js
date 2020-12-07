import React from "react";
import { Route, Link } from "react-router-dom";
import "./Noteful.css";
import NotesMain from "./NotesMain";
import NotesSidebar from "./NotesSidebar";

export default class NotesPage extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>

        <div className="Group">
          <div className="Sidebar">
            <Route path="/note/:noteId" component={NotesSidebar} />
          </div>

          <div className="Main">
            <h2>Notes Page</h2>
            <Route path="/note/:noteId" component={NotesMain} />
          </div>
        </div>
      </div>
    );
  }
}
