import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middlewares = [logger];

const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
