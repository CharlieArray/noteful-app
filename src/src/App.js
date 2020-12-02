import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import FolderPage from "./Components/FolderPage";
import MainPage from "./Components/MainPage";
import NotesPage from "./Components/NotesPage";
import dummyStore from "./dummyStore";

class App extends React.Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 100);
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => <MainPage {...props} state={this.state} />}
        />

        <Route
          path="/note"
          render={(props) => <NotesPage {...props} notes={notes} state={this.state} />}
        />

        <Route
          path="/folder"
          render={(props) => <FolderPage {...props} state={this.state} />}
        />
      </div>
    );
  }
}

export default App;
