import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import FolderPage from "./Components/FolderPage";
import MainPage from "./Components/MainPage";
import NotesPage from "./Components/NotesPage";
import StateContext from "./StateContext";
import config from './config';

class App extends React.Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/notes`),
        fetch(`${config.API_ENDPOINT}/folders`)
    ])
        .then(([notesRes, foldersRes]) => {
            if (!notesRes.ok)
                return notesRes.json().then(e => Promise.reject(e));
            if (!foldersRes.ok)
                return foldersRes.json().then(e => Promise.reject(e));

            return Promise.all([notesRes.json(), foldersRes.json()]);
        })
        .then(([notes, folders]) => {
            this.setState({notes, folders});
        })
        .catch(error => {
            console.error({error});
        });
}

handleDeleteNote = noteId => {
    this.setState({
        notes: this.state.notes.filter(note => note.id !== noteId)
    });
};

updateNoteName(name) {
  this.setState({ name: { value: name } })
}

updateNoteContent(content) {
  this.setState({ content: { value: content } });
}

updateFolderLocation(folderId) {
  this.setState({ folderId: { value: folderId } });
}

  render() {
    const value = 
    { state : this.state, 
     deleteNote : this.handleDeleteNote,
     onNoteNameChange: this.updateNoteName,
     onNoteContentChange: this.updateNoteContent,
     onNoteLocationChange: this.updateFolderLocation,
    }
    
    return (
      //passed in context must be value = {whatever context}
      <StateContext.Provider value={value}>
        <div className="App">
          <Route
            exact
            path="/"
            component={MainPage}
            //get rid of render and just have component = {componentname}
          />

          <Route
            path="/note"
            component={NotesPage}
            //get rid of render and just have component = {componentname}
          />

          <Route
            path="/folder"
            component={FolderPage}
            //get rid of render and just have component = {componentname}
          />
        </div>
      </StateContext.Provider>
    );
  }
}

export default App;
