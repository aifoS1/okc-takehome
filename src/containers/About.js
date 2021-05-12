import { connect } from 'react-redux';
import {
  submitField, updateTemplate, deleteTemplate, addTemplate, deleteField,
} from '../madlibs';

import About from '../components/About';

function mapStateToProps(state) {
  const {
    fieldOrder, fields, fieldAnswers,
  } = state;
  return {
    fieldOrder, fields, fieldAnswers,
  };
}

const mapDispatchToProps = {
  submitField,
  deleteField,
  addTemplate,
  updateTemplate,
  deleteTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
