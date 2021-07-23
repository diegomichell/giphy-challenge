import ActionTypes from '../actions/action-types';

const initialState = {
  gifs: [],
  search_history: [],
  error_loading_gifs: null,
};

const gifs = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_GIFS:
      return {
        ...state,
        gifs: action.payload.gifs
      };
    case ActionTypes.SET_ERROR_LOADING_GIFS:
      return {
        ...state,
        error_loading_gifs: action.payload.error
      };
    case ActionTypes.SAVE_SEARCH_GIF:
      return {
        ...state,
        search_history: action.payload.searchHistory
      };
    default:
      return state;
  }
};

export default gifs;
