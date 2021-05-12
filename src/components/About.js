import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import { getTextTemplateForField } from '../helpers';

require('./App.scss');

function About({
  submitField,
  fieldAnswers,
  fields,
  fieldOrder,
  updateTemplate,
  addTemplate,
  deleteTemplate,
  deleteField,
}) {
  const getPreviewText = (template, answer) => {
    const textArr = template.split(' ');
    const previewText = textArr.map((text) => {
      if (text.includes('$answer')) {
        return textArr[textArr.length - 1].includes('$answer') ? <b key={text}>{answer}. </b> : <b key={text}>{answer} </b>;
      }

      return `${text} `;
    });
    return previewText;
  };

  const handleBlur = ({ target }) => {
    const { name, value } = target;
    const index = fieldOrder.indexOf(name);

    // dont 'save' if value is the same
    if (fieldAnswers[name] === value) {
      return;
    }

    if (value) {
      submitField({ id: name, answer: value });
      const template = getTextTemplateForField(name);
      const previewText = getPreviewText(template, value);

      if (!fieldAnswers[name]) {
        addTemplate({ index, previewText });
      } else {
        updateTemplate({ index, previewText });
      }
    }

    if (fieldAnswers[name] && !value) {
      deleteField({ id: name });
      deleteTemplate({ index });
    }
  };


  const fieldsList = fieldOrder.map((field) => (
    <Field
      key={field}
      handleBlur={handleBlur}
      name={field}
      question={fields[field]}
    />
  ));

  return (
    <section className="about">
      <h2 className="header">About Me</h2>
      {fieldsList}
    </section>
  );
}

About.propTypes = {
  fields: PropTypes.shape({}).isRequired,
  fieldOrder: PropTypes.arrayOf(String).isRequired,
  fieldAnswers: PropTypes.shape({}).isRequired,
  submitField: PropTypes.func.isRequired,
  deleteField: PropTypes.func.isRequired,
  updateTemplate: PropTypes.func.isRequired,
  deleteTemplate: PropTypes.func.isRequired,
  addTemplate: PropTypes.func.isRequired,
};

export default About;
