interface UserData {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface UsersState {
  loading: boolean;
  error: string | null;
  data: UserData | null;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const usersReducer = (
  state: UsersState = initialState,
  action: any
): UsersState => {
  switch (action.type) {
    case "SEARCH_USERS": {
      return { loading: true, error: null, data: null };
    }
    case "SEARCH_USERS_SUCCESS": {
      return { loading: false, error: null, data: action.payload };
    }

    case "SEARCH_USERS_ERROR": {
      return { loading: false, error: action, data: action.payload };
    }

    default: {
      return state;
    }
  }
};
