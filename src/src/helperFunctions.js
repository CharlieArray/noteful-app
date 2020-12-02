
export const findNote = (notes=[], noteId) =>
  notes.find(note => note.id === noteId)
