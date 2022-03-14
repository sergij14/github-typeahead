import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SearchUser from "./SearchUser";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { Provider } from "react-redux";
import { RootState } from "../../state";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles";
import userEvent from "@testing-library/user-event";
import { searchUser } from "../../state/actions";

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

  it("renders pinner", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SearchUser />
        </ThemeProvider>
      </Provider>
    );

    const thunk = searchUser("serg");
    const dispatch = jest.fn();

    await thunk(dispatch);

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(2);
  });
});

// ERROR CASE

// test("handles error for scoops and toppings routes", async () => {
//   server.resetHandlers(
//     rest.get("http://3030/scoops", (req, res, ctx) => res(ctx.status(404))),
//     rest.get("http://3030/toppings", (req, res, ctx) => res(ctx.status(404)))
//   );

//   render(<OrderEntry />);

//   await waitFor(async () => {
//     const alerts = await screen.findAllByRole("alert");
//     expect(alerts).toHaveLength(2);
//   }); // await and findBy was not enough
// });
