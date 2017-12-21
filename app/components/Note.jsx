import React from 'react';
import PropTypes from 'prop-types';
import './Note.css';

export default function Note({ onDelete, title, children, color: backgroundColor }) {
  return (
    <div className='Note' style={{ backgroundColor }}>
      <span className='Note__del-icon' onClick={onDelete}> × </span>
      {
        title ? <h4 className='Note__title'>{title}</h4> : null
      }
      <div className='Note__text'>{children}</div>
    </div>
  );
};

Note.propTypes = {
  onDelete: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.element,
  color: PropTypes.string,
};
