import { put, call, takeLatest } from "redux-saga/effects";
import { SignIn, Register } from "../../../api/loginApi";
// import * as userAction from ''
import { success, error } from "../../../modules/shared/Notifications";
import * as actions from "../../reducers/ducks/MainDuck";

export function* register({ payload }) {
  try {
    const user = yield call(Register, payload);
    yield put(actions.updateAuthSuccessStatus(true));
    if (user?.data?.status === 200) {
      yield put(actions.loginResponse({ response: user?.data }));
      localStorage.setItem("access_token", user?.data?.access_token);
      success("User Register Successfully");
    } else if (user?.data?.status === 400 || user?.data?.status === 401) {
      error(user?.data?.message);
    } else {
      error(user?.data?.message || user?.message || user?.data?.data?.message);
    }
    yield put(actions.updateAuthLoading(false));
  } catch (error) {
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* authorize({ payload }) {
  try {
    const user = yield call(SignIn, payload);
    yield put(actions.updateAuthSuccessStatus(true));
    if (user?.status === 200 || user?.status === 201) {
      console.log(user);
      localStorage.setItem("access_token", user?.data?.data);
      yield put(actions.loginResponse({ response: user?.data }));
      yield put(actions.updateAuthLoading(false));
      success(user?.message);
    } else if (user?.status === 401 || user?.status === 400) {
      yield put(actions.updateAuthLoading(false));
    } else if (user?.status === 500 || user?.status === 501) {
      yield put(actions.updateAuthLoading(false));
    }
  } catch (error) {
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* watchMainSagas() {
  yield takeLatest(actions.registerUser.type, register);
  yield takeLatest(actions.authorizeUser.type, authorize);
}
