import React from 'react'

const StateContext = React.createContext({
    notes: [],
    folders: [],
    deleteNote: () => {},
    addFolder: () => {},
    addNote: () => {},
})

export default StateContext

//can add piggy back updater functions here for buttons aka setLang: () => {  }
