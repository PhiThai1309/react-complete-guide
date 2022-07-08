import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div>
      <ExpenseForm onSaveExpenseForm={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
