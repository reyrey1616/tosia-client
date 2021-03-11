import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

const middlewares = [logger, ReduxThunk];

const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
