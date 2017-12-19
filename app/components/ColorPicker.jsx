import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ColorPicker.css';

const COLORS = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];
// @TODO
export default function ColorPicker({ value, onChange }) {
  return (
    <div className='ColorPicker'>
      {
        COLORS.map(color =>
          <div
            key={color}
            className={cx('ColorPicker__swatch', { selected: value === color })}
            style={{ backgroundColor: color }}
            onClick={() => onChange(color)}
          />
        )
      }
    </div>
  )
};

ColorPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
