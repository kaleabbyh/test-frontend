/* eslint-disable no-unused-vars */
import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getSongsFailure,
  getSongsSuccess,
  addSongSuccess,
  addSongFailure,
} from "../state/SongState";

import { addSong, getAllSongs } from "../api/API";

function* getSongs() {
  try {
    const songs = yield getAllSongs();
    yield put(getSongsSuccess(songs));
  } catch (e) {
    yield put(getSongsFailure(e.message));
  }
}

export function* getSongsSaga() {
  yield takeEvery("songs/getSongsFetch", getSongs);
}

function* addsong(action) {
  try {
    const song = action.payload;
    const songs = yield addSong(song);
    yield put(addSongSuccess(songs));
  } catch (e) {
    yield put(addSongFailure(e.message));
  }
}

export function* addSongSaga() {
  yield takeEvery("songs/addSongFetch", addsong);
}

export default function* songSaga() {
  yield all([addSongSaga(), getSongsSaga()]);
}
