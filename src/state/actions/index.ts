import { Dispatch } from "redux";
import axios from "../../api";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { UserData } from "../reducers/types";
import { Action, ActionType } from "./types";

export const searchUser = (term: string) => {
  // using Dispatch and providing Action type to have typed dispatch
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_USER,
    });
    try {
      console.log("fetching");

      const { data } = await axios.get(term);
      const userData: UserData = {
        login: data.login,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        followers: data.followers,
        public_repos: data.public_repos,
      };
      dispatch({
        type: ActionType.SEARCH_USER_SUCCESS,
        payload: userData,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_USER_ERROR,
        payload: getErrorMessage(err),
      });
    }
  };
};

export const resetState = (): Action => {
  console.log("resetstate");

  return {
    type: ActionType.RESET_STATE,
  };
};
