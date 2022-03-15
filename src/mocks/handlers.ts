import { rest } from "msw";

export const handlers = [
  rest.get("https://api.github.com/users/:userName", (req, res, ctx) => {
    const {userName} = req.params;
    return res(
      ctx.json({
        login: userName,
        avatar_url: "url2.png",
        html_url: "https://googl.ege",
        followers: 45,
        public_repos: 33,
        name: "Sergi Jajanidze",
      })
    );
  }),
];
