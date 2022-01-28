import { SearchUserType } from "./SearchUserContainer";

const SearchUser = ({ loading, error, data, onSearch }: SearchUserType) => {
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
          <p>
            <a href={data?.html_url}>{data?.html_url}</a>
          </p>
          <img src={data?.avatar_url} alt={data?.login} />
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
