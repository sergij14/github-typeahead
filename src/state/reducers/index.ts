import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
});

// defining the root state type,
// to accurately describe the type of data in the store
export type RootState = ReturnType<typeof reducers>;

export default reducers;
