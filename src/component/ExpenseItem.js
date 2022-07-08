import "./ExpenseItem.css";
import React, { useState } from "react";

function ExpenseItem(props) {
  // const { item } = props;
  // const { title, amount, date } = item;
  const [label, setLabel] = useState(props.title);

  const clickHandler = () => {
    setLabel("Updated!");
    console.log(label);
  };
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{label}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;
