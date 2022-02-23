import {
  Container,
  Data,
  DataError,
  Input,
  Spinner,
  UserData,
  UserImage,
  UserInfo,
  UserName,
  UserURL,
} from "./SearchUser.styles";
import useSearchUser from "./useSearchUser";

const SearchUser = () => {
  const { loading, error, data, onSearch, onFocus, containerRef, isVisible } =
    useSearchUser();
  return (
    <Container ref={containerRef}>
      <Input
        isVisible={isVisible}
        autoFocus
        onFocus={onFocus}
        type="text"
        maxLength={30}
        placeholder="Search an user here..."
        onChange={onSearch}
      />

      <Data isVisible={isVisible}>
        {loading && <Spinner />}
        {error && <DataError>{error}</DataError>}
        {data && (
          <UserData>
            <UserImage>
              <a target="_blank" rel="noreferrer" href={data.html_url}>
                <img src={data.avatar_url} alt={data.login} />
              </a>
            </UserImage>
            <UserInfo>
              <UserName>
                {data.login} {data.name && `(${data.name})`}
              </UserName>
              <p>Followers: {data.followers}</p>
              <p>Public Repos: {data.public_repos}</p>
              <UserURL>
                <a href={data.html_url} target="_blank" rel="noreferrer">
                  Profile URL
                </a>
              </UserURL>
            </UserInfo>
          </UserData>
        )}
      </Data>
    </Container>
  );
};

export default SearchUser;
