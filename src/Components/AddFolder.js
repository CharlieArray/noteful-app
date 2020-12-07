import "./Noteful.css";
import React, { Component } from "react";

export default class AddFolder extends Component {
    constructor(props){
        super(props);
        this.folderInput =React.createRef();
    }

  handleSubmit(event) {
    event.preventDefault();
    const folderName = this.folderInput.current.value;
    console.log("folder name", folderName);
  }

  render() {
    return (
      <div>
          <h3>Add New Folder</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label className="Form-AddFolder" htmlFor="folder"></label>
          <input 
            ref= {this.folderInput}
            defaultValue="New Folder"
            type="text"
            id="folder"
            name="folder"
          />
          <br />
          <button> Create Folder</button>
          {/* create event trigger*/}
        </form>
      </div>
    );
  }
}
