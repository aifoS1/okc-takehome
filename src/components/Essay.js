import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


function Essay({
  previewTemplates,
  fieldAnswers,
  fieldOrder,
  showEdit,
  setEditText,
}) {
  const [showEditBtn, setShowEditBtn] = useState(false);

  useEffect(() => {
    const getEditText = () => {
      const essayTextArray = previewTemplates.flatMap((template) => template.map((copy) => {
        // if jsx object, join to make into string
        if (typeof copy === 'object') {
          return copy.props.children.join('');
        }

        return copy;
      }));
      return essayTextArray.join('');
    };
    // all fields are filled
    setShowEditBtn(Object.keys(fieldAnswers).length === fieldOrder.length);
    if (showEditBtn) {
      setEditText({ essayText: getEditText() });
    }
  }, [fieldAnswers, fieldOrder, previewTemplates, setEditText, showEditBtn]);

  return (
    <section className="essay">
      <h2 className="header">Your essay text</h2>

      <div className="essay-content">

        {previewTemplates.flatMap((template, i) => (
          <span key={template + i}>
            {template}
          </span>
        ))}
      </div>

      {showEditBtn && <Button handleClick={showEdit} text="Edit" /> }

    </section>
  );
}
Essay.propTypes = {
  fieldAnswers: PropTypes.shape({}).isRequired,
  fieldOrder: PropTypes.arrayOf(String).isRequired,
  previewTemplates: PropTypes.arrayOf(String).isRequired,
  showEdit: PropTypes.func.isRequired,
  setEditText: PropTypes.func.isRequired,
};

export default Essay;
