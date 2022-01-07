import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import logdown from "logdown";
import { createLogger } from "redux-logger";
import { setupAxiosTokenInterceptor } from "../interceptors/interceptor";

const loggerMiddleware = createLogger({
  logger: logdown("redux", { markdown: false }),
});

const middleware = [thunk, loggerMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
setupAxiosTokenInterceptor(store);

export default store;
