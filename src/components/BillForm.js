import React, { useState } from "react";

import "./common.css";
const BillForm = ({ selected }) => {
  const [billValue, setBillValue] = useState();
  const [myShare, setMyShare] = useState();

  const handleBill = (e) => {
    setBillValue(e.target.value);
  };

  const handleShare = (e) => {
    setMyShare(e.target.value);
  };

  const handleSplitBill = () => {};

  return (
    <>
      {selected && (
        <div className="bill-form_container">
          <h3>Split A Bill With {selected?.name}</h3>
          <form>
            <div>
              <label>Bill Value</label>
              <input
                className="gap"
                type="number"
                placeholder="bill value"
                value={billValue}
                onChange={handleBill}
              />
            </div>
            <div>
              <label>Your expense</label>
              <input
                type="number"
                placeholder="Your Expense"
                value={myShare}
                onChange={handleShare}
              />
            </div>
            <div>
              <label>{selected?.name} Expense</label>
              <input
                className="gap"
                type="number"
                placeholder="X expense"
                disabled
                value={billValue - myShare}
              />
            </div>

            <div>
              <label>Who is Paying the bill?</label>
              <select>
                <option value={"You"}>You</option>
                <option value={selected?.name}>{selected?.name}</option>
              </select>
            </div>
            <div>
              <button onClick={handleSplitBill}>Split Bill</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default BillForm;
