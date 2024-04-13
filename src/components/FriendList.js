import React, { useState } from "react";
import "./common.css";
import Friend from "./Friend";

const FriendList = ({ data, selectedFriend }) => {
  return (
    <div>
      {data.map((data) => {
        return <Friend data={data} selectedFriend={selectedFriend} />;
      })}
    </div>
  );
};

export default FriendList;
