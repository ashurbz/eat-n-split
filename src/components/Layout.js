import React from "react";
import "./common.css";
import FriendList from "./FriendList";
import AddFriendForm from "./AddFriendForm";
import BillForm from "./BillForm";

const Layout = () => {
  return (
    <div className="layout_container">
      <div className="friend_container">
        <FriendList />
        <AddFriendForm />
      </div>
      <div className="bill_container">
        <BillForm />
      </div>
    </div>
  );
};

export default Layout;
