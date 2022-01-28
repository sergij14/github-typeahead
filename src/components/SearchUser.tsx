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
  }, [term]); //eslint-disable-line

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  // using typed selector from custom hook to get the state
  const { data, error, loading } = useTypedSelector((state) => state.user);

  return (
    <div>
      <input
        autoFocus
        type="text"
        placeholder="Search an user here..."
        onChange={onSearch}
      />
      <div>
        {loading && <p>Loading</p>}
        {error && <p>{error}</p>}
        <div>
          <h4>{data?.login}</h4>
          <p><a href={data?.html_url}>{data?.html_url}</a></p>
          <img src={data?.avatar_url} alt={data?.login} />
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
