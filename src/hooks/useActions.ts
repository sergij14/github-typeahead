// a custom hook for dispatching the action

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  // bindActionCreators gives us object that contains all of our action creators
  // the return values from action creators will be provided to dispatch function automatically
  return bindActionCreators(actionCreators, dispatch);
};
