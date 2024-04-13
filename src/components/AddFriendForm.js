import React from "react";
import "./common.css";
const AddFriendForm = () => {
  return (
    <div>
      <button className="right1">Add Friend</button>
      <div className="form_container">
        <form>
          <div className="name_field">
            <label>Friend Name</label>
            <input type="text" placeholder="Enter Friend Name" />
          </div>
          <div className="image_field">
            <label>Enter Image Url</label>
            <input type="text" placeholder="Enter Image Url" />
          </div>
          <div>
            <button className="right">Add</button>
          </div>
        </form>
      </div>

      <button className="right">Close</button>
    </div>
  );
};

export default AddFriendForm;
