import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchUser } from "../state/actions";

const SearchUser = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (term !== "") {
        dispatch(searchUser(term));
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [term, dispatch]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <input
        autoFocus
        type="text"
        placeholder="Search an user here..."
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchUser;
