import { Action, ActionType } from "../actions/types";
import { userState } from "./types";

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
