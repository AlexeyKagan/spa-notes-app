import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Note from './Note.jsx';
import './NotesGrid.css';

const masonryOptions = {
  itemSelector: '.Note',
  columnWidth: 250,
  gutter: 10,
  isFitWidth: true
};

export default function NotesGrid({ notes, onNoteDelete }) {
  return (
    <Masonry
      className='NotesGrid'
      options={masonryOptions}
    >
      {
        notes.map(note =>
          <Note
            key={note.id}
            title={note.title}
            onDelete={() => onNoteDelete(note)}
            color={note.color}
          >
            {note.text}
          </Note>
        )
      }
    </Masonry>
  );
}

NotesGrid.propTypes = {
  onNoteDelete: PropTypes.func,
  notes: PropTypes.array,
};
