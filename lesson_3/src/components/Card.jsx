import React from "react";

const Card = ({ name, img, liked, createDate }) => {
  return (
    <div>
      <div className="top">
        <h2>{name}</h2>
        <img src={img} alt={name} />
      </div>
      <div className="bottom">
        <p>{liked}</p>
        <p>{createDate}</p>
      </div>
    </div>
  );
};

export default Card;
