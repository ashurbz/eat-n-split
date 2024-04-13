import React from "react";

import "./common.css";
const Friend = ({ data }) => {
  return (
    <div className="friend_data">
      <div>
        <img src={data.image} alt="" />
      </div>
      <div>
        <h4>{data.name}</h4>
        <p>{data.balance}</p>
      </div>
      <div>
        <button>Select</button>
      </div>
    </div>
  );
};

export default Friend;
