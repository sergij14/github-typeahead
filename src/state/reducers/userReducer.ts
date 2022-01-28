import { Action } from "../actions/types";
import { userState } from "./types";

enum ActionType {
  SEARCH_USER = "SEARCH_USER",
  SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS",
  SEARCH_USER_ERROR = "SEARCH_USER_ERROR",
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const userReducer = (
  state: userState = initialState,
  action: Action
): userState => {
  switch (action.type) {
    case ActionType.SEARCH_USER: {
      return { loading: true, error: null, data: null };
    }
    case ActionType.SEARCH_USER_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }

    case ActionType.SEARCH_USER_ERROR: {
      return { loading: false, error: action.payload, data: null };
    }

    default: {
      return state;
    }
  }
};
