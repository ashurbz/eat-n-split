import React, { useState } from "react";
import "./common.css";
import Friend from "./Friend";

const FriendList = ({ data }) => {
  return (
    <div>
      {data.map((data) => {
        return <Friend data={data} />;
      })}
    </div>
  );
};

export default FriendList;
