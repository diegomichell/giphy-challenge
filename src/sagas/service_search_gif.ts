import { takeEvery, call, put } from 'redux-saga/effects';
import ActionTypes from '../actions/action-types';
import GifActions from '../actions/gif-actions';
import { GiphyResponse } from '../models/giphy';
import GiphyService from '../services/giphy-service';

export function* serviceSearchGif(action) {
  const {onFished} = action.payload;

  try {
    const res: GiphyResponse = yield call(GiphyService.searchGif, action.payload.search);

    onFished();

    if (res.meta.status != 200) {
      throw new Error('There was an error loading gifs');
    }

    yield put(GifActions.loadGifs(res.data));
  } catch (error) {
    yield put(GifActions.setErrorLoadingGifs(error.message));
  }
}


export function* service_search_gif() {
  yield takeEvery(ActionTypes.SERVICE_SEARCH_GIF, serviceSearchGif);
}
