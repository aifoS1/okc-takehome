import React from 'react';
import PropTypes from 'prop-types';
import About from '../containers/About';
import Essay from './Essay';
import Edit from './Edit';
// import Button from './Button';

require('./App.scss');

const App = ({
  fieldOrder,
  fieldAnswers,
  previewTemplates,
  showEdit,
  isEdit,
  setEditText,
  essayText,
  startOver,
}) => (
  <div className="match-area">
    <div className="match-area--content">
      {
        !isEdit
          ? (
            <>
              <About />
              <Essay
                fieldOrder={fieldOrder}
                fieldAnswers={fieldAnswers}
                previewTemplates={previewTemplates}
                showEdit={showEdit}
                setEditText={setEditText}
              />
            </>
          )
          : <Edit essayText={essayText} startOver={startOver} />
      }
    </div>
  </div>
);

App.propTypes = {
  showEdit: PropTypes.func.isRequired,
  setEditText: PropTypes.func.isRequired,
  startOver: PropTypes.func.isRequired,
  fieldOrder: PropTypes.arrayOf(String).isRequired,
  previewTemplates: PropTypes.arrayOf(String).isRequired,
  fieldAnswers: PropTypes.shape({}).isRequired,
  isEdit: PropTypes.bool.isRequired,
  essayText: PropTypes.string.isRequired,
};

export default App;
