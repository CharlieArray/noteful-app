import React from "react";
import "./Noteful.css";
import config from "../config";
import StateContext from "../StateContext";
import getCurrentDate from "../Components/getCurrentDate";
import PropTypes from "prop-types";
import FormError from "./FormError";

export default class AddNote extends React.Component {
  static contextType = StateContext;

  handleNoteNameChange = (event) => {
    this.context.onNoteNameChange(event.target.value);
  };

  handleNoteContentChange = (event) => {
    this.context.onNoteContentChange(event.target.value);
  };
  //change to select input with options for folders
  handleNoteLocationChange = (event) => {
    this.context.onNoteLocationChange(event.target.value);
  };

  handleSubmit(event) {
    event.preventDefault();

    let { name, content, folderId } = this.context;

    let modified = getCurrentDate();
    const { folders } = this.context;
    if (folderId == null) {
      folderId = folders[0].id;
    }

    const notes = {
      note_name: name.value,
      content: content.value,
      folder_id: folderId.value,
      note_modified: modified,
    };
    const url = `${config.API_ENDPOINT}/notes`;
    const options = {
      method: "POST",
      body: JSON.stringify(notes),
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
  }

  render() {
    return (
      <div className="Note-Divs">
        <h3>Add New Note</h3>
        <FormError>
          <form
            onSubmit={(event) => this.handleSubmit(event)}
            className="Form-AddNote"
          >
            <div className="Group-AddNote">
              <label htmlFor="name">Note Name:</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                minLength="3"
                onChange={(event) => this.handleNoteNameChange(event)}
              ></input>
            </div>
            <div className="Group-AddNote">
              <label htmlFor="content">Note Content:</label>
              <input
                required
                type="text"
                name="content"
                id="content"
                minLength="3"
                onChange={(event) => this.handleNoteContentChange(event)}
              ></input>
            </div>

            <div className="Group-AddNote">
              <label htmlFor="folder">Note Location:</label>
              <select
                required
                name="folder"
                id="folder"
                onChange={(event) => this.handleNoteLocationChange(event)}
              >
                <option value=""></option>
                {this.context.folders.map((folder) => (
                  <option key={folder.id} value={folder.id}>
                    {folder.folder_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="Group-AddNote">
              <button>Create Note</button>
            </div>
          </form>
        </FormError>
      </div>
    );
  }
}

AddNote.propTypes = {
  event: PropTypes.string,
};
