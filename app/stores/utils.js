export const formatNote = note => ({
  id: note._id,
  title: note.title,
  text: note.text,
  color: note.color || '#ffffff',
  createdAt: note.createdAt,
});