import React from "react";
import { Route, Link } from "react-router-dom";
import "./Noteful.css";
import NotesMain from "./NotesMain";
import NotesSidebar from "./NotesSidebar";

//sidebar show what folder current note is in
//add a back button

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
            <Route
              path="/note/:noteId"
              render={(props) => (
                <NotesSidebar 
                {...props} 
                state={this.props.state}
                 />
              )}
            />
          </div>

          <div className="Main">
            <h2>Notes Page</h2>
            <Route
              path="/note/:noteId"
              render={(props) => (
                <NotesMain
                  {...props}
                  noteId={props.match.params.noteId}
                  notes={this.props.notes}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
