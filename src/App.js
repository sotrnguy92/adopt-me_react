import React from 'react';
import  ReactDOM  from 'react-dom';
import {Pet} from "./Pet"

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Atlas",
      animal: "Dog",
      breed: "Siberian Huskey",
    }),

    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    
    React.createElement(Pet, {
      name: "Simba",
      animal: "Lion",
      breed: "African Lion",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
