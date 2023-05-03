/* eslint-disable no-unused-vars */
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getSongsFailure, getSongsSuccess } from "../state/SongState";

function* getSongs() {
  try {
    const song = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/albums")
    );

    const formated = yield song.json();
    yield put(getSongsSuccess(formated));
  } catch (e) {
    yield put(getSongsFailure(e.message));
  }
}

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", getSongs);
}

export default songSaga;
