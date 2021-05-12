import React from 'react';
import PropTypes from 'prop-types';

require('./App.scss');

function Field({
  name, question, handleBlur,
}) {
  return (
    <div className="field">
      <p className="field-question">{question}</p>
      <input className="field-answer" onBlur={(e) => handleBlur(e)} type="text" name={name} />
    </div>
  );
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  handleBlur: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
};

export default Field;
