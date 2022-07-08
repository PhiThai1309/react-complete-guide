import logo from "./logo.svg";
import ExpenseForm from "./component/NewExpense/ExpenseForm";
import ExpenseItem from "./component/ExpenseItem";
import "./App.css";
import NewExpense from "./component/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2031, 2, 28),
    },
    {
      id: "e2",
      title: "Notebook",
      amount: 132.32,
      date: new Date(2031, 2, 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2031, 2, 28),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App");
    console.log(expenses);
    expenses.push(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
