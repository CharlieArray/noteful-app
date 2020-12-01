import React, { Component } from 'react'
import './Noteful.css'

export default class NotesMain extends Component {
    render() {

     const note = this.props.state.notes
     const currentIdPath = this.props.path;

        return (
            <div className="Main">

              <div className="Note-Divs">
                <h2>{currentIdPath}</h2>
                <h3>Date Modified: {note.modified}</h3>
                <button className="Button">
                  Delete Button
                </button>
              </div>
              
     
          </div>
        )
    }
}
