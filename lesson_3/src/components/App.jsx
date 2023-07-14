import React from "react";
import { MoviesConfig } from "../main";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1 className="heading">📺My movies</h1>
      <div className="cards">
        {MoviesConfig.map((item, index) => {
          return (
            <div className="card">
              <Card
                name={item.name}
                img={item.imgURL}
                liked={item.liked}
                createDate={item.created}
                key={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
