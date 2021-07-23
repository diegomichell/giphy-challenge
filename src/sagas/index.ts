import { all } from 'redux-saga/effects';
import { service_load_search_gif_history } from './service_load_search_gif_history';
import { service_save_search_gif } from './service_save_search_gif';
import { service_search_gif } from './service_search_gif';

export default function* rootSaga() {
  yield all([
    service_search_gif(),
    service_save_search_gif(),
    service_load_search_gif_history()
  ]);
}
