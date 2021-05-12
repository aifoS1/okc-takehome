import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Edit({ essayText, startOver }) {
  const [text, setText] = useState(essayText);
  return (
    <section className="edit">
      <div className="edit--content">
        <h2 className="header">Your essay text</h2>
        <textarea value={text} onChange={(event) => setText(event.target.value)} />
        <Button text="Start over" handleClick={startOver} />
      </div>
    </section>
  );
}

export default Edit;

Edit.propTypes = {
  essayText: PropTypes.string.isRequired,
  startOver: PropTypes.func.isRequired,
};
