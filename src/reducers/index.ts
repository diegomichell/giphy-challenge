import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import gifs from './gifs_reducer';

export default combineReducers({
  form: formReducer,
  gifs: gifs
});
