import authorization from "./ducks/MainDuck";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

const appVersion = process.env?.REACT_APP_VERSION ?? "0.0.0";

const persistConfig = {
  key: `rootstore_${appVersion}`,
  storage,
};

const reducers = {
  authorization,
};

export default persistCombineReducers(persistConfig, reducers);
