import { put, call, takeLatest } from "redux-saga/effects";
import { SignIn, Register, VerifyMe, PremiumUser } from "../../../api/loginApi";
// import * as userAction from ''
import { success, error } from "../../../modules/shared/Notifications";
import * as actions from "../../reducers/ducks/MainDuck";
import axios from "axios";
import useRazorpay from "react-razorpay";
import { toast } from "react-toastify";

export function* register({ payload }) {
  try {
    const user = yield call(Register, payload);
    yield put(actions.updateAuthSuccessStatus(true));
    if (user?.data?.status === 200) {
      console.log(user);
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
      const [header, payload, signature] = user?.data?.data?.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      if (!decodedPayload.isVerified) {
        error("please verify yourself!");
        return;
      }
      localStorage.setItem("access_token", user?.data?.data);
      yield put(actions.loginResponse({ response: user?.data?.data }));
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

export function* verify({ payload }) {
  try {
    const user = yield call(VerifyMe, payload);
    console.log(user);
  } catch (error) {
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* Premium({ payload }) {
  try {
    console.log(payload);
    const response = yield call(PremiumUser, payload);
    const token = payload;
    const [Razorpay] = useRazorpay;
    let options = {
      key: response.data.key_id,
      order_id: response.data.order.id,
      handler: async function (response) {
        const data = await axios.post(
          `http://localhost:8001/api/payment/updatepremium`,
          {
            order_id: options.order_id,
            payment_id: response.razorpay_payment_id,
          },
          { headers: { Authorization: token } }
        );
        toast.success("you are a Premium User Now!");
      },
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", async function (response) {
      const data = await axios.post(
        `http://localhost:8001/api/payment/updatepremiumfailed`,
        {
          order_id: options.order_id,
          payment_id: response.razorpay_payment_id,
        },
        { headers: { Authorization: token } }
      );
      toast.error("Something went wrong!");
    });
  } catch (error) {
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* watchMainSagas() {
  yield takeLatest(actions.registerUser.type, register);
  yield takeLatest(actions.authorizeUser.type, authorize);
  yield takeLatest(actions.userVerified.type, verify);
  yield takeLatest(actions.userPremium.type, Premium);
}
