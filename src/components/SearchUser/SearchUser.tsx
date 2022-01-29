import {
  Container,
  Data,
  DataError,
  Input,
  UserData,
  UserImage,
  UserInfo,
  UserName,
  UserUrl,
} from "./SearchUser.styles";
import { SearchUserType } from "./SearchUserContainer";

const SearchUser = ({
  loading,
  error,
  data,
  onSearch,
  onFocus,
  isVisible,
  containerRef,
}: SearchUserType) => {
  console.log(isVisible);

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
              <UserImage src={data.avatar_url} alt={data.login} />
              <UserInfo>
                <UserName>{data.login}</UserName>
                <UserUrl>
                  <a target="_blank" rel="noreferrer" href={data.html_url}>
                    {data.html_url}
                  </a>
                </UserUrl>
              </UserInfo>
            </UserData>
          )}
        </Data>
      )}
    </Container>
  );
};

export default SearchUser;
