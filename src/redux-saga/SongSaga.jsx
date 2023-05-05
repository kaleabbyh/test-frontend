/* eslint-disable no-unused-vars */
import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getSongsSuccess,
  getSongsFailure,
  addSongSuccess,
  addSongFailure,
  editSongSuccess,
  editSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
} from "../state/SongState";

import { addSong, editSong, getAllSongs, deleteSong } from "../api/API";

function* getSongs() {
  try {
    const songs = yield getAllSongs();
    yield put(getSongsSuccess(songs));
  } catch (e) {
    yield put(getSongsFailure(e.message));
  }
}
// get song saga
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

// add song saga
export function* addSongSaga() {
  yield takeEvery("songs/addSongFetch", addsong);
}

function* editsong(action) {
  try {
    const songs = yield editSong(action.payload);
    yield put(editSongSuccess(songs));
  } catch (e) {
    yield put(editSongFailure(e.message));
  }
}

// edit song saga
export function* editSongSaga() {
  yield takeEvery("songs/editSongFetch", editsong);
}

function* deletesong(action) {
  try {
    const songs = yield deleteSong(action.payload);
    yield put(deleteSongSuccess(songs));
  } catch (e) {
    yield put(deleteSongFailure(e.message));
  }
}

// delete song saga
export function* deleteSongSaga() {
  yield takeEvery("songs/deleteSongFetch", deletesong);
}

export default function* songSaga() {
  yield all([getSongsSaga(), addSongSaga(), editSongSaga(), deleteSongSaga()]);
}
