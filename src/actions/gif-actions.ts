import { Gift } from '../models/giphy';
import { SearchHistoryItem } from '../models/search-history';
import ActionTypes from './action-types';


const GifActions = {
  search(search: string, onFished: () => void) {
    return {
      type: ActionTypes.SERVICE_SEARCH_GIF,
      payload: {
        search,
        onFished
      }
    }
  },
  loadGifs(gifs: Gift[]) {
    return {
      type: ActionTypes.LOAD_GIFS,
      payload: {
        gifs
      }
    }
  },
  setErrorLoadingGifs(error: string) {
    return {
      type: ActionTypes.SET_ERROR_LOADING_GIFS,
      payload: {
        error
      }
    }
  },
  serviceSaveSearchHistory(searchHistory: SearchHistoryItem[]) {
    return {
      type: ActionTypes.SERVICE_SAVE_SEARCH_GIF,
      payload: {
        searchHistory
      }
    }
  },
  saveSearchHistory(searchHistory: string[]) {
    return {
      type: ActionTypes.SAVE_SEARCH_GIF,
      payload: {
        searchHistory
      }
    }
  },
  serviceLoadSearchHistory() {
    return {
      type: ActionTypes.SERVICE_LOAD_SEARCH_GIF_HISTORY,
      payload: {}
    }
  },
}

export default GifActions;
