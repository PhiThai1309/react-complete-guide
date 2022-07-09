import "./ExpenseItem.css";
import React, { useState } from "react";
import Expense from "./NewExpense/Expense";
import ExpenseFilter from "./NewExpense/ExpenseFilter";

function ExpenseItem(props) {
  const { item } = props;

  const [filterValue, setChoosenValue] = useState("2019");

  const choosenValue = (value) => {
    setChoosenValue(value);
  };

  const filterArray = item.filter((value) => {
    return value.date.getFullYear().toString() === filterValue;
  });

  return (
    <>
      <ExpenseFilter selected={filterValue} value={choosenValue} />
      {filterArray.map((obj) => (
        // const year = obj.date.getFullYear()
        <Expense
          key={obj.id}
          title={obj.title}
          date={obj.date}
          amount={obj.amount}
        />
      ))}
    </>
  );
}

export default ExpenseItem;
