import mongoose from "mongoose";

import config from '../config/config.json';

import '../models/Note';

const Note = mongoose.model('Note');

export const setUpConnection = () => mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

export const listNotes = () => Note.find();

export const createNote = data => {
  const note = new Note({
    title: data.title,
    text: data.text,
    color: data.color,
    createdAt: new Date()
  });

  return note.save();
};

export const deleteNote = id => Note.findById(id).remove();
