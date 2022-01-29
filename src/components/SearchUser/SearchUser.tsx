import {
  Container,
  Data,
  DataError,
  Input,
  UserData,
  UserImage,
  UserInfo,
  UserName,
} from "./SearchUser.styles";
import { SearchUserPropTypes } from "./SearchUser.types";

const SearchUser = ({
  loading,
  error,
  data,
  onSearch,
  onFocus,
  isVisible,
  containerRef,
}: SearchUserPropTypes) => {
  return (
    <Container ref={containerRef}>
      <Input
        isVisible={isVisible}
        autoFocus
        onFocus={onFocus}
        type="text"
        placeholder="Search an user here..."
        onChange={onSearch}
      />
      {isVisible && (
        <Data>
          {loading && <p>Loading...</p>}
          {error && <DataError>{error}</DataError>}
          {data && (
            <UserData>
              <UserImage>
                <a target="_blank" rel="noreferrer" href={data.html_url}>
                  <img src={data.avatar_url} alt={data.login} />
                </a>
              </UserImage>
              <UserInfo>
                <UserName>{data.login}</UserName>
                <p>Followers: {data.followers}</p>
                <p>Public Repos: {data.public_repos}</p>
              </UserInfo>
            </UserData>
          )}
        </Data>
      )}
    </Container>
  );
};

export default SearchUser;
