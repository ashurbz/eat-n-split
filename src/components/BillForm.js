import React from "react";

import "./common.css";
const BillForm = () => {
  return (
    <div className="bill-form_container">
      <h3>Split A Bill With X</h3>
      <form>
        <div>
          <label>Bill Value</label>
          <input className="gap" type="text" placeholder="bill value" />
        </div>
        <div>
          <label>Your expense</label>
          <input type="text" placeholder="Your Expense" />
        </div>
        <div>
          <label>X Expense</label>
          <input className="gap" type="text" placeholder="X expense" />
        </div>

        <div>
          <label>Who is Paying the bill?</label>
          <select>
            <option value={"you"}>you</option>
            <option value={"x"}>X</option>
          </select>
        </div>
        <div>
          <button>Split Bill</button>
        </div>
      </form>
    </div>
  );
};

export default BillForm;
