import React from "react";

import "./card.css";

function Card(props) {
  return (
    <div className="imgcard">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
        alt=""
      />
      <p>{props.text}</p>
    </div>
  );
}
export default Card;
