import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const SearchUser = () => {
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
  }, [term, searchUser]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const state = useTypedSelector((state) => state);

  console.log(state);

  return (
    <div>
      <input
        autoFocus
        type="text"
        placeholder="Search an user here..."
        onChange={onSearch}
      />
      <div></div>
    </div>
  );
};

export default SearchUser;
