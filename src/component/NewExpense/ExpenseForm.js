import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredTitle: event.target.value,
  //     });
  //   };

  //   const amountChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredAmount: event.target.value,
  //     });
  //   };

  //   const dateChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredDate: event.target.value,
  //     });
  //   };

  const clickHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseForm(expenseData);
    // console.log(expenseData);
    // console.log(enteredDate);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };
  return (
    <form className="expense-form" onSubmit={clickHandler}>
      <div>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
