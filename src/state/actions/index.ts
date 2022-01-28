import axios from "axios";
import { Dispatch } from "redux";
import { UserData } from "../reducers/types";
import { Action, ActionType } from "./types";

const API_URL = "https://api.github.com/users/";

export const searchUser = (term: string) => {
  
  // using Dispatch and providing our Action type to have typed dispatch
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_USER,
    });
    try {
      const { data } = await axios.get(API_URL + term);
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
