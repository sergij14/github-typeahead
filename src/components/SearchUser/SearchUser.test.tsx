import {
  render,
  screen,
  waitFor,
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
  let input: HTMLElement;

  const getInput = () => screen.getByPlaceholderText(/search an user here/i);
  const typeInField = (inputToType: HTMLElement) =>
    userEvent.type(inputToType, "{selectall}value");

  beforeEach(() => {
    testStore = createTestStore();
    render(renderComponent(() => <SearchUser />, testStore)); //eslint-disable-line
    input = getInput();
  });

  it("renders a component", () => {
    expect(input).toBeInTheDocument();
  });

  it("renders loading spinner and removes after fetching data", async () => {
    typeInField(input);

    const spinner = await screen.findByRole("spinner");
    expect(spinner).toBeInTheDocument();

    const spinnerNull = screen.queryByRole("spinner");
    await waitFor(() => {
      expect(spinnerNull).not.toBeInTheDocument();
    });
  });

  it("renders fetched user data", async () => {
    typeInField(input);
    const text = await screen.findByText("Followers: 45");
    expect(text).toBeInTheDocument();
  });

  it("shows error alert on server error", async () => {
    server.resetHandlers(
      rest.get("https://api.github.com/users/*", (req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    typeInField(input);

    await waitFor(async () => {
      const alert = await screen.findByRole("alert");
      expect(alert).toBeInTheDocument();
    });
  });

  it("removes data from dom when search term is empty", async () => {
    typeInField(input);
    const text = await screen.findByText("sergij14 (sergi jaja)");
    expect(text).toBeInTheDocument();

    userEvent.type(input, "{selectall}{del}");

    const userData = screen.queryByRole(/user-data/i);
    await waitFor(() => {
      expect(userData).not.toBeInTheDocument();
    });
  });
});
