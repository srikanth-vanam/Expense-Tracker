import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false);
  // function to get data from child comp ExpenseForm
  const saveExpenseDataHandler = (userEnteredData) => {
    const ExpenseData = {
      ...userEnteredData,
      id: Math.random().toString(),
    };
    console.log(ExpenseData);
    // passing expenseData from child to parent --> NE to app.js
    props.onAddExpense(ExpenseData);
    // onsubmit making clicked false
    setClicked(false);
  };
  const onClickHandler = () => {
    setClicked(true);
  };
  const cancelHandler = () => {
    setClicked(false);
  };
  return (
    <div className="new-expense">
      {!clicked && <button onClick={onClickHandler}>Add New Expense</button>}

      {clicked && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
