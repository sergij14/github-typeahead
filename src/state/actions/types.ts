import { UserData } from "../reducers/types";

interface SearchuserAction {
  type: ActionType.SEARCH_USER;
}

interface SearchuserSuccessAction {
  type: ActionType.SEARCH_USER_SUCCESS;
  payload: UserData;
}

interface SearchuserErrorAction {
  type: ActionType.SEARCH_USER_ERROR;
  payload: string;
}

export type Action =
  | SearchuserAction
  | SearchuserErrorAction
  | SearchuserSuccessAction;


export enum ActionType {
  SEARCH_USER = "SEARCH_USER",
  SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS",
  SEARCH_USER_ERROR = "SEARCH_USER_ERROR",
}
