import React, { Component } from "react";
import "./Noteful.css";

export default class NotesSidebar extends Component {
  render() {
    const history = this.props.history;

    function handleBackClick() {
      history.goBack();
      //alternate way is this.props.history.push('/')
      //make sure you take care of "this" since its in a function
    }

    let allFolders = this.props.state.folders;

    let fullURL = history.location.pathname;
    let urlID = fullURL.slice(6, 42);
    const notesArray = this.props.state.notes;

    let noteIdResult;
    notesArray.filter(function (note) {
      if (note.id === urlID) {
        noteIdResult = note.folderId;
      }
    });

    let folderNameResults;
    allFolders.filter(function (folder) {
      if (noteIdResult === folder.id) {
        folderNameResults = folder.name;
      }
    });

    //known is notes.id   => match notes.id to store  =>
    //get back folderId of that notes element and return folder.id

    return (
      <>
        <button onClick={handleBackClick}>Go Back</button>

        <h2>Side Bar</h2>

        <div className="Folder-Divs">
          <h3>{folderNameResults}</h3>
        </div>
      </>
    );
  }
}
