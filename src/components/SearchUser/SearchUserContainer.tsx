import React, { useEffect, useRef, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SearchUser from "./SearchUser";
import { UserState } from "../../state/reducers/types";
import useOnClickOutside from "../../hooks/useOnClickOutside";

// creating the type for props of SearchUser component
export type SearchUserType = {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
} & UserState;

const SearchUserContainer = () => {
  const [term, setTerm] = useState("");
  const [focused, setFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // setting the focused state when user clicks outside the searchbar
  const onOutsideClick = () => {
    if (focused) setFocused(!focused);
  };

  useOnClickOutside(containerRef, onOutsideClick);

  // destrtucturing needed actions from the custom hook
  const { searchUser, resetState } = useActions();

  // using typed selector from custom hook to get the state
  const state = useTypedSelector((state) => state.user);

  // action should be dispatched only after user stops typying
  // using setTimeout to have some delay, not to send too many requests
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (term !== "") {
        searchUser(term);
      } else {
        resetState();
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [term]); //eslint-disable-line

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onFocus = () => {
    setFocused(!focused);
  };

  const isVisible = () => {
    if (focused && (state.loading || state.error || state.data)) {
      return true;
    }
    return false;
  };
  const searchUserProps = {
    ...state,
    onSearch,
    onFocus,
    containerRef,
    isVisible: isVisible(),
  };

  return <SearchUser {...searchUserProps} />;
};

export default SearchUserContainer;
