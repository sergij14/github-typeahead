export interface UserData {
  login: string;
  avatar_url: string;
  html_url: string;
  location: string;
  name: string;
}

export interface UserState {
  loading: boolean;
  error: string | null;
  data: UserData | null;
}
