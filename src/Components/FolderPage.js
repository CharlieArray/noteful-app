import React from "react";
import { Route, Link } from "react-router-dom";
import FolderMain from "./FolderMain";
import FolderSidebar from "./FolderSidebar";
import "./Noteful.css";


export default class FolderPage extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>

        <div className="Group">
          <Route path="/folder/:folderId" component={FolderSidebar} />

          <Route path="/folder/:folderId" component={FolderMain} />
        </div>
      </div>
    );
  }
}