import { createStore, combineReducers } from 'redux';
import notesReducer from '../reducers/notesReducer';

const rootReducer = combineReducers({
  notesList: notesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;