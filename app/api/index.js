import axios from 'axios';

const apiPrefix = 'http://localhost:8080';

export default {
  listNotes() {
    return axios.get(`${apiPrefix}/notes`);
  },

  createNote(data) {
    return axios.post(`${apiPrefix}/notes`, data);
  },

  deleteNote(noteId) {
    return axios.delete(`${apiPrefix}/notes/${noteId}`);
  }
}
