import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

export default function Store(preloadState) {
  const middlewares = [thunk];
  const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, preloadState, composeEnhancers);
  return store;
}
