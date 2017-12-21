import * as db from '../utils/DataBaseUtils';

export default app => {
  app.get('/notes', (req, res) => db.listNotes().then(data => res.send(data)));
  app.post('/notes', (req, res) => db.createNote(req.body).then(data => res.send(data)));
  app.delete('/notes/:id', (req, res) => db.deleteNote(req.params.id).then(data => res.send(data)));
}