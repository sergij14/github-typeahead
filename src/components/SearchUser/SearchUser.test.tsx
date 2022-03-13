import { render, screen } from "@testing-library/react";
import SearchUser from "./SearchUser";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { Provider } from "react-redux";
import { RootState } from "../../state";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles";

const initialState: RootState = {
  user: {
    data: {
      login: "",
      avatar_url: "",
      html_url: "",
      followers: 0,
      public_repos: 0,
      name: "",
    },
    error: null,
    loading: false,
  },
};

describe("SearchUser", () => {
  const mockStore = configureStore();

  let store: MockStoreEnhanced<unknown, {}>;

  const renderComponent = (render: () => JSX.Element) => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <>{render()}</>
        </ThemeProvider>
      </Provider>
    );
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });
  it("renders a component", () => {
    render(renderComponent(() => <SearchUser />));
    expect(
      screen.getByPlaceholderText(/search an user here/i)
    ).toBeInTheDocument();
  });
});
