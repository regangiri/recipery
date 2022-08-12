import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import loggerMiddleware from "../../middleware/logger";
import monitorReducerEnhancer from "../../enchancers/monitorReducer";

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);

store.subscribe(() => console.log(store.getState()));

export default store;
