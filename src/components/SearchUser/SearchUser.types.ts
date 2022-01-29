import { UserState } from "../../state/reducers/types";

export type SearchUserPropTypes = {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
} & UserState;
