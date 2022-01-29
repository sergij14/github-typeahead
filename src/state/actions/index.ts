import { Dispatch } from "redux";
import axios from "../../api";
import { UserData } from "../reducers/types";
import { Action, ActionType } from "./types";

export const searchUser = (term: string) => {
  // using Dispatch and providing Action type to have typed dispatch
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_USER,
    });
    try {
      const { data } = await axios.get(term);
      const userData: UserData = {
        login: data.login,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
      };
      dispatch({
        type: ActionType.SEARCH_USER_SUCCESS,
        payload: userData,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_USER_ERROR,
        payload: err.message,
      });
    }
  };
};

export const resetState = (): Action => {
  return {
    type: ActionType.RESET_STATE,
  };
};
