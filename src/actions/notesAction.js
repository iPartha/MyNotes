import * as actionTypes from './actionTypes';

  export const addNotes = notes => {
  return {
    type: actionTypes.ADD_NOTES,
    payload: notes
  }
};

  export const removeNotes = key => {
  return {
    type: actionTypes.REMOVE_NOTES,
    payload: key
  }
};