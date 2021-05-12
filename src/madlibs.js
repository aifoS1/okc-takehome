import {
  FIELD_NAMES,
  FIELDS,
} from './constants';



// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = 'MADLIBS.SUBMIT_FIELD';
export const DELETE_FIELD = 'MADLIBS.DELETE_FIELD';
export const UPDATE_TEMPLATE = 'MADLIBS.UPDATE_TEMPLATE';
export const DELETE_TEMPLATE = 'MADLIBS.DELETE_TEMPLATE';
export const ADD_TEMPLATE = 'MADLIBS.ADD_TEMPLATE';
export const SHOW_EDIT = 'MADLIBS.SHOW_EDIT';
export const SET_EDIT_TEXT = 'MADLIBS.SET_EDIT_TEXT';
export const START_OVER = 'MADLIBS.START_OVER';


// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],
  fields: FIELDS,
  fieldAnswers: {},
  essayText: '',
  isEdit: false,
  previewTemplates: [],
};


// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FIELD: {
      const { fieldName, answer } = action.payload;

      return { ...state, fieldAnswers: { ...state.fieldAnswers, [fieldName]: answer } };
    }
    case DELETE_FIELD: {
      const { id } = action.payload;
      const stateCopy = { ...state };
      delete stateCopy.fieldAnswers[id];
      return stateCopy;
    }

    case ADD_TEMPLATE: {
      const { index, previewText } = action.payload;
      const newArray = state.previewTemplates.slice();
      newArray[index] = previewText;

      return {
        ...state,
        previewTemplates: newArray,
      };
    }
    case UPDATE_TEMPLATE: {
      const { index, previewText } = action.payload;

      const newArray = state.previewTemplates.map((template, i) => {
        if (i !== index) {
          return template;
        }
        return previewText;
      });

      return {
        ...state,
        previewTemplates: newArray,
      };
    }
    case DELETE_TEMPLATE: {
      const { index } = action.payload;

      const newArray = state.previewTemplates.slice();
      // delete template but add placeholder to reserve index
      newArray[index] = [''];

      return {
        ...state,
        previewTemplates: newArray,
      };
    }
    case SHOW_EDIT: {
      return {
        ...state,
        isEdit: true,
      };
    }
    case SET_EDIT_TEXT: {
      const { essayText } = action.payload;
      return {
        ...state,
        essayText,
      };
    }
    case START_OVER: {
      return {
        ...INITIAL_STATE,
      };
    }

    default:
      return state;
  }
}


// Action creators
// ----------------------------------------------------------------------------

export function submitField({ id, answer }) {
  return { type: SUBMIT_FIELD, payload: { fieldName: id, answer } };
}
export function deleteField({ id }) {
  return { type: DELETE_FIELD, payload: { id } };
}
export function addTemplate({ index, previewText }) {
  return { type: ADD_TEMPLATE, payload: { index, previewText } };
}
export function updateTemplate({ index, previewText }) {
  return { type: UPDATE_TEMPLATE, payload: { index, previewText } };
}
export function deleteTemplate({ index }) {
  return { type: DELETE_TEMPLATE, payload: { index } };
}
export function showEdit() {
  return { type: SHOW_EDIT };
}
export function setEditText({ essayText }) {
  return { type: SET_EDIT_TEXT, payload: { essayText } };
}
export function startOver() {
  return { type: START_OVER };
}
