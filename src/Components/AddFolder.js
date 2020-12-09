import React, { Component } from "react";
import "./Noteful.css";
import config from "../config";
import StateContext from "../StateContext";
// import DisplayValidationError from "./DisplayValidationError";

export default class AddFolder extends Component {
  static contextType = StateContext;
  constructor(props) {
    super(props);
  }

  // validateName = (event) => {
  //   const name = event.target.value
  //   console.log(name)
  //   if (name.length === 0) {
  //     return "Name is required";
  //   } else if (name.length < 3) {
  //     return "Name must be at least 3 characters long";
  //   }
  // };

  handleAddFolder = (event) => {
    this.context.onFolderChange(event.target.value);
  };

  handleSubmit = (event) => {
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
        event.target.reset();
        this.context.getData();
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    return (
      <div>
        <h3>Add New Folder</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label className="Form-AddFolder" htmlFor="folder"></label>
          <input
            onChange={(event) => this.handleAddFolder(event)}
            // ref= {this.folderInput}
            type="text"
            id="folder"
            name="folder"
            minLength="3"
          />
          {/* {this.context.touched && (
            <DisplayValidationError message={this.validateName()} />
          )} */}
          <br />
          <button> Create Folder</button>
        </form>
      </div>
    );
  }
}
