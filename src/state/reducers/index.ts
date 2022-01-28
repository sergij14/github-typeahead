import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
});

// defining the root state type,
// to accurately describe the type of data that we have in the store

// code from official docs:
export type RootState = ReturnType<typeof reducers>;

export default reducers;
