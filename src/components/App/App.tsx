import React from "react";
import SearchUserContainer from "../SearchUser/SearchUserContainer";
import { AppContainer, MockContent } from "./App.styles";

const App = () => {
  return (
    <AppContainer>
      <SearchUserContainer />
      <MockContent>
        <h2>Mocked Content</h2>

        <h4>Heading1</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
          quidem molestiae eveniet voluptates fuga accusamus voluptate dolorum?
          Commodi iste animi non placeat est deleniti, recusandae earum
          provident omnis soluta libero.t est deleniti, recusandae earum
          provident omnis soluta libero.
        </p>

        <h4>Heading2</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
          quidem molestiae eveniet voluptates fuga accusamus voluptate dolorum?
          Commodi iste animi non placeat est deleniti, recusandae earum
          provident omnis soluta libero.a accusamus voluptate dolorum? Commodi
          iste animi non placeat
        </p>

        <h4>Heading3</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
          quidem molestiae eveniet voluptates fuga accusamus voluptate dolorum?
          Commodi iste animi non placeat est deleniti, recusandae earum
          provident omnis soluta libero. molestiae eveniet voluptates fuga
          accusamus
        </p>

        <h4>Heading5</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
          quidem molestiae eveniet voluptates fuga accusamus voluptate dolorum?
          Commodi iste animi non placeat est deleniti, recusandae earum
          provident omnis soluta libero.consectetur adipisicing elit. Sequi,
          quidem molestiae eveniet voluptat
        </p>

        <h4>Heading5</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
          quidem molestiae eveniet voluptates fuga accusamus voluptate dolorum?
          Commodi iste animi non placeat est deleniti, recusandae earum
          provident omnis soluta libero.et voluptates fuga accusamus voluptate
          dolorum? Commodi iste animi non pla
        </p>
      </MockContent>
    </AppContainer>
  );
};

export default App;
