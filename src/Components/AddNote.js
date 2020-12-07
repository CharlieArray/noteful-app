import React from "react";
import "./Noteful.css";
import config from "../config";

export default class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.handleNoteNameChange = this.handleNoteNameChange.bind(this);
    this.handleNoteContentChange = this.handleNoteNameChange.bind(this);
    this.handleNoteLocationChange = this.handleNoteNameChange.bind(this);
  }

  handleNoteNameChange(event) {
    this.props.onNoteNameChange(event.target.value)
  }

  handleNoteContentChange(event) {
    this.props.onNoteContentChange(event.target.value)

  }
  handleNoteLocationChange(event) {
    this.props.onNoteLocationChange(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, content, folderId } = this.props.state;
    const notes = { name, content, folderId };
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
        this.setState({
          name: "",
          content: "",
          folderId: "",
        });
        this.addNote(name, content,folderId);
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
        <form className="Form-AddNote">
          <div className="Group-AddNote">
            <label htmlFor="name">Note Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={event => this.handleNoteNameChange(event)}
            ></input>
          </div>
          <div className="Group-AddNote">
            <label htmlFor="content">Note Content:</label>
            <input
              type="text"
              name="content"
              id="content"
              onChange={event => this.handleNoteContentChange(event)}
            ></input>
          </div>

          <div className="Group-AddNote">
            <label htmlFor="">Note Location:</label>
            <input
              type="text"
              name="folder"
              id="folder"
              onChange={event => this.handleNoteLocationChange(event)}
            ></input>
          </div>

          <div className="Group-AddNote">
            <button onSubmit={(event) => this.handleSubmit(event)}>
              Create Note
            </button>
          </div>
        </form>
      </>
    );
  }
}
