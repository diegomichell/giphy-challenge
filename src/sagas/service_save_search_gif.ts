import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put, takeEvery } from 'redux-saga/effects';
import ActionTypes from '../actions/action-types';
import GifActions from '../actions/gif-actions';

export function* serviceSaveSearchGif(action) {
    const {searchHistory} = action.payload;

    yield call(AsyncStorage.setItem, 'searchHistory', JSON.stringify(searchHistory));
    yield put(GifActions.saveSearchHistory(searchHistory));
}


export function* service_save_search_gif() {
  yield takeEvery(ActionTypes.SERVICE_SAVE_SEARCH_GIF, serviceSaveSearchGif);
}
