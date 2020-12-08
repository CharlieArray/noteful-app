import React, { Component } from "react";
import "./Noteful.css";
import config from "../config";
import StateContext from "../StateContext";


export default class AddFolder extends Component {
  static contextType= StateContext
    constructor(props){
        super(props);
    }

  // handleSubmit(event) {
  //   event.preventDefault();
    // const folderName = this.folderInput.current.value;
  //   console.log("folder name", folderName);
  // }

  //DO I NEED THIS? OR JUST THE HANDLE SUBMIT?
  handleAddFolder = (event) => {
    this.context.onFolderChange(event.target.value)

  }
  //DO I NEED THIS? OR JUST THE HANDLE ADD FOLDER?
  handleSubmit(event) {
    event.preventDefault();
     const { name } = this.context;
    const folders = { 
      name: name.value,
    };
    const url = `${config.API_ENDPOINT}/folders`;
    const options = {
      method: "POST",
      body: JSON.stringify(folders),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then((data) => {
        event.target.reset()
        this.context.getData()
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }


  render() {
    return (
      <div>
          <h3>Add New Folder</h3>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <label className="Form-AddFolder" htmlFor="folder"></label>
          <input 
            onChange={ event => this.handleAddFolder(event)}
            // ref= {this.folderInput}
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
