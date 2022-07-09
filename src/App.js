import logo from "./logo.svg";
import ExpenseForm from "./component/NewExpense/ExpenseForm";
import ExpenseItem from "./component/ExpenseItem";
import "./App.css";
import NewExpense from "./component/NewExpense/NewExpense";
import ExpenseFilter from "./component/NewExpense/ExpenseFilter";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2018, 2, 28),
  },
  {
    id: "e2",
    title: "Notebook",
    amount: 132.32,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "Book",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e5",
    title: "Lib",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem key={expenses.id} item={expenses} />
    </div>
  );
}

export default App;
