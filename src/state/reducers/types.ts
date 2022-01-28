export interface UserData {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface userState {
  loading: boolean;
  error: string | null;
  data: UserData | null;
}
