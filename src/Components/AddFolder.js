import React, { Component } from "react";
import "./Noteful.css";
import config from "../config";
import StateContext from "../StateContext";
import FormError from "./FormError";

export default class AddFolder extends Component {
  static contextType = StateContext;

  handleAddFolder = (event) => {
    this.context.onFolderChange(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.context;
    const folders = {
      folder_name: name.value,
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
        <FormError>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <label className="Form-AddFolder" htmlFor="folder">Add Folder</label>
            <input
              required
              onChange={(event) => this.handleAddFolder(event)}
              // ref= {this.folderInput}
              type="text"
              id="folder"
              name="folder"
              minLength="3"
            />
            <br />

            <button> Create Folder</button>
          </form>
        </FormError>
      </div>
    );
  }
}
