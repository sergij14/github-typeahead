import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SearchUser from "./SearchUser";
import {UserState} from '../../state/reducers/types';

// creating the type for props of SearchUser component
export type SearchUserType = {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & UserState;

const SearchUserContainer = () => {
  const [term, setTerm] = useState("");

  // destrtucturing needed action from the custom hook
  const { searchUser } = useActions();

  // action should be dispatched only after user stops typying
  // using setTimeout to have some delay, not to send too many requests
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (term !== "") searchUser(term);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [term]); //eslint-disable-line

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  // using typed selector from custom hook to get the state
  const state = useTypedSelector((state) => state.user);

  return <SearchUser {...state} onSearch={onSearch} />;
};

export default SearchUserContainer;
