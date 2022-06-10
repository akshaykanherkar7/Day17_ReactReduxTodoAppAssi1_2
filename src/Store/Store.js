import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { TodoReducer } from "./Reducer";

const rootReducer = combineReducers({
  todo: TodoReducer,
  auth: authReducer,
});
export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
