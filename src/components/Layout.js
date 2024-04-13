import React, { useState } from "react";
import "./common.css";
import FriendList from "./FriendList";
import AddFriendForm from "./AddFriendForm";
import BillForm from "./BillForm";

const Layout = () => {
  const [friendList, setFriendList] = useState([
    {
      name: "Ashish",
      image: "https://i.pravatar.cc/100/1334",
      balance: "He ows you 7 rs",
      id: new Date(),
    },
    {
      name: "Shiva",
      image: "https://i.pravatar.cc/100/434",
      balance: "He ows you 7 rs",
      id: new Date(),
    },
    {
      name: "Aditya",
      image: "https://i.pravatar.cc/100/4874",
      balance: "He ows you 7 rs",
      id: new Date(),
    },
  ]);

  const addFriend = (newFriend) => {
    setFriendList([...friendList, newFriend]);
  };

  return (
    <div className="layout_container">
      <div className="friend_container">
        <FriendList data={friendList} />
        <AddFriendForm addFriend={addFriend} />
      </div>
      <div className="bill_container">
        <BillForm />
      </div>
    </div>
  );
};

export default Layout;
