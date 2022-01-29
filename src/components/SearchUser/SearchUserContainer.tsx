import React, { useCallback, useEffect, useRef, useState } from "react";
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

  // checking if the typeahead suggestions is active
  const checkVisible = useCallback(() => {
    if (focused && (state.loading || state.error || state.data)) {
      return true;
    }
    return false;
  }, [state.loading, state.error, state.data, focused]);

  const isVisible = checkVisible();

  // setting the focused state when user clicks outside the searchbar
  const onOutsideClick = () => {
    if (isVisible) setFocused(false);
  };

  useOnClickOutside(containerRef, onOutsideClick);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onFocus = () => {
    if (!isVisible) setFocused(true);
  };

  const searchUserProps = {
    ...state,
    onSearch,
    onFocus,
    containerRef,
    isVisible,
  };

  return <SearchUser {...searchUserProps} />;
};

export default SearchUserContainer;
