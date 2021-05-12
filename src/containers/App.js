import { connect } from 'react-redux';
import {
  submitField, showEdit, setEditText, startOver,
} from '../madlibs';

import App from '../components/App';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  submitField,
  showEdit,
  setEditText,
  startOver,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
