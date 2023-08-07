import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const[editTitle,seteditTitle]=useState('');
  const[editAmount,seteditAmount]=useState('');
  const[editDate,seteditDate]=useState('');

  const titleChangeHandler=(e)=>{
    seteditTitle(e.target.value);
  }
  const amountChangeHandler=(e)=>{
    seteditAmount(e.target.value);
  }
  const dateChangeHandler=(e)=>{
      seteditDate(e.target.value);
  }

  return (
    <form>
      <div className="form">
        <div className="form-input">
          <label for="expense-title">Expense title</label>
          <input type="text"
            id="expense-title"
            name="expense-title"
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="form-input">
          <label for="expense-amount">Expense Amount</label>
          <input type="text"
            id="expense-amount"
            name="expense-amount"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="form-input">
          <label for="expense-date">Expense Date</label>
          <input type="date"
            id="expense-date"
            name="expense-date"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="form-input">
          <button type="submit">Form-Button</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
