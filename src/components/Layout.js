import React, { useState } from "react";
import "./common.css";
import FriendList from "./FriendList";
import AddFriendForm from "./AddFriendForm";
import BillForm from "./BillForm";

const Layout = () => {
  const [selected, setSelected] = useState(null);
  const [friendList, setFriendList] = useState([
    {
      name: "Ashish",
      image: "https://i.pravatar.cc/100/1334",
      balance: "He ows you 7 rs",
      id: crypto.randomUUID(),
    },
    {
      name: "Shiva",
      image: "https://i.pravatar.cc/100/434",
      balance: "He ows you 7 rs",
      id: crypto.randomUUID(),
    },
    {
      name: "Aditya",
      image: "https://i.pravatar.cc/100/4874",
      balance: "He ows you 7 rs",
      id: crypto.randomUUID(),
    },
  ]);

  const addFriend = (newFriend) => {
    if (newFriend.name === "") return;
    setFriendList([...friendList, newFriend]);
  };

  const selectedFriend = (data) => {
    setSelected(data);
  };

  return (
    <div className="layout_container">
      <div className="friend_container">
        <FriendList data={friendList} selectedFriend={selectedFriend} />
        <AddFriendForm addFriend={addFriend} />
      </div>
      <div className="bill_container">
        <BillForm selected={selected} />
      </div>
    </div>
  );
};

export default Layout;
