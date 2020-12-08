import React from "react";
import "./Noteful.css";
import config from "../config";
import StateContext from "../StateContext";
import getCurrentDate from "../Components/getCurrentDate";

export default class AddNote extends React.Component {
  static contextType = StateContext;
  constructor(props) {
    super(props);
    // this.handleNoteNameChange = this.handleNoteNameChange.bind(this);
    // this.handleNoteContentChange = this.handleNoteNameChange.bind(this);
    // this.handleNoteLocationChange = this.handleNoteNameChange.bind(this);
  }

  handleNoteNameChange = (event) => {
    console.log(this.props);
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
      name: name.value,
      content: content.value,
      folderId: folderId.value,
      modified: modified,
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
      <>
        <h3>Add New Note</h3>
        <form
          onSubmit={(event) => this.handleSubmit(event)}
          className="Form-AddNote"
        >
          <div className="Group-AddNote">
            <label htmlFor="name">Note Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(event) => this.handleNoteNameChange(event)}
            ></input>
          </div>
          <div className="Group-AddNote">
            <label htmlFor="content">Note Content:</label>
            <input
              type="text"
              name="content"
              id="content"
              onChange={(event) => this.handleNoteContentChange(event)}
            ></input>
          </div>

          <div className="Group-AddNote">
            <label htmlFor="">Note Location:</label>
            <select
              name="folder"
              id="folder"
              onChange={(event) => this.handleNoteLocationChange(event)}
            >
              <option>Choose Folder:</option>
              {this.context.folders.map((folder) => (
                <option 
                key={folder.id} 
                value={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
          </div>

          <div className="Group-AddNote">
            <button>Create Note</button>
          </div>
        </form>
      </>
    );
  }
}
