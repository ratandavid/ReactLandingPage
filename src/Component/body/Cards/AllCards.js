import React from "react";
import "./allcards.css";
import Card from "./cards/card";

function AllCards() {
  return (
    <div className="allcards">
      <Card text="Maxican Taco" />
      <Card text="Farm House Pizza" />
      <Card text="Chicken Burger" />
      <Card text="Loaded Nachos" />
      {/* <Card text="Hakka Noodles" /> */}
    </div>
  );
}

export default AllCards;
