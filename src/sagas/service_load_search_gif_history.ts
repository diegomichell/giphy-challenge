import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put, takeEvery } from 'redux-saga/effects';
import ActionTypes from '../actions/action-types';
import GifActions from '../actions/gif-actions';

export function* serviceLoadSearchGifHistory() {
  const searchHistoryRaw = yield call(AsyncStorage.getItem, 'searchHistory');
  yield put(GifActions.saveSearchHistory(JSON.parse(searchHistoryRaw)));
}


export function* service_load_search_gif_history() {
  yield takeEvery(ActionTypes.SERVICE_LOAD_SEARCH_GIF_HISTORY, serviceLoadSearchGifHistory);
}
