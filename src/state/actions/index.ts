import axios from "axios";
import { ActionType } from "./types";

const API_URL = process.env.REACT_APP_API_URL || "";

export const searchUser = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_USER,
    });
    try {
      const { data } = await axios.get(API_URL, {
        params: {
          text: term,
        },
      });
      const userData = {
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
