import * as actionTypes from '../actions/actionTypes';

const initialState = {
  notes: '',
  notesList: []
};

const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_NOTES:
      return {
        ...state,
        notesList: state.notesList.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    case actionTypes.REMOVE_NOTES:
      
        const newArray = [...state.notesList];
        newArray.splice(newArray.findIndex(ele => ele.key === action.payload), 1);
        return {
        ...state,
        notesList: newArray
      };
      
    default:
      return state;
  }
}

export default notesReducer;