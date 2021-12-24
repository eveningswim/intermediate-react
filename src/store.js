import { createStore } from "redux";
import reducer from "/.reducer";

const store = createStore(
  store,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f // identity function just returns itself
);

export default store;
