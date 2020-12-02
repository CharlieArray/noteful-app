import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Noteful.css";


function handleClick(){
  console.log('clicked')
}


export default class NotesSidebar extends Component {
  render() {
    let allFolders = this.props.state.folders;

    return (
      <>
        <button onClick={handleClick}>Go Back</button>

        <h2>Side Bar</h2>

        <div className="Folder-Divs">Current Folder</div>

      </>
    );
  }
}
