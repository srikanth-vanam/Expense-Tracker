import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [editTitle, seteditTitle] = useState("");
  const [editAmount, seteditAmount] = useState("");
  const [editDate, seteditDate] = useState("");
  // single useState for multiple states

  // const [userInput, setUserInput] = useState({
  //   editTitle: "",
  //   editAmount: "",
  //   editDate: "",
  // });

  const titleChangeHandler = (e) => {
    // using object destructuring

    // setUserInput({
    //   ...userInput,
    //   editTitle: e.target.value,
    // });

    // best way of doing above work

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     editTitle: e.target.value,
    //   };
    // });
    seteditTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    seteditAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    seteditDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title:editTitle,
      amount:editAmount,
      date:new Date(editDate),
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form">
        <div className="form-input">
          <label for="expense-title">Expense title</label>
          <input
            type="text"
            id="expense-title"
            name="expense-title"
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="form-input">
          <label for="expense-amount">Expense Amount</label>
          <input
            type="text"
            id="expense-amount"
            name="expense-amount"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="form-input">
          <label for="expense-date">Expense Date</label>
          <input
            type="date"
            id="expense-date"
            name="expense-date"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="form-input">
          <button type="submit">
            Form-Button
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
