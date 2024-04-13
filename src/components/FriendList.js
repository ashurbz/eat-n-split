import React from "react";
import "./common.css";
import Friend from "./Friend";

const friendData = [
  {
    friendName: "Ashish",
    img: "https://i.pravatar.cc/100",
    balance: "He ows you 7 rs",
    id: new Date(),
  },
  {
    friendName: "Shiva",
    img: "https://i.pravatar.cc/100",
    balance: "He ows you 7 rs",
    id: new Date(),
  },
  {
    friendName: "Aditya",
    img: "https://i.pravatar.cc/100",
    balance: "He ows you 7 rs",
    id: new Date(),
  },
];
const FriendList = () => {
  return (
    <div>
      {friendData.map((data) => {
        return <Friend data={data} />;
      })}
    </div>
  );
};

export default FriendList;
