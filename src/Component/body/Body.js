import React from "react";
import Sidenav from "./sidenav/Sidebar";
import "./body.css";
import RightsideContent from "./rightside/RIghtsideContent";

function MyBody() {
  return (
    <>
      <div className="mybody">
        <div className="leftContent">
          <Sidenav />
        </div>
        <div className="rightContent">
          <RightsideContent />
        </div>
      </div>
    </>
  );
}

export default MyBody;
