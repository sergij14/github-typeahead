import { rest } from "msw";

export const handlers = [
  rest.get("https://api.github.com/users/serg", (req, res, ctx) => {
    console.log('logging');
    
    return res(
      ctx.json({
        login: "sergij14",
        avatar_url: "url2.png",
        html_url: "https://googl.ege",
        followers: 45,
        public_repos: 33,
        name: "sergi jaja",
      })
    );
  }),
  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Cherries",
          imagePath: "/images/cherries.png",
        },
        {
          name: "Hot Fudge",
          imagePath: "/images/hot-fudge.png",
        },
      ])
    );
  }),
];
