import React from "react";

import "./common.css";
const Friend = ({ data }) => {
  return (
    <div className="friend_data">
      <div>
        <img src={data.img} alt="" />
      </div>
      <div>
        <h4>{data.friendName}</h4>
        <p>{data.balance}</p>
      </div>
      <div>
        <button>Select</button>
      </div>
    </div>
  );
};

export default Friend;
