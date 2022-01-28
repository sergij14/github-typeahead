import {
  Container,
  Data,
  DataError,
  DataLoading,
  Input,
  UserData,
  UserImage,
  UserName,
  UserUrl,
} from "./SearchUser.styles";
import { SearchUserType } from "./SearchUserContainer";

const SearchUser = ({ loading, error, data, onSearch }: SearchUserType) => {
  return (
    <Container>
      <Input
        autoFocus
        type="text"
        placeholder="Search an user here..."
        onChange={onSearch}
      />
      {(loading || error || data) && (
        <Data>
          {loading && <DataLoading>Loading</DataLoading>}
          {error && <DataError>{error}</DataError>}
          <UserData>
            <UserName>{data?.login}</UserName>
            <UserUrl>
              <a href={data?.html_url}>{data?.html_url}</a>
            </UserUrl>
            <UserImage src={data?.avatar_url} alt={data?.login} />
          </UserData>
        </Data>
      )}
    </Container>
  );
};

export default SearchUser;
