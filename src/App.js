import { useState } from "react";
import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
// hard-coded expense items
const EXPENSE_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Pitlam",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Hyderabad",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Nizamabad",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Banswada",
  },
];

function App() {
  // Passed expenses array to useState
  const [expenses, setExpenses] = useState(EXPENSE_DATA);
  // function to get data from child comp NewExpense
  const AddExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      // return type is array[] not {} braces
      return [expense, ...prevState];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      {/* completely changed the previous code */}
      <ExpenseItem items={expenses}></ExpenseItem>
    </div>
  );
}

export default App;
