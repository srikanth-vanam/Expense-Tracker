import { useState } from "react";
import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
function App() {
  // Passed expenses array to useState
  const [expenses, setExpenses]=useState([
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
  ])
  // function to get data from child comp NewExpense
  const AddExpenseHandler=(expense)=>{
    console.log("in app.js");
    console.log(expense);
    setExpenses((prevState)=>{
      // return type is array[] not {} braces
      return[
        ...prevState,expense
      ]
    })
    console.log(expenses);
  }
  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler}/>
      {/* before this map function added "ExpenseItem component" repeatedly like --<ExpenseItem></ExpenseItem>*4-- */}
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
