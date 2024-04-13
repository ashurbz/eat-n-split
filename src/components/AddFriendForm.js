import React, { useState } from "react";
import "./common.css";
const AddFriendForm = ({ addFriend }) => {
  const [formShow, setFormShow] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/100");

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleFormShow = () => {
    setFormShow(!formShow);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleAddFriend = () => {
    const newFriend = {
      name,
      id: new Date(),
      image,

      balance: 0,
    };
    addFriend(newFriend);
  };

  return (
    <div>
      <button className="right1" onClick={handleFormShow}>
        {formShow ? "Close" : "Add Friend"}
      </button>

      {formShow && (
        <div>
          <div className="form_container">
            <form onSubmit={handleOnSubmit}>
              <div className="name_field">
                <label>Friend Name</label>
                <input
                  type="text"
                  placeholder="Enter Friend Name"
                  onChange={handleOnChange}
                  value={name}
                />
              </div>
              <div className="image_field">
                <label>Enter Image Url</label>
                <input
                  type="text"
                  placeholder="Enter Image Url"
                  value={image}
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <button className="right" onClick={handleAddFriend}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFriendForm;
