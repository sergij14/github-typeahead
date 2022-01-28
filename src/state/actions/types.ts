import { UserState } from "../reducers/types";

interface ResetStateAction {
  type: ActionType.RESET_STATE;
}

interface SearchUserAction {
  type: ActionType.SEARCH_USER;
}

interface SearchUserSuccessAction {
  type: ActionType.SEARCH_USER_SUCCESS;
  payload: UserState["data"];
}

interface SearchUserErrorAction {
  type: ActionType.SEARCH_USER_ERROR;
  payload: UserState["error"];
}

export type Action =
  | SearchUserAction
  | SearchUserErrorAction
  | SearchUserSuccessAction
  | ResetStateAction;

export enum ActionType {
  SEARCH_USER = "SEARCH_USER",
  SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS",
  SEARCH_USER_ERROR = "SEARCH_USER_ERROR",
  RESET_STATE = "RESET_STATE",
}
