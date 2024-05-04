import { all } from "redux-saga/effects";
import { watchMainSagas } from "./sagas/AuthSaga";

export default function* rootSaga() {
  yield all([watchMainSagas()]);
}
