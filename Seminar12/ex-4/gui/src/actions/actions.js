const SERVER = 'http://localhost:8080'

export function getNotes () {
  return {
    type: 'GET_NOTES',
    payload: async () => {
      const response = await fetch(`${SERVER}/notes`)
      const data = await response.json()
      return data
    }
  }
}

export function addNote(content) {
  return {
    type: "ADD_NOTE",
    payload: content,
  };
}

export function deleteNote(id) {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
}
