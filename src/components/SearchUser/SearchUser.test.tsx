import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SearchUser from "./SearchUser";
import userEvent from "@testing-library/user-event";
import {
  createTestStore,
  renderComponent,
  StoreType,
} from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("SearchUser", () => {
  let testStore: StoreType;

  beforeEach(() => {
    testStore = createTestStore();
  });

  it("renders a component", () => {
    render(renderComponent(() => <SearchUser />, testStore));
    expect(
      screen.getByPlaceholderText(/search an user here/i)
    ).toBeInTheDocument();
  });

  it("renders loading spinner and removes after fetching data", async () => {
    render(renderComponent(() => <SearchUser />, testStore));
    const input = screen.getByPlaceholderText(/search an user here/i);

    userEvent.type(input, "{selectall}value");

    const spinner = await screen.findByRole("spinner");
    expect(spinner).toBeInTheDocument();

    const spinnerNull = screen.queryByRole("spinner");
    await waitFor(() => {
      expect(spinnerNull).not.toBeInTheDocument();
    });
  });

  it("renders fetched user data", async () => {
    render(renderComponent(() => <SearchUser />, testStore));
    const input = screen.getByPlaceholderText(/search an user here/i);

    userEvent.type(input, "{selectall}value");
    const text = await screen.findByText("Followers: 45");
    expect(text).toBeInTheDocument();
  });

  it("shows error alert on server error", async () => {
    server.resetHandlers(
      rest.get("https://api.github.com/users/*", (req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    render(renderComponent(() => <SearchUser />, testStore));
    const input = screen.getByPlaceholderText(/search an user here/i);
    userEvent.type(input, "{selectall}value");

    await waitFor(async () => {
      const alert = await screen.findByRole("alert");
      expect(alert).toBeInTheDocument();
    });
  });


  it("data disappearance when search term is empty", async () => {
    render(renderComponent(() => <SearchUser />, testStore));
    const input = screen.getByPlaceholderText(/search an user here/i);

    userEvent.type(input, "{selectall}value");
    const text = await screen.findByText("sergij14 (sergi jaja)");
    expect(text).toBeInTheDocument();
    
    userEvent.type(input, "{selectall}{del}");
    
    const userData = screen.queryByRole(/user-data/i);
    await waitFor(() => {
      expect(userData).not.toBeInTheDocument();
    });

  });

});
