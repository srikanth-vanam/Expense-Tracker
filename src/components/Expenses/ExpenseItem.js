import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const [price,setPrice]=useState(props.amount);
  const changeExpenseHandler = () => {
    console.log("Changes expense");
    setPrice('$100');
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={price}
        location={props.location}
        title={props.title}
      />
      <button onClick={changeExpenseHandler}>Change ExpenseAmount</button>
    </div>
  );
};

export default ExpenseItem;
