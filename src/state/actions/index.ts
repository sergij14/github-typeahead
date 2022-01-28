import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { UserData } from "../reducers/types";
import { Action, ActionType, ServerError } from "./types";

const API_URL =
  process.env.REACT_APP_API_URL || "https://api.github.com/users/";

export const searchUser = (term: string) => {
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
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const serverError = err as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      return { error: "something went wrong!" };
    }
  };
};
