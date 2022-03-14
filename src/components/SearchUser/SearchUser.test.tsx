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

  it("renders data", async () => {
    render(renderComponent(() => <SearchUser />, testStore));
    const input = screen.getByPlaceholderText(/search an user here/i);

    userEvent.type(input, "{selectall}sergsdgfsd");
    const text = await screen.findByText("Followers: 45");
    expect(text).toBeInTheDocument();
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
